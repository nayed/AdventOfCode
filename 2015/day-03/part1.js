'use strict'

import fs from 'fs'
import Grid from './grid.js'

let input = fs.readFileSync('input.txt', 'utf8').split('')

function new_location(current, move) {
    let movements = {
        '^': current => new Grid(current.x, current.y + 1),
        'v': current => new Grid(current.x, current.y - 1),
        '>': current => new Grid(current.x + 1, current.y),
        '<': current => new Grid(current.x - 1, current.y)
    }
    return movements[move](current)
}

let current = new Grid(0, 0)
let visited = new Set([current.position()])

let response = input.map(move => {
    current = new_location(current, move)
    visited.add(current.position())
})

console.log(visited.size)
