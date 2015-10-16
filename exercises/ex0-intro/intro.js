var path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    tools = require( '../../library/tools' );

exports.problem = tools.mdProblem( path.join( __dirname, 'problem-intro.md' ), 'problem-intro.pdf' );
exports.solution = tools.mdSolution( path.join( __dirname, 'solution-intro.js' ) );

exports.verify = verify( { modeReset: true }, function checker( args, t ) {

    var res = require( path.resolve( args[ 0 ] ) );

    t.ok( typeof res.hello == 'function', 'Function hello() is exported' );

    if ( res.hello ) {
        t.equal( res.hello(), 'hello', 'Return value of the function is "hello"' );
    }

    t.end();

} );