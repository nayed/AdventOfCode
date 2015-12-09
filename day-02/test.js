'use strict'

import Box from './box.js'
import fs from 'fs'

let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let box1 = new Box(2, 3, 4)
let box2 = new Box(1, 1, 10)

console.log(box1.squareFeet(), box2.squareFeet())

// BABEL-NODE