https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

function breakChocolate(n, m) {
    if ( n <= 0 ) {
        return 0;
    }
    if ( n === undefined ) {
        return 0;
    }
    if ( m === undefined ) {
        return 0;
    }
    if ( m === null ) {
        return 0;
    }
    if ( n === null ) {
        return 0;
    }
    if ( m <= 0 ) {
        return 0;
    }
    if ( n === NaN) {
        return 0;
    }
    if ( m === NaN) {
        return 0;
    }
    if ( m === NaN && n === NaN ) {
        return 0;
    }
    let b;
    if ( n > 0 && m > 0 ) {
        b = (n * m) - 1;
    }
    return b;
}