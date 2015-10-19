var path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    tools = require( '../../library/tools' );

exports.problem = tools.mdProblem( {
    mdSource: path.join( __dirname, 'problem-graph-structure.md' ),
    pdfName: 'problem-graph-structure.pdf'
} );

exports.solution = tools.mdSolution( path.join( __dirname, 'solution-graph-structure.js' ) );

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