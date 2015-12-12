'use strict'

import fs from 'fs'

let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let answer = input.filter(word => {
    return /(..).*\1/g.test(word) && /(.).\1/.test(word)
}).length

console.log(answer)
