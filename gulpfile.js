'use strict';

const archiver = require('archiver');
const proc = require('child_process');
const del = require('del');
const fs = require('fs');
const gulp = require('gulp');

const getPackageOutput = (region, stage) => `sls-pkg-${region}-${stage}`;
const getPackageDirectory = (region, stage) => `build/${getPackageOutput(region, stage)}`;
const getArchiveOutput = (region, stage) => `dist/source-${region}-${stage}.zip`;

function cleanServerlessArtifacts() {
    console.log(`> Deleting previous builds`);

    const queue = [];
    queue.push('build/sls-*');
    queue.push('dist/*.zip');

    return del(queue);
}

function packageServerlessArtifact(region, stage) {
    const header = `Pkg (${region}, ${stage})`;
    const cmd = `node --max-old-space-size=4096 node_modules/.bin/sls package ` +
        `--region ${region} ` +
        `--stage ${stage} ` +
        `--package ${getPackageDirectory(region, stage)}`;

    try {
        console.log(`> ${header} | Executing: ${cmd}`);
        proc.execSync(cmd);
        console.log(`> ${header} | Command exited`);
    }
    catch (err) { console.log(`> ${header} | Command exited with error: [${err.name}] ${err.message}`); }
}

async function archiveServerlessArtifactAsync(region, stage) {
    const header = `Zip (${region}, ${stage})`;

    return new Promise((resolve, reject) => {
        const zipFilename = getArchiveOutput(region, stage);
        const zipArchiver = archiver('zip');

        const outputStream = fs.createWriteStream(zipFilename);
        outputStream.on('close', () => {
            console.log(`> ${header} | Archive created: ${zipFilename}`);
            resolve();
        });
        zipArchiver.pipe(outputStream);

        zipArchiver.directory(`${getPackageDirectory(region, stage)}/`, `${getPackageOutput(region, stage)}/`);
        zipArchiver.directory('sls/', 'sls/');
        zipArchiver.append(fs.createReadStream('package-lock.json'), { name: 'package-lock.json' });
        zipArchiver.append(fs.createReadStream('package.json'), { name: 'package.json' });
        zipArchiver.append(fs.createReadStream('serverless.yml'), { name: 'serverless.yml' });
        zipArchiver.finalize(err => {
            console.log(`> ${header} | Error encountered: [${err.name}] ${err.message}`);
            reject(err);
        });
    });
}

async function orchestrateRegionStageAsync (region, stage) {
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }

    packageServerlessArtifact(region, stage);
    await archiveServerlessArtifactAsync(region, stage);
};

gulp.task('clean', cleanServerlessArtifacts);

const processUSEast1Dev = async () => { return await orchestrateRegionStageAsync('us-east-1', 'dev') };
gulp.task('package-us-east-1-dev', processUSEast1Dev);

const processUSWest1Dev = async () => { return await orchestrateRegionStageAsync('us-west-1', 'dev') };
gulp.task('package-us-west-1-dev', processUSWest1Dev);

gulp.task('package-all', gulp.series(
    'clean',
    gulp.parallel('package-us-east-1-dev', 'package-us-west-1-dev')
));
