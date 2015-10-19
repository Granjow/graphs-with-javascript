var fs = require( 'fs' ),
    path = require( 'path' ),
    md = require( 'cli-md' ),
    markdownpdf = require( 'markdown-pdf' ); // msee is nice too

module.exports = {};

function copySamples( fromDir, toDir ) {

    if ( fs.existsSync ) {
        if ( !fs.existsSync( toDir ) ) {
            fs.mkdirSync( toDir );
        }
    }
    if ( fs.accessSync ) {
        try {
            fs.accessSync( toDir );
        } catch ( e ) {
            fs.mkdirSync( toDir );
        }
    }
    fs.readdir( fromDir, function ( err, files ) {
        var messages = 'Creating some sample .in files for you ...';
        if ( err ) throw err;
        files.filter( function ( name ) {
            return name.substr( -3 ) === '.in';
        } ).map( function ( name ) {
            return {
                fromPath: path.join( fromDir, name ),
                toPath: path.join( toDir, name )
            };
        } ).forEach( function ( data ) {
            messages += '\n* Creating `' + data.toPath + '`';
            fs.createReadStream( data.fromPath ).pipe( fs.createWriteStream( data.toPath ) );
        } );
        console.log( md( messages ) );
    } );
}

/**
 *
 * @param {{mdSource:string, pdfName:string, sampleSource:string=, sampleDest:string=}} opts
 * @returns {Function}
 */
module.exports.mdProblem = function ( opts ) {
    return function () {

        if ( opts.sampleSource && opts.sampleDest ) {
            copySamples( opts.sampleSource, opts.sampleDest );
        }

        var out = path.resolve( opts.pdfName );
        markdownpdf().from( opts.mdSource ).to( out, function () {
            console.log( md( 'Created `' + out + '` -- if you prefer to read this problem as PDF' ) );
        } );

        return md( fs.readFileSync( opts.mdSource, { encoding: 'utf8' } ) );
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