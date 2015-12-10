'use strict'

import Box from './box.js'
import fs from 'fs'

let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let calc = 0

let feet = input.map(dimensions => {
  dimensions = dimensions.split('x')
  let l = dimensions[0]
  let w = dimensions[1]
  let h = dimensions[2]
  let box = new Box(l, w, h)

  calc += box.squareFeet()

  return dimensions
})

console.log(calc)
