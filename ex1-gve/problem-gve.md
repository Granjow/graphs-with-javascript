# Introduction task: Setting up directed graphs

A **directed graph** *G* is a set of vertices *V* and (directed) edges *E*, i.e.:

    G = (V, E)
    
## Goal

You will be given a list of vertices and edges, and you have to be able to list all neighbours of a vertex (i.e. 
they can be reached over a single edge). Keep in mind that we use directed edges, so with `1 --> 2` we cannot reach
`2` from `1`.

## Problem Description

In this task, you will create the first half of a graph structure – vertices and edges. Keeping them in a data structure 
allows us to run queries on the graph, like in this case where we want to find out the neighbours vertices are connected
to. Let's assume we have *V* = 1000 vertices and *E* = 4000 edges and we want to find out the neighbours.

If we just have the information as list, we have to read all *E* edges every time we want to find neighbours of a vertex.
(In [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation), this is complexity `O(E)`.)

However, if we save this information in a *Vertex* object, we just need that object and immediately have access to the results.
(This is `O(1)` if we already have the vertex object.) This is much faster, especially the larger graphs become.

## Task

Your task is to return an object with two constructors, one for a vertex, and one for an edge. The following code
should be supported by your code:

    var v1 = new Vertex( 1 ),
        v2 = new Vertex( 2 ),
        v3 = new Vertex( 3 ),
        v4 = new Vertex( 4 );
        
    var e1 = new Edge( v1, v2 ),
        e2 = new Edge( v1, v3 ),
        e3 = new Edge( v4, v3 );
        
    var neighboursOfV1 = v1.neighbours();
    // Should return [ v2, v3 ]
    
    var neighboursOfV2 = v2.neighbours();
    // Should return [ ] as v2 has no outgoing edges
    
    var neighboursOfV4 = v4.neighbours();
    // Should return [ v3 ]

You may use the following code template:

    var Vertex = function( id ) {
        // Your code here
    };
    
    var Edge = function( vFrom, vTo ) {
        // Your code here
    };
    
    module.exports = { Vertex: Vertex, Edge: Edge };


## Literature

* [Wikipedia: Directed graph](https://en.wikipedia.org/wiki/Directed_graph)
* [JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
