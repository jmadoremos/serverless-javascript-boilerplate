'use strict';

/**
 * Internal function to retrieve the key.
 */
function getKey() {
    return 'foo';
}

/**
 * Internal function to retrieve the value.
 */
function getValue() {
    return 'bar';
}

// Export
module.exports = {
    /**
     * Gets the key.
     *
     * @returns {string} Key.
     */
    getKey: getKey,
    /**
     * Gets the value.
     *
     * @returns {string} Value.
     */
    getValue: getValue
};
