'use strict'

import fs from 'fs'

let input = fs.readFileSync('test.txt', 'utf8').split('\n')
let start = null
let end = null
let rules = /([0-9])+/
let data = null

let answer = input.map(instruction => {
    data = /(.+?)\s(\d+),(\d+).+?(\d+),(\d+)/g.exec(instruction)
    return data
})

console.log(data)
