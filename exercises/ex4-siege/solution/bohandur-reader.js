var fs = require( 'fs' ),
    readline = require( 'readline' ),
    Graph = require( './graph.js' );

function mostNeighbours( villages, attackers, edges ) {

    // In the graph, we have to reverse the edges so we can re-use the neighbours function,
    // which only calculates outgoing neighbours. Edges from attackers to villages are incoming,
    // so we reverse them.
    var reversedEdges = edges.map( function ( edge ) {
        return [ edge[ 1 ], edge[ 0 ] ];
    } );

    var graph = new Graph( villages.concat( attackers ), reversedEdges ),
        neighbours = [],
        max;

    graph.vertices.forEach( function ( vertex ) {
        neighbours.push( {
            vertex: vertex,
            neighbourCount: vertex.neighbours().length
        } );
    } );

    max = neighbours.reduce( function ( acc, cur ) {
        return Math.max( cur.neighbourCount, acc );
    }, 0 );

    return neighbours.filter( function ( entry ) {
        return entry.neighbourCount == max;
    } ).map( function ( entry ) {
        return entry.vertex.id;
    } );
}

function reader( inFilePath, callback ) {

    var V, A, S,
        initialised = false,
        pos = 'init',
        villages = [],
        attackers = [],
        edges = [],
        c = 0;

    readline.createInterface( {
        input: fs.createReadStream( inFilePath )
    } ).on( 'line', function ( line ) {

        if ( pos === 'init' ) {
            var vas = line.split( ' ' );
            V = parseInt( vas[ 0 ] );
            A = parseInt( vas[ 1 ] );
            S = parseInt( vas[ 2 ] );
            pos = 'villages';
            initialised = true;
        } else {
            if ( pos === 'villages' ) {
                if ( c + 1 <= V ) {
                    villages.push( line );
                    c++;
                    return;
                } else {
                    c = 0;
                    pos = 'attackers';
                }
            }
            if ( pos === 'attackers' ) {
                if ( c + 1 <= A ) {
                    attackers.push( line );
                    c++;
                    return;
                } else {
                    c = 0;
                    pos = 'edges';
                }
            }
            if ( pos === 'edges' ) {
                if ( c + 1 <= S ) {
                    edges.push( line.split( ' ' ) );
                    c++;
                } else {
                    console.log( 'Spare line: ' + line );
                }
            }
        }
    } ).on( 'close', function () {
        // Call the callback function, if it is given
        if ( typeof callback === 'function' ) {
            callback( mostNeighbours( villages, attackers, edges ) );
        }
    } );
}

module.exports = reader;