# Under Siege

ABC is under siege. Its troops are very powerful, but limited in their number, so they can only be 
present in one city at the same time.

Intelligence has provided us with a list of cities and attacking troops. Your task is to hand us 
a list of cities with the largest number of attackers. The list has to be ready yesterday, so better
hurry up!

*Hint: You may re-use code from your previous exercises.* 

## Input format

Cities and attackers have no IDs in common. You will be provided three arrays. Return an array of cities.

    var cities = [ 1, 2, 3 ];
    var attackers = [ 4, 5, 7, 11 ];
    var troops = [ [4,1], [5,1], [7,2] ];
    
    // Expected output: [ 1 ]

Your exports should look like this:

    var mostAttackers = function( cities, attackers, troops ) {
        // Your Code
        return solution;
    };
    
    module.exports = mostAttackers;

