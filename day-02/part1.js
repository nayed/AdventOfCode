'use strict'

const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf8').split('\n')
let l = 0
let w = 0
let h = 0
let calcul = 0

let feet = input.map((dimensions) => {
  dimensions = dimensions.split('x')
  l = dimensions[0]
  w = dimensions[1]
  h = dimensions[2]
  calcul += (2 * l * w) + (2 * w * h) + (2 * h * l)
  return dimensions
})

console.log(calcul)
