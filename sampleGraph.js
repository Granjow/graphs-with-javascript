var DG = require( './directedGraph' );

var dg = new DG.Graph();

dg.addVertex( 1 );
dg.addVertex( 2 );
dg.addVertex( 3 );
dg.addVertex( 4 );

dg.addEdge( 1, 2 );
dg.addEdge( 1, 3 );
dg.addEdge( 2, 4 );

dg.v( 1 ).printEdges();

dg.v( 1 ).printReachable();