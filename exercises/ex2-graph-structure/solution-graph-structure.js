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
        var idFrom = pair[0 ],
            idTo = pair[1];
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
    }
};

module.exports = Graph;