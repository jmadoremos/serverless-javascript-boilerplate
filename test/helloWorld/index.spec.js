'use strict';

// Test dependencies
const { expect } = require('chai');
const { assert, stub } = require('sinon');

// Module file + mock data file
const mockFile = require('./index.mock.json');
const moduleFile = require(`../../src/helloWorld/index`);

// Module dependencies
const helloWorldModule = require('../../src/helloWorld/helloWorld');

// Module level
describe('src/helloWorld/index', function () {
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
            const mockHelloWorld_getKey = scenario['helloWorld_getKey'];
            const mockHelloWorld_getValue = scenario['helloWorld_getValue'];
            const mockCallbackArguments = scenario['callbackArguments'];

            // Stubs
            let stubCallback;
            let stubHelloWorld_getKey;
            let stubHelloWorld_getValue;

            // Preparation
            before(function () {
                stubCallback = stub();

                stubHelloWorld_getKey = stub(helloWorldModule, 'getKey');
                stubHelloWorld_getKey.returns(mockHelloWorld_getKey);

                stubHelloWorld_getValue = stub(helloWorldModule, 'getValue');
                stubHelloWorld_getValue.returns(mockHelloWorld_getValue);

                try { result = moduleFile.handler(mockEvent, mockContext, stubCallback); }
                catch (err) { error = err; }
            });

            // Cleanup
            after(function () {
                stubHelloWorld_getKey.restore();
                stubHelloWorld_getValue.restore();
            });

            // Assertions
            it('should call fooBar.getKey() once', () =>
                assert.calledOnce(stubHelloWorld_getKey));

            it('should call fooBar.getValue() once', () =>
                assert.calledOnce(stubHelloWorld_getValue));

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
            const mockHelloWorld_getKey = scenario['helloWorld_getKey'];
            const mockHelloWorld_getValue = scenario['helloWorld_getValue'];
            const mockCallbackArguments = scenario['callbackArguments'];

            // Stubs
            let stubCallback;
            let stubHelloWorld_getKey;
            let stubHelloWorld_getValue;

            // Preparation
            before(function () {
                stubCallback = stub();

                stubHelloWorld_getKey = stub(helloWorldModule, 'getKey');
                stubHelloWorld_getKey.returns(mockHelloWorld_getKey);

                stubHelloWorld_getValue = stub(helloWorldModule, 'getValue');
                stubHelloWorld_getValue.returns(mockHelloWorld_getValue);

                try { result = moduleFile.handler(mockEvent, mockContext, stubCallback); }
                catch (err) { error = err; }
            });

            // Cleanup
            after(function () {
                stubHelloWorld_getKey.restore();
                stubHelloWorld_getValue.restore();
            });

            // Assertions
            it('should call fooBar.getKey() once', () =>
                assert.calledOnce(stubHelloWorld_getKey));

            it('should call fooBar.getValue() once', () =>
                assert.calledOnce(stubHelloWorld_getValue));

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
            const mockHelloWorld_getKey = scenario['helloWorld_getKey'];
            const mockHelloWorld_getValue = scenario['helloWorld_getValue'];
            const expectedError = scenario['expectedError'];

            // Stubs
            let stubHelloWorld_getKey;
            let stubHelloWorld_getValue;

            // Preparation
            before(function () {
                stubHelloWorld_getKey = stub(helloWorldModule, 'getKey');
                stubHelloWorld_getKey.returns(mockHelloWorld_getKey);

                stubHelloWorld_getValue = stub(helloWorldModule, 'getValue');
                stubHelloWorld_getValue.returns(mockHelloWorld_getValue);

                try { result = moduleFile.handler(mockEvent, mockContext, undefined); }
                catch (err) { error = err; }
            });

            // Cleanup
            after(function () {
                stubHelloWorld_getKey.restore();
                stubHelloWorld_getValue.restore();
            });

            // Assertions
            it('should call fooBar.getKey() once', () =>
                assert.calledOnce(stubHelloWorld_getKey));

            it('should call fooBar.getValue() once', () =>
                assert.calledOnce(stubHelloWorld_getValue));

            it('should throw an error deeply equal to expected', () =>
                expect(JSON.stringify(error, ['name', 'message'])).to.eql(JSON.stringify(expectedError)));

            it('should not return any value', () =>
                expect(result).to.not.exist);
        });
    });
});
