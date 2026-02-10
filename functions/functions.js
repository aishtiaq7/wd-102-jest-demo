export function shout ( message, logFun ) {
    if ( typeof logFun !== 'function' ) {
        throw new Error( 'logFun must be a function' );
    }
    const result = String(message).toUpperCase();
    logFun(result); // console.log("HELLO");
    return result; 
}

// shout("hello", console.log);