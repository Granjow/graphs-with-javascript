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

module.exports = {
    Edge: Edge,
    Vertex: Vertex
};