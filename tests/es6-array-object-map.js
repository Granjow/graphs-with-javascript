"use strict";

var S = Array.apply( null, Array( 100 ) ).map( function ( el, ix ) {
    return ix;
} );
var M = Array.apply( null, Array( 1000 ) ).map( function ( el, ix ) {
    return ix;
} );
var L = Array.apply( null, Array( 10000 ) ).map( function ( el, ix ) {
    return ix;
} );

var rand = function ( sml ) {
    return Math.floor( Math.random() * sml.length );
};

var data = {
        S: S,
        M: M,
        L: L,
        smallArr: [],
        smallObj: {},
        smallMap: new Map(),
        medArr: [],
        medObj: {},
        medMap: new Map(),
        largeArr: [],
        largeObj: {},
        largeMap: new Map()
    },
    el,
    key,
    j,
    N;

S.forEach( function ( i ) {

    var obj = {
        id: i,
        data: 'foo'
    };

    data.smallArr.push( obj );
    data.smallObj[ i ] = obj;
    data.smallMap.set( i, obj );

} );

M.forEach( function ( i ) {

    var obj = {
        id: i,
        data: 'foo'
    };

    data.medArr.push( obj );
    data.medObj[ i ] = obj;
    data.medMap.set( i, obj );

} );

L.forEach( function ( i ) {

    var obj = {
        id: i,
        data: 'foo'
    };

    data.largeArr.push( obj );
    data.largeObj[ i ] = obj;
    data.largeMap.set( i, obj );

} );


key = rand( S );
el = data.smallObj[ key ];

key = rand( S );
el = data.smallMap.get( key );

key = rand( S );
N = S.length;
for ( j = 0; j < N; j++ ) {
    if ( data.smallArr[ j ].id === key ) {
        el = data.smallArr[ j ];
        break;
    }
}


key = rand( M );
el = data.medObj[ key ];

key = rand( M );
el = data.medMap.get( key );

key = rand( M );
N = M.length;
for ( j = 0; j < N; j++ ) {
    if ( data.medArr[ j ].id === key ) {
        el = data.medArr[ j ];
        break;
    }
}


key = rand( L );
el = data.largeObj[ key ];

key = rand( L );
el = data.largeMap.get( key );

key = rand( L );
N = L.length;
for ( j = 0; j < N; j++ ) {
    if ( data.largeArr[ j ].id === key ) {
        el = data.largeArr[ j ];
        break;
    }
}
