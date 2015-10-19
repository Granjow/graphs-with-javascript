var path = require( 'path' ),
    verify = require( 'adventure-verify' ),
    tools = require( '../../library/tools' );

exports.problem = function () {
    return tools.mdProblem( {
        mdSource: path.join( __dirname, 'problem-reading-problems.md' ),
        pdfName: 'problem-reading-problems.pdf',
        sampleSource: path.join( __dirname, 'samples' ),
        sampleDest: 'samples-reading-problems'
    } );
};

exports.solution = tools.mdSolution( path.join( __dirname, 'solution-reading-problems.js' ) );

exports.verify = verify( { modeReset: true }, function checker( args, t ) {
    var reader = require( path.resolve( args[ 0 ] ) ),
        verifier = require( './solution-reading-problems' ),
        sorter = function ( a, b ) {
            return a.id.localeCompare( b.id );
        },
        inFile = path.join( __dirname, 'samples', 'sample1.in' );

    console.log( 'Testing against ' + inFile );

    reader( inFile, function ( testGraph ) {
        verifier( inFile, function ( verifierGraph ) {
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

            t.end();

        } );
    } );


} );