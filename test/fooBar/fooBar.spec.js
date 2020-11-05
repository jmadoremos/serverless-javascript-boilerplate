'use strict';

// Test dependencies
const { expect } = require('chai');

// Module file + mock data file
const mockFile = require('./fooBar.mock.json');
const moduleFile = require(`../../src/fooBar/fooBar`);

// Module level
describe('src/fooBar/fooBar', function () {
    // Function level
    describe('getKey()', function () {
        // Directed mock data for the function-under-test
        const mockFunction = mockFile['getKey()'];

        // Assertions
        it('should be a function', () =>
            expect(moduleFile.getKey).to.be.a('function'));

        // Scenario level
        describe('if called without arguments', function () {
            // Data-under-test
            let result, error;

            // Test data + expected results/errors
            const scenario = mockFunction['if called without arguments'];
            const expectedResult = scenario['expectedResult'];

            // Preparation
            before(function () {
                try { result = moduleFile.getKey(); }
                catch (err) { error = err; }
            });

            // Assertions
            it('should not throw any error', () =>
                expect(error).to.not.exist);

            it('should return a value equal to expected result', () =>
                expect(result).to.equal(expectedResult));
        });
    });

    describe('getValue()', function () {
        // Directed mock data for the function-under-test
        const mockFunction = mockFile['getValue()'];

        // Assertions
        it('should be a function', () =>
            expect(moduleFile.getValue).to.be.a('function'));

        // Scenario level
        describe('if called without arguments', function () {
            // Data-under-test
            let result, error;

            // Test data + expected results/errors
            const scenario = mockFunction['if called without arguments'];
            const expectedResult = scenario['expectedResult'];

            // Preparation
            before(function () {
                try { result = moduleFile.getValue(); }
                catch (err) { error = err; }
            });

            // Assertions
            it('should not throw any error', () =>
                expect(error).to.not.exist);

            it('should return a value equal to expected result', () =>
                expect(result).to.equal(expectedResult));
        });
    });
});
