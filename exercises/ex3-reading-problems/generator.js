var V = 10,
    E = 20;

var v = Array.apply( null, new Array( E ) );

v = v.map( function ( el, ix ) {
    return String.fromCharCode(0x61+Math.floor(Math.random()*24)) + ix;
} );

console.log(v);