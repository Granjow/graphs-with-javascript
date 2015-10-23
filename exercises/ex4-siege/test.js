var solver = require( './solution/bohandur-reader' );

solver( __dirname + '/samples/sample1.in', function ( result ) {
    console.dir( result );
} );
