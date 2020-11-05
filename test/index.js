'use strict';

before(function () {
    // Overwriting the common logging functions with empty functions
    // will prevent the console stream be polluted with logs that
    // obscure the test results.
    console.error = function() {};
    console.log = function() {};
});
