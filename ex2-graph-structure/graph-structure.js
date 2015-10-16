var fs = require( 'fs' ),
    path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    md = require( 'cli-md' ),
    markdownpdf = require( 'markdown-pdf' ); // msee is nice too

exports.problem = function () {
    var file = path.join( __dirname, 'problem-graph-structure.md' ),
        out = path.resolve( 'problem-graph-structure.pdf' );

    markdownpdf().from( file ).to( out, function () {
        console.log( md( 'Created `' + out + '` -- if you prefer to read this problem as PDF' ) );
    } );

    return md( fs.readFileSync( file, { encoding: 'utf8' } ) );
};
exports.solution = function () {
    var code = fs.readFileSync( path.join( __dirname, 'solution-graph-structure.js' ) ),
        text = '# Solution for verification:\n\n```\n' + code + '\n```\n\n' +
            'You may want to read the code comments and compare the code with your solution. ' +
            'Congratulations on finishing this exercise, now let’s go on to the next one!';
    return md( text );
};

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var Graph = require( path.resolve( args[ 0 ] ) );

    var vertices = [ 'A', 'B', 'C', 'D' ];
    var edges = [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'D', 'C' ] ];

    var graph = new Graph( vertices, edges );

    t.ok( graph.v( 'A' ), 'Can retrieve vertex A' );
    t.equal( graph.v( 'A' ).id, 'A', 'ID of vertex A is "A"' );

    var neighbours = graph.v( 'A' ).neighbours();
    t.ok( neighbours, 'Can retrieve neighbours of A' );
    t.equal( neighbours.length, 2, 'A has 2 neighbours' );
    t.ok( (neighbours[ 0 ].id == 'B' && neighbours[ 1 ].id == 'C') || (neighbours[ 0 ].id == 'C' && neighbours[ 1 ].id == 'B'),
        'Vertex A has neighbours B and C' );

    t.end();

} );