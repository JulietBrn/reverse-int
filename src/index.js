module.exports = function reverse (n) {
    let reversedInt = +[...`${ Math.abs(n)}`].reverse().join('')
    return reversedInt
}
