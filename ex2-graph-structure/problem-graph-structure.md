

## Task

Your task is to return an object with a Graph constructor. It should read vertices and edges

    var vertices = [ 1, 2, 3, 4 ];
    var edges = [ [ 1, 2], [1, 3], [4, 3] ];
    
    var graph = new Graph( vertices, edges );
    
    
To get our graph algorithms running, we first need to create edges and vertices., and a graph which manages them.
Write constructors for those types so that a graph can be constructed in the following way:

    // Create a new directed graph object which will contain this graph:
    // 2 <-- 1 --> 3
    var dg = new Graph();
    
    // Add vertices with IDs 1, 2, and 3
    dg.addVertex( 1 );
    dg.addVertex( 2 );
    dg.addVertex( 3 );
    
    // Add edges from 1 to 2, and from 1 to 3
    dg.addEdge( 1, 2 );
    dg.addEdge( 1, 3 );
    
Since we also want to read the graph, it should allow us to get specific vertices and their edges. Again, the following
code should be supported by your library.


    var vertex1 = dg.v( 1 );
    console.log( v.id ); 
    // 1
    
    console.log( vertex1.printEdges() );
    // 1 to 2, 1 to 3
    
Your task is to return an object containing three constructor functions including the required functions *addVertex, addEdge, printEdges*:

    module.exports = { Graph: Graph, Vertex: Vertex, Edge: Edge };

    Graph               Vertex         Edge
    -----               ------         ----
    addVertex( id )     id
    addEdge( id )       printEdges()
    
    
## Literature

* [Wikipedia: Directed graph](https://en.wikipedia.org/wiki/Directed_graph)
* [JavaScript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [JavaScript Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)