'use strict'

import fs from 'fs'
import Box from './box.js'
import Ribbon from './ribbon.js'

let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let calc = 0

let feet = input.map(dimensions => {
    dimensions = dimensions.split('x')

    let l = Number(dimensions[0])
    let w = Number(dimensions[1])
    let h = Number(dimensions[2])

    let box = new Box(l, w, h)
    let ribbon = new Ribbon(box.length, box.width, box.height)

    calc += ribbon.ribbonFeet()

    return dimensions
})

console.log(calc)
