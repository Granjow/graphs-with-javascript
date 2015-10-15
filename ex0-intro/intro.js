var fs = require( 'fs' ),
    path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    md = require( 'cli-md' ),
    markdownpdf = require( 'markdown-pdf' ); // msee is nice too

exports.problem = function () {
    var file = path.join( __dirname, 'problem-intro.md' ),
        out = path.resolve( 'problem-intro.pdf' );

    markdownpdf().from( file ).to( out, function () {
        console.log( md( 'Created `' + out + '` -- if you prefer to read this problem as PDF' ) );
    } );

    return md( fs.readFileSync( file, { encoding: 'utf8' } ) );
};
exports.solution = fs.createReadStream( __dirname + '/solution-intro.js' );

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var res = require( path.resolve( args[ 0 ] ) );

    t.ok( typeof res.hello == 'function', 'Function hello() is exported' );

    if ( res.hello ) {
        t.equal( res.hello(), 'hello', 'Return value of the function is "hello"' );
    }

    t.end();

} );