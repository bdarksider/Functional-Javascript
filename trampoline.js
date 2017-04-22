function repeat(operation, num) {  
    function recur(operation, num) {
        if (num <= 0) return;
        operation();
        return recur.bind(null, operation, --num);
    }

    return trampoline(recur.bind(null, operation, num));
}

function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

module.exports = function(operation, num) {

    return repeat(operation, num);
}