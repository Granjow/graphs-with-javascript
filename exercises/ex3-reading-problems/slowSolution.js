var fs = require( 'fs' ),
    readline = require( 'readline' );

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

var Edge = function ( vFrom, vTo ) {

    this.vFrom = vFrom;
    this.vTo = vTo;

    this.vFrom.addEdge( this );

    return this;
};

var Graph = function ( vertices, edges ) {

    /** @type {Array.<Vertex>} */
    this._vertices = [];

    var me = this;

    vertices.forEach( function ( id ) {
        me._vertices.push( new Vertex( id ) );
    } );

    edges.forEach( function ( pair ) {
        var idFrom = pair[ 0 ],
            idTo = pair[ 1 ];
        new Edge( me.v( idFrom ), me.v( idTo ) );
    } );

};
Graph.prototype = {
    v: function ( id ) {
        return this._vertices.find( function ( v ) {
            return v.id == id;
        } );
    }
};

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
                edges.push( edge );
            }
        } else {
            if ( line.length == 0 ) {
                verticesRead = true;
            } else {
                vertices.push( line );
            }
        }
    } ).on( 'close', function () {
        if ( typeof callback === 'function' ) {
            callback( new Graph( vertices, edges ) );
        }
    } );
}

module.exports = readGraph;