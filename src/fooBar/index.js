'use strict';

// Module dependencies
//
// ! Always assign the module to a variable to make
// ! this calling module testable by sinon stubs.
const fooBarModule = require('./fooBar');

/**
 * The `handler` function of fooBar module.
 *
 * @param {Object} event - Event data from AWS.
 * @param {Object} context - Context data from AWS.
 * @param {AwsHandlerCallback} callback - Callback function called after execution.
 */
module.exports.handler = (event, context, callback) => {
    const response = {
        event: event,
        context: context,
        body: `${fooBarModule.getKey()}: ${fooBarModule.getValue()}`
    };

    callback(null, JSON.stringify(response, null, 2));
};

/**
 * Type for AWS handler callback function.
 *
 * @callback AwsHandlerCallback
 * @param {Error} error - Error to throw to the caller, otherwise set to `null`.
 * @param {any} result - Result to return to the caller, otherwise set to `null`.
 * @returns {void}
 */
