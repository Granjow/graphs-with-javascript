var fs = require( 'fs' ),
    readline = require( 'readline' );

/**
 * Vertex in a graph
 * @param {*} id This vertex's ID
 * @returns {Vertex}
 */
var Vertex = function ( id ) {

    this.id = id;
    this._edges = [];

    return this;
};
Vertex.prototype = {
    neighbours: function () {
        return this._edges.map( function ( edge ) {
            return edge.vTo;
        } );
    },
    addEdge: function ( edge ) {
        this._edges.push( edge );
    }
};

/**
 * Directed edge in a graph
 * @param {Vertex} vFrom Source vertex
 * @param {Vertex} vTo Target vertex
 * @returns {Edge}
 */
var Edge = function ( vFrom, vTo ) {

    /** @type {Vertex} */
    this.vFrom = vFrom;
    /** @type {Vertex} */
    this.vTo = vTo;

    this.vFrom.addEdge( this );

    return this;
};

/**
 * Graph containing edges and vertices
 * @param vertices
 * @param edges
 * @constructor
 */
var Graph = function ( vertices, edges ) {

    /**
     * We use a ES6 Map for storing vertices. Maps have the advantage over objects that
     * they can be iterated over with forEach.
     * @type {Map.<Vertex>}
     */
    this._vertices = new Map();

    /**
     * If you do not know why we don't just use `this` in the forEach loop, read this article:
     * http://javascriptplayground.com/blog/2012/04/javascript-variable-scope-this/
     */
    var me = this;

    // Read and store all vertices
    vertices.forEach( function ( id ) {
        me._vertices.set( id, new Vertex( id ) );
    } );

    // Create the edges
    edges.forEach( function ( pair ) {
        var idFrom = pair[ 0 ],
            idTo = pair[ 1 ];
        new Edge( me.v( idFrom ), me.v( idTo ) );
    } );

};
Graph.prototype = {
    /**
     * Retrieve a vertex identified by the given ID.
     * @param id Vertex ID
     * @returns {Vertex}
     */
    v: function ( id ) {
        return this._vertices.get( id );
    },
    topNeighbours: function ( topN ) {
        var stat = [];
        this._vertices.forEach( function ( v ) {
            stat.push( { v: v, c: v.neighbours().length } )
        } );
        return stat.sort( function ( a, b ) {
            return b.c - a.c;
        } ).slice( 0, topN );
    }
};

/**
 * Read a graph from a file.
 * @param {String} inFilePath Absolute path to the input file
 * @param {function(graph: Graph)} callback Callback function, called when Graph is read.
 */
function readGraph( inFilePath, callback ) {

    var vertices = [],
        edges = [],
        verticesRead = false;

    readline.createInterface( {
        input: fs.createReadStream( inFilePath )
    } ).on( 'line', function ( line ) {
        if ( verticesRead ) {
            var edge = line.split( ' ' );
            if ( edge.length == 2 ) {
                //console.log( 'Edge: ', edge );
                edges.push( edge );
            } else {
                console.log( 'No edge: ', line );
            }
        } else {
            if ( line.length == 0 ) {
                verticesRead = true;
            } else {
                //console.log( 'Vertex: ', line );
                vertices.push( line );
            }
        }
    } ).on( 'close', function () {
        // Call the callback function, if it is given
        if ( typeof callback === 'function' ) {
            callback( new Graph( vertices, edges ) );
        }
    } );
}

module.exports = readGraph;
