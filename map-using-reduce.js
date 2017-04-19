module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, val) {
        acc.push(fn(val));
        return acc;
    }, []);
}