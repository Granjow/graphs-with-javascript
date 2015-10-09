var adventure = require( 'adventure' );

var shop = adventure( {
    name: 'graphs-with-javascript',
    title: 'Graphs with JavaScript',
    bg: 'yellow',
    fg: 'black'
} );

shop.add( 'Intro', function () {
    return require( './intro' );
} );

shop.execute( process.argv.slice( 2 ) );