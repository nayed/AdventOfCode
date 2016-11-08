'use strict'

import fs from 'fs'

let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let answer = input.filter(word => {
    return !/ab|cd|pq|xy/.test(word) && (word.match(/[aeiou]/g) || []).length > 2 && /(.)\1+/.test(word)
}).length

console.log(answer)
