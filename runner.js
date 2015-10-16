#!/usr/bin/env node

var adventure = require( 'adventure' );

var shop = adventure( {
    name: 'graphs-with-javascript',
    title: 'Graphs with JavaScript',
    bg: 'yellow',
    fg: 'black'
} );

shop.add( 'Intro', function () {
    return require( './ex0-intro/intro' );
} );
shop.add( 'Vertices and Edges', function () {
    return require( './ex1-gve/gve.js' );
} );
shop.add( 'Graph Structure', function () {
    return require( './ex2-graph-structure/graph-structure' );
} );

shop.execute( process.argv.slice( 2 ) );