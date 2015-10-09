var fs = require( 'fs' ),
    path = require( 'path' ),
    verify = require( 'adventure-verify' );

exports.problem = fs.createReadStream( __dirname + '/task0.md' );

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var res = require( path.resolve( args[ 0 ] ) );

    t.ok( typeof res.hello == 'function', 'Function hello() is exported' );

    if ( res.hello ) {
        t.equal( res.hello(), 'hello', 'Return value of the function is "hello"' );
    }

    t.end();

} );