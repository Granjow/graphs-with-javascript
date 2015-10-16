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

shop.execute( process.argv.slice( 2 ) );