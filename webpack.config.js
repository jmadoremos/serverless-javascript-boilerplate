#!/usr/bin/env node

'use strict';

const path = require('path');
const slsWebpack = require('serverless-webpack');
const { BannerPlugin } = require('webpack');

const ENTRY_POINTS = slsWebpack.lib.entries;
const IS_LOCAL = slsWebpack.lib.webpack.isLocal;
const SLS_STAGE = slsWebpack.lib.options.stage;

function optimization() {
    const options = {};
    options.minimize = false;

    if (IS_LOCAL) {
        options.removeAvailableModules = false;
        options.removeEmptyChunks = false;
        options.splitChunks = false;
    }

    return options;
}

module.exports = {
    target: 'node',
    entry: ENTRY_POINTS,
    mode: IS_LOCAL ? 'development' : 'production',
    node: false,
    optimization: optimization(),
    devtool: 'inline-cheap-module-source-map',
    stats: 'errors-only',
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'build', SLS_STAGE)
    },
    performance: {
        hints: false
    },
    plugins: [
        new BannerPlugin({
            banner: '#!/usr/bin/env node',
            raw: true
        })
    ],
    resolve: {
        symlinks: false,
        extensions: ['.js']
    }
};
