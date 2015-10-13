# Graph Structure

## Goal

We will add a Graph to the Edge and Vertex objects from the previous exercise.

## Problem Description

Creating a large number of edges and vertices was not really that comfortable since we had to keep track
of all vertex and edge objects. Let us therefore add another data structure, the *Graph*, which holds 
all vertices and edges.

Vertices are identified by their ID (or number), so we can use it for requesting any (existing) vertex
from the graph and then, for example, get the number of neighbours.

Hint: Be careful about the data structure you choose for storing vertices; see the literature section
at the end. 

Make sure you can answer the following questions:

* Why should you not use an array?
* 

## Task

Your task is to return a Graph constructor. It should read vertices and edges from an array like so:

    var vertices = [ 'A', 'B', 'C', 'D' ];
    var edges = [ [ 'A', 'B'], ['A', 'C'], ['D', 'C'] ];
    
    var graph = new Graph( vertices, edges );
    
    var vA = graph.v( 'A' ); // Get vertex 'A' from the graph
    
    var neighbours = vA.neighbours();
    // Should be [ 'B', 'C' ]

You may use the following template (obviously, you will also want to add your edges and vertices):

    var Graph = function() {
        // Your code here
    };
    
    module.exports = Graph;


## Literature

* [Big-O Cheatsheet](http://bigocheatsheet.com/)
* [JavaScript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)