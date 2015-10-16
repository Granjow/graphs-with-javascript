# Reading Problems

## Goal

Read graphs from input files.

## Problem Description

So far, we were quite lucky with our graphs consisting of a few nodes only. That changes now! Graphs may 
consist of thousands of nodes, and nobody wants to manually type `new Vertex( id )` for every single one
of them.

You will be provided input files of the following form:

    A
    a
    1
    is-it-42
    
    A a
    A 1
    A is-it-42
    1 a

Each input file contains a list of vertices and a list of edges. The lists are separated by an empty line.

You should use the functionality provided by Node.js for reading files. See the literature for details.

## Task

Export a function `readGraph` which takes the file name of the input file, reads it into a graph and returns this object.
For example, the following code should be supported:

    var graph = readGraph( 'graph1.in' );
    
    var neighbours = graph.neighbours( 'A' );
    // Would return an array containing the vertices [ a, 1, is-it-42 ] for the example graph above.

You can re-use code from the previous exercise, and you may use the following template:

    function readGraph() {
        // Your code here
    }
    module.exports = readGraph;

## Literature

* [node.js: readline](http://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js/32599033#32599033)
