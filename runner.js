#!/usr/bin/env node

var adventure = require( 'adventure' );

var shop = adventure( {
    name: 'graphs-with-javascript',
    title: 'Graphs with JavaScript',
    bg: 'yellow',
    fg: 'black'
} );

shop.add( 'Intro', function () {
    return require( './exercises/ex0-intro/intro' );
} );
shop.add( 'Vertices and Edges', function () {
    return require( './exercises/ex1-vertices-edges/vertices-edges.js' );
} );
shop.add( 'Graph Structure', function () {
    return require( './exercises/ex2-graph-structure/graph-structure' );
} );
shop.add( 'Reading Problems', function () {
    return require( './exercises/ex3-reading-problems/reading-problems' );
} );
//shop.add( 'Under Siege', function () {
//    return require( './exercises/ex4-siege/siege' );
//} );
shop.add( 'Improve it!', function () {
    return require( './exercises/feedback/feedback' );
} );

shop.execute( process.argv.slice( 2 ) );