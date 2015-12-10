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

let santa = new Grid(0,0)
let robot = new Grid(0,0)
let both_visited = new Set([santa.position(), robot.position()])

input.map((move, index) => {
    if (index % 2 === 0) {
        santa = new_location(santa, move)
        both_visited.add(santa.position())
    }
    else {
        robot = new_location(robot, move)
        both_visited.add(robot.position())
    }
})

console.log(both_visited.size)
