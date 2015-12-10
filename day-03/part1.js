'use strict'

import fs from 'fs'

let input = fs.readFileSync('test.txt', 'utf8').split('')
let n = 0
let e = 0
let s = 0
let w = 0
let house = 0
let prevmove = ''
let responses = input.map(direction => {
    let grid = []

    /*
              [0, 1]
                 ^
                 |
    [-1, 0] < ---|-- > [1, 0]
                 |
                 v
              [0, -1]
    */
    const MOVES = {
      '^': [0, 1],
      '>': [1, 0],
      'v': [0, -1],
      '<': [-1, 0],
    }

    switch (direction) {
        case '^':
            if ((prevmove !== 'v') || (prevmove === '')) {
                house++
            }
            prevmove = '^'
            break;
        case '>':
            if ((prevmove !== '<') || (prevmove === '')) {
                house++
            }
            prevmove = '>'
            break;
        case 'v':
            if ((prevmove !== '^') || (prevmove === '')) {
                house++
            }
            prevmove = 'v'
            break;
        case '<':
            if ((prevmove !== '>') || (prevmove === '')) {
                house++
            }
            prevmove = '<'
            break;
        default:
            return 'what?'
            break;
    }

    return direction
})

console.log(house)
