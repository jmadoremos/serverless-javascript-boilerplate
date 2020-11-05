'use strict';

// Test dependencies
const { expect } = require('chai');
const { assert, stub } = require('sinon');

// Module file + mock data file
const mockFile = require('./index.mock.json');
const moduleFile = require(`../../src/fooBar/index`);

// Module dependencies
const fooBarModule = require('../../src/fooBar/fooBar');

// Module level
describe('src/fooBar/index', function () {
    // Function level
    describe('handler(event, context, callback)', function () {
        // Directed mock data for the function-under-test
        const mockFunction = mockFile['handler(event, context, callback)'];

        // Assertions
        it('should be a function', () =>
            expect(moduleFile.handler).to.be.a('function'));

        // Scenario level
        describe('if event is falsy', function () {
            // Data-under-test
            let result, error;

            // Test data + expected results/errors
            const scenario = mockFunction['if event is falsy'];
            const mockEvent = scenario['event'];
            const mockContext = scenario['context'];
            const mockFooBar_getKey = scenario['fooBar_getKey'];
            const mockFooBar_getValue = scenario['fooBar_getValue'];
            const mockCallbackArguments = scenario['callbackArguments'];

            // Stubs
            let stubCallback;
            let stubFooBar_getKey;
            let stubFooBar_getValue;

            // Preparation
            before(function () {
                stubCallback = stub();

                stubFooBar_getKey = stub(fooBarModule, 'getKey');
                stubFooBar_getKey.returns(mockFooBar_getKey);

                stubFooBar_getValue = stub(fooBarModule, 'getValue');
                stubFooBar_getValue.returns(mockFooBar_getValue);

                try { result = moduleFile.handler(mockEvent, mockContext, stubCallback); }
                catch (err) { error = err; }
            });

            // Cleanup
            after(function () {
                stubFooBar_getKey.restore();
                stubFooBar_getValue.restore();
            });

            // Assertions
            it('should call fooBar.getKey() once', () =>
                assert.calledOnce(stubFooBar_getKey));

            it('should call fooBar.getValue() once', () =>
                assert.calledOnce(stubFooBar_getValue));

            it('should call callback(err, res) once', () =>
                assert.calledOnce(stubCallback));

            it('should call callback with expected arguments', () =>
                assert.calledWith(stubCallback,
                    mockCallbackArguments[0], // args[0]
                    JSON.stringify(mockCallbackArguments[1], null, 2)));  // args[1]

            it('should not throw any error', () =>
                expect(error).to.not.exist);

            it('should not return any value', () =>
                expect(result).to.not.exist);
        });

        describe('if context is falsy', function () {
            // Data-under-test
            let result, error;

            // Test data + expected results/errors
            const scenario = mockFunction['if context is falsy'];
            const mockEvent = scenario['event'];
            const mockContext = scenario['context'];
            const mockFooBar_getKey = scenario['fooBar_getKey'];
            const mockFooBar_getValue = scenario['fooBar_getValue'];
            const mockCallbackArguments = scenario['callbackArguments'];

            // Stubs
            let stubCallback;
            let stubFooBar_getKey;
            let stubFooBar_getValue;

            // Preparation
            before(function () {
                stubCallback = stub();

                stubFooBar_getKey = stub(fooBarModule, 'getKey');
                stubFooBar_getKey.returns(mockFooBar_getKey);

                stubFooBar_getValue = stub(fooBarModule, 'getValue');
                stubFooBar_getValue.returns(mockFooBar_getValue);

                try { result = moduleFile.handler(mockEvent, mockContext, stubCallback); }
                catch (err) { error = err; }
            });

            // Cleanup
            after(function () {
                stubFooBar_getKey.restore();
                stubFooBar_getValue.restore();
            });

            // Assertions
            it('should call fooBar.getKey() once', () =>
                assert.calledOnce(stubFooBar_getKey));

            it('should call fooBar.getValue() once', () =>
                assert.calledOnce(stubFooBar_getValue));

            it('should call callback(err, res) once', () =>
                assert.calledOnce(stubCallback));

            it('should call callback with expected arguments', () =>
                assert.calledWith(stubCallback,
                    mockCallbackArguments[0], // args[0]
                    JSON.stringify(mockCallbackArguments[1], null, 2)));  // args[1]

            it('should not throw any error', () =>
                expect(error).to.not.exist);

            it('should not return any value', () =>
                expect(result).to.not.exist);
        });

        describe('if callback is falsy', function () {
            // Data-under-test
            let result, error;

            // Test data + expected results/errors
            const scenario = mockFunction['if callback is falsy'];
            const mockEvent = scenario['event'];
            const mockContext = scenario['context'];
            const mockFooBar_getKey = scenario['fooBar_getKey'];
            const mockFooBar_getValue = scenario['fooBar_getValue'];
            const expectedError = scenario['expectedError'];

            // Stubs
            let stubFooBar_getKey;
            let stubFooBar_getValue;

            // Preparation
            before(function () {
                stubFooBar_getKey = stub(fooBarModule, 'getKey');
                stubFooBar_getKey.returns(mockFooBar_getKey);

                stubFooBar_getValue = stub(fooBarModule, 'getValue');
                stubFooBar_getValue.returns(mockFooBar_getValue);

                try { result = moduleFile.handler(mockEvent, mockContext, undefined); }
                catch (err) { error = err; }
            });

            // Cleanup
            after(function () {
                stubFooBar_getKey.restore();
                stubFooBar_getValue.restore();
            });

            // Assertions
            it('should call fooBar.getKey() once', () =>
                assert.calledOnce(stubFooBar_getKey));

            it('should call fooBar.getValue() once', () =>
                assert.calledOnce(stubFooBar_getValue));

            it('should throw an error deeply equal to expected', () =>
                expect(JSON.stringify(error, ['name', 'message'])).to.eql(JSON.stringify(expectedError)));

            it('should not return any value', () =>
                expect(result).to.not.exist);
        });
    });
});
