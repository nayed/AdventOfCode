

var patt = new RegExp(/^[09,09]+$/)
var arrStr = "The Quick Brown Fox 4.5 Jumps Over The 6,9 Lazy Dog 6,4".split('')
var bla = []

let answer = arrStr.map(str => {
    if (patt.test(str)) {
        bla.push(str)
    }

})


console.log(bla)
