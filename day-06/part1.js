'use strict'

import fs from 'fs'

let input = fs.readFileSync('test.txt', 'utf8').split('\n')

var patt = new RegExp(/^[0-9,0-9]+$/)
let coordinates = []
coordinates.push('hi')


/*let i = 0
let answer = input.map(instruction => {
    instruction = instruction.split(' ')
    instruction.map(coord => {
        if (patt.test(coord)) {
            coordinates[i].push(coord)
        }
    })

    //console.log(instruction)
    i++
})*/

console.log(coordinates)
