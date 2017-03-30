// mine
function countWords (inputWords) {
    return inputWords.reduce(function(acc, val) {
        val in acc ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});
}

module.exports = countWords

// theirs

function countWords(arr) {
    return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1;
        return countMap;
    }, {})
}