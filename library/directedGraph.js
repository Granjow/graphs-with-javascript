var Graph = function () {
    /**
     * @type {Map.<Vertex>}
     */
    this.vertices = new Map();

};
Graph.prototype = {
    /**
     *
     * @param {*} from
     * @param {*} to
     */
    addEdge: function ( from, to ) {
        var vFrom = this.v( from ),
            vTo = this.v( to ),
            edge;
        if ( vFrom && vTo ) {
            edge = new Edge( vFrom, vTo );
            vFrom.addEdge( edge );
        }
    },
    /**
     * @param {*} id
     */
    addVertex: function ( id ) {
        this.vertices.set( id, new Vertex( id ) );
    },
    /**
     * @param {*} id
     * @returns {Vertex}
     */
    v: function ( id ) {
        return this.vertices.get( id );
    }
};

/**
 * @param {*} id
 * @returns {Vertex}
 * @constructor
 */
var Vertex = function ( id ) {
    this.id = id;
    /**
     * @type {Set.<Edge>}
     */
    this.edges = new Set();
    return this;
};
Vertex.prototype = {
    /**
     * @param {Edge} edge
     */
    addEdge: function ( edge ) {
        this.edges.add( edge );
    },
    printEdges: function () {
        this.edges.forEach( function ( edge ) {
            console.log( edge.from.id + ' to ' + edge.to.id );
        } );
    },
    printReachable: function () {
        this.bfs( function ( v ) {
            console.log( v.id );
        } );
    },
    /**
     * @param {function(v:Vertex)} callback
     */
    bfs: function ( callback ) {
        this._bfs( callback, new Set() );
    },
    /**
     * @param {function(v:Vertex)} callback
     * @param {Set.<Vertex>=} visited
     */
    _bfs: function ( callback, visited ) {
        this.edges.forEach( function ( e ) {
            var v = e.to;
            if ( !visited.has( v ) ) {
                callback( v );
                v._bfs( callback, visited );
            }
        } );
    }
};

/**
 * @param {Vertex} from
 * @param {Vertex} to
 * @constructor
 */
var Edge = function ( from, to ) {
    this.from = from;
    this.to = to;
};

module.exports = {
    Graph: Graph,
    Vertex: Vertex,
    Edge: Edge
};