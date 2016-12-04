import fs from 'fs'

let wires = {}

function Wire(instruction) {
    this.calculate = this.generateValueGetter(instruction)
}

Wire.prototype.getValue = function() {
    if (this.value === undefined)
        this.value = this.checkRange(this.calculate())
    return this.value
}

Wire.prototype.checkRange = function(i) {
    let n = 65536
    return ((i % n) + n) % n
}

Wire.prototype.generateValueGetter = function(instruction) {
    let assignMatch, opMatch
    if (assignMatch = /^(NOT )?([0-9]+|[a-z]+)$/.exec(instruction)) {
        return () => {
            let value = parseValue(assignMatch[2])
            if (assignMatch[1])
                value = ~ value
            return value
        }
    } else if (opMatch = /^([a-z]+|[0-9]+) (AND|OR|LSHIFT|RSHIFT) ([a-z]+|[0-9]+)$/.exec(instruction)) {
        let opCode = this.ops[opMatch[2]]
        return () => {
            return eval(`${parseValue(opMatch[1])} ${opCode} ${parseValue(opMatch[3])}`)
        }

    }
}

Wire.prototype.ops = {
    'AND'    : '&',
    'OR'     : '|',
    'LSHIFT' : '<<',
    'RSHIFT' : '>>',
}

function parseValue(key) {
    let i = parseInt(key)
    return !isNaN(i) ? i : wires[key].getValue()
}

let data = fs.readFileSync('input.txt', 'utf8').split('\n').forEach(item => {
    let match
    if (match = /(.*) -> ([a-z]+)/.exec(item))
        wires[match[2]] = new Wire(match[1])
})

console.log(`Part one: ${wires.a.getValue()}`)
