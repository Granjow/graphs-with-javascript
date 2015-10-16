var fs = require( 'fs' ),
    path = require( 'path' ),
    md = require( 'cli-md' ),
    markdownpdf = require( 'markdown-pdf' ); // msee is nice too

module.exports = {};

module.exports.mdProblem = function ( mdFile, outPdfFile ) {
    return function () {
        var out = path.resolve( outPdfFile );

        markdownpdf().from( mdFile ).to( out, function () {
            console.log( md( 'Created `' + out + '` -- if you prefer to read this problem as PDF' ) );
        } );

        return md( fs.readFileSync( mdFile, { encoding: 'utf8' } ) );
    }
};
module.exports.mdSolution = function ( solutionFile ) {
    return function () {

        var code = fs.readFileSync( solutionFile ),
            text = '# Solution for verification:\n\n```\n' + code + '\n```\n\n' +
                'You may want to read the code comments and compare the code with your solution. ' +
                'Congratulations on finishing this exercise, now let’s go on to the next one!';
        return md( text );
    }
};