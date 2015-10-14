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
shop.add( 'Graphs, Vertices, Edges', function () {
    return require( './ex1-gve/gve.js' );
} );

shop.execute( process.argv.slice( 2 ) );