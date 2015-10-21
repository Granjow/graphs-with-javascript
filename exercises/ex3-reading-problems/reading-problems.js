var path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    tools = require( '../../library/tools' ),
    verifier = require( './verifier' );

exports.problem = function () {
    return tools.mdProblem( {
        mdSource: path.join( __dirname, 'problem-reading-problems.md' ),
        pdfName: 'problem-reading-problems.pdf',
        sampleSource: path.join( __dirname, 'samples' ),
        sampleDest: 'samples-reading-problems'
    } );
};

exports.solution = tools.mdSolution( path.join( __dirname, 'solution-reading-problems.js' ) );

function runAgainstFile( t, theirSolver, inFile, desc, next ) {
    var sorter = function ( a, b ) {
        return a.id.localeCompare( b.id );
    };

    t.comment( 'Testing against: ' + desc );

    var tStart, tEnd, vStart, vEnd;
    try {
        tStart = new Date().getTime();
        theirSolver( inFile, function ( testGraph ) {
            tEnd = new Date().getTime();

            vStart = new Date().getTime();
            verifier( inFile, function ( verifierGraph ) {
                vEnd = new Date().getTime();

                var dtTheirs = tEnd - tStart,
                    dtOurs = vEnd - vStart;

                var verticesFound = { c: 0, total: 0 },
                    correctNbs = { c: 0, total: 0 };
                verifierGraph._vertices.forEach( function ( v ) {
                    verticesFound.total++;
                    if ( testGraph.v( v.id ) ) {
                        verticesFound.c++;
                        var verifiedNeighbours = v.neighbours().sort( sorter ),
                            testNeighbours = testGraph.v( v.id ).neighbours().sort( sorter );

                        correctNbs.total++;
                        if ( testNeighbours.length === verifiedNeighbours.length ) {
                            if ( verifiedNeighbours.every( function ( el, ix ) {
                                    return el.id == testNeighbours[ ix ].id;
                                } ) ) {
                                correctNbs.c++;
                            }
                        }
                    }
                } );

                t.equal( verticesFound.c, verticesFound.total, 'Correct vertices' );
                t.equal( correctNbs.c, correctNbs.total, 'Vertices with correct neighbours' );

                if ( dtOurs > 50 ) {
                    var slower = Math.round( 100 * dtTheirs / dtOurs ) / 100,
                        time = 'Time taken: you ' + dtTheirs + ' ms, us ' + dtOurs + ' ms';
                    if ( slower > 4 ) {
                        t.fail( 'Your solution is ' + slower + 'x slower than ours. ' + time );
                    } else {
                        t.pass( 'Be no more than 4x slower than us. ' + time );
                    }
                }

                next();

            } );
        } );
    } catch ( e ) {
        console.error( e );
        t.fail( 'Failed reading graph from file.' );
        next();
    }
}

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var reader = require( path.resolve( args[ 0 ] ) ),
        files = [
            { dir: 'samples', name: 'sample1.in' },
            { dir: 'samples', name: 'sample2.in' },
            { dir: 'tests', name: 'mid.in', desc: 'Medium input file' },
            { dir: 'tests', name: 'large1.in', desc: 'Large input file' }
        ];

    var index = 0;

    function next() {
        if ( index < files.length ) {
            runAgainstFile( t, reader, path.join( __dirname, files[ index ].dir, files[ index ].name ), files[ index ].desc || files[ index ].name, next )
        } else {
            t.end();
        }
        index++;
    }

    next();

} );