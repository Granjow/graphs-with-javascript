var fs = require( 'fs' ),
    argparse = require( 'argparse' );

var parser = new argparse.ArgumentParser( {
    addHelp: true,
    description: 'Sample .in file generator'
} );
parser.addArgument(
    [ '-V' ],
    { help: 'Vertex count', defaultValue: 5, type: 'int' }
);
parser.addArgument(
    [ '-E' ],
    { help: 'Edge count', defaultValue: 10, type: 'int' }
);
parser.addArgument(
    [ '--out', '-o' ],
    { help: 'Output file' }
);
var args = parser.parseArgs();

var V = args.V,
    E = args.E;

var v = Array.apply( null, new Array( V ) ).map( function ( el, ix ) {
    return String.fromCharCode( 0x61 + Math.floor( Math.random() * 24 ) ) + ix;
} );

var e = Array.apply( null, new Array( E ) ).map( function ( el, ix ) {
    return [ v[ Math.floor( Math.random() * V ) ], v[ Math.floor( Math.random() * V ) ] ];
} );

var out;
if ( args.out ) {
    out = fs.createWriteStream( args.out );
} else {
    out = process.stdout;
}
out.write( v.join( '\n' ), 'utf8' );
out.write( '\n\n', 'utf8' );
out.write( e.map( function ( edge ) {
    return edge.join( ' ' );
} ).join( '\n' ) );
if ( args.out ) {
    out.end();
}