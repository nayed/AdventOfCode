import fs from 'fs'

let input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')

let grid = []

for(var i = 0; i < 1000; i++) {
    grid[i] = []

    for (var y = 0; y < 1000; y++) {
        grid[i][y] = {
            status: 0
        }
    }
}

let regex = /^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/

for (var i = 0; i < input.length; i++) {
    let operation = input[i].match(regex)

    let x1 = +operation[2]
    let y1 = +operation[3]
    let x2 = +operation[4]
    let y2 = +operation[5]
    operation = operation[1]

    for(var i1 = x1; i1 <= x2; i1++) {
        for(var i2 = y1; i2 <= y2; i2++) {
            switch (operation) {
                case 'turn on':
                    grid[i1][i2].status = 1
                    break
                case 'turn off':
                    grid[i1][i2].status = 0
                    break
                case 'toggle':
                    grid[i1][i2].status ^= 1
                    break
            }
        }
    }
}

let lits = 0

for (var i = 0; i < grid.length; i++) {
    for(var y = 0; y < grid[i].length; y++) {
        lits += grid[i][y].status
    }
}

console.log(lits)
