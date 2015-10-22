# Under Siege

The villages of Bohandur are under siege. Its troops are very powerful, but limited in their number, so they can only be 
present in one village at the same time to defend their happy citizens.

Intelligence has provided us with a list of cities and attacking troops. Your task is to hand us 
a list of cities with the largest number of attackers. The list has to be ready yesterday, so better
hurry up!

*Hint: You may re-use code from your previous exercises.* 

## Input format

Those invaluable lists use the following format:

    3 4 3
    1
    2
    3
    4
    5
    7
    11
    4 1
    5 1
    7 2

They provide a list of `V` villages, `A` attackers, and `S` sieges. In the first line, you can find those numbers:

    V A S

The next `V` lines are village IDs, then we have `A` attacker IDs, and finally a list of `S` sieges which say 
which troop is attacking which village. Note that villages and attackers have no IDs in common.

## Task

Write a function which returns the city (or cities) with the highest number of attackers. Use the following template:

    function mostAttackers( inputFilePath, callback ) {
        // Your code here
        // Once you have calculated your solution, call the callback:
        callback( yourSolution );
    }
    
    module.exports = mostAttackers;
    
It should support code of the following form:

    mostAttackers( 'sample1.in', function( defendThoseFirst ) {
        console.log( 'We have to defend those villages first:', defendThoseFirst );
     } );

You will be provided some sample input files so you can test your code.
