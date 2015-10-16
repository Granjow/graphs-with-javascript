# Getting Started

This task is here to get your environment running. You will write a “hello world” file and pass it
to the verifier. If it is correct, this exercise will be marked as `COMPLETED`. 

The following example file exports a function `randomValue`. In Node.js, other files only have access
to the objects which are [exported by this module](https://nodejs.org/api/modules.html). Exporting them 
allows the verifier to access and use the objects/functions.

    function demo() { 
        return 42; 
    }
    
    console.log( 'demo() returns', demo() );
    
    module.exports = { randomValue: demo };

You can always execute your code for testing with Node.js; test it by copy/pasting the above code
to a file, called e.g. `your-solution.js`, and running it with:

    node your-solution.js

## Task

Your task is to write a JavaScript file for node.js which exports a function `hello`. The function should simply return the string 
`'hello'`. Then, verify your solution with:

    g-w-j verify your-solution.js

When you are done, continue your adventure with

    g-w-j
