var fs = require( 'fs' ),
    path = require( 'path' ),
    verify = require( 'adventure-verify' );

exports.problem = fs.createReadStream( __dirname + '/problem-gve.md' );

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var res = require( path.resolve( args[ 0 ] ) );

    if (!(res.Graph && res.Edge && res.Vertex)) {
        t.end( 'Graph, Edge, Vertex must be exported.' );
    }

    t.end();

} );