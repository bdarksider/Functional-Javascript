// mine
function duckCount() {
    return Object.values(arguments).reduce(function(acc, val) {
        return acc +  (Object.prototype.hasOwnProperty.call(val, 'quack') ? 1 : 0);
    }, 0);
}

module.exports = duckCount

// theirs
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length;
}