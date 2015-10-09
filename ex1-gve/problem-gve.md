# Introduction task: Setting up directed graphs

A **directed graph** *G* is a set of vertices *V* and (directed) edges *E*, i.e.:

    G = (V, E)
    
To get our graph algorithms running, we first need to create edges and vertices, and a graph which manages them.
Write constructors for those types so that a graph can be constructed in the following way:

    // Create a new directed graph object
    var dg = new Graph();
    
    // Add vertices with IDs 1, 2, and 3
    dg.addVertex( 1 );
    dg.addVertex( 2 );
    dg.addVertex( 3 );
    
    // Add edges from 1 to 2, and from 1 to 3
    dg.addEdge( 1, 2 );
    dg.addEdge( 1, 3 );
    
The above code should construct a graph which looks like this:

    2 <-- 1 --> 3
    
Since we also want to read the graph, it should allow us to get specific vertices and their edges. Again, the following
code should be supported by your library.


    var vertex1 = dg.v( 1 );
    console.log( v.id ); 
    // 1
    
    vertex1.printEdges();
    // 1 to 2
    // 1 to 3
    
Your task is to return an object containing three constructor functions:

    module.exports = { Graph: Graph, Vertex: Vertex, Edge: Edge };

    Graph               Vertex         Edge
    -----               ------         ----
    addVertex( id )     id
    addEdge( id )       printEdges()

## Literature

* [Wikipedia: Directed graph](https://en.wikipedia.org/wiki/Directed_graph)