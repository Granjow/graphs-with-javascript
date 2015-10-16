// Example solution

/**
 * This simple function just returns a constant string.
 * @returns {string}
 */
function sayHello() {
    return 'hello';
}

module.exports = {
    /**
     * Function `sayHello` will be available as `hello` to other modules.
     */
    hello: sayHello
};

// We can test our function here and check its return value.
console.log( sayHello() );