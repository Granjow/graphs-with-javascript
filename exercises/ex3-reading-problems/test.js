var reader = require( './verifier' );

reader( 'large1.in', function ( graph ) {

    console.log( graph.topNeighbours( 10 ) );
} );
