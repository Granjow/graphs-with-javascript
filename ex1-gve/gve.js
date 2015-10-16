var fs = require( 'fs' ),
    path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    md = require( 'cli-md' ),
    markdownpdf = require( 'markdown-pdf' );

exports.problem = function () {
    var file = path.join( __dirname, 'problem-gve.md' ),
        out = path.resolve( 'problem-gve.pdf' );

    markdownpdf().from( file ).to( out, function () {
        console.log( md( 'Created `' + out + '` -- if you prefer to read this problem as PDF' ) );
    } );

    return md( fs.readFileSync( file, { encoding: 'utf8' } ) );
};

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var res = require( path.resolve( args[ 0 ] ) );

    t.ok( res.Edge, 'Edge is exported' );
    t.ok( res.Vertex, 'Vertex is exported' );

    var Vertex = res.Vertex,
        Edge = res.Edge;

    var v1 = new Vertex( 1 ),
        v2 = new Vertex( 2 ),
        v3 = new Vertex( 3 ),
        v4 = new Vertex( 4 );

    t.equal( v1.id, 1, 'ID of vertex 1 is 1' );
    t.equal( v2.id, 2, 'ID of vertex 2 is 2' );
    t.equal( v3.id, 3, 'ID of vertex 3 is 3' );
    t.equal( v4.id, 4, 'ID of vertex 4 is 4' );


    new Edge( v1, v2 );
    new Edge( v1, v3 );
    new Edge( v4, v3 );

    t.equal( v1.neighbours().length, 2, 'v1 has 2 neighbours' );
    t.equal( v2.neighbours().length, 0, 'v2 has 0 neighbours' );
    t.equal( v4.neighbours().length, 1, 'v4 has 1 neighbour' );
    t.ok( v1.neighbours().indexOf( v2 ) >= 0, 'v1 has v2 as neighbour' );
    t.ok( v1.neighbours().indexOf( v2 ) >= 0, 'v1 has v2 as neighbour' );
    t.equal( v4.neighbours()[ 0 ], v3, 'v4 has v3 as neighbour' );

    t.end();

} );