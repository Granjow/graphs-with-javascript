var path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    tools = require( '../../library/tools' );

exports.problem = tools.mdProblem( {
    mdSource: path.join( __dirname, 'feedback.md' ),
    pdfName: 'feedback.pdf'
} );
exports.solution = 'Thank you!';

exports.verify = verify( { modeReset: true }, function checker( args, t ) {

    t.end();

} );