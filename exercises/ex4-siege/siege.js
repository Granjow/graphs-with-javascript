var path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    tools = require( '../../library/tools' );

exports.problem = function () {
    return tools.mdProblem( {
        mdSource: path.join( __dirname, 'problem-siege.md' ),
        pdfName: 'problem-siege.pdf',
        sampleSource: path.join( __dirname, 'samples' ),
        sampleDest: 'samples-siege'
    } );
};

exports.solution = tools.mdSolution( path.join( __dirname, 'solution-siege.js' ) );


exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    t.end();
} );