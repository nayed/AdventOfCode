'use strict'

class Box {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    smallestSide() {
        let lw = this.length * this.width
        let wh = this.width * this.height
        let hl = this.height * this.length
        
        if ((lw <= wh) && (lw <= hl)) {
            return lw
        }
        else if ((wh <= lw) && wh <= hl) {
            return wh
        }
        else {
            return hl
        }
    }

    squareFeet() {
        return (2 * this.length * this.width) + (2 * this.width * this.height) + (2 * this.height * this.length) + this.smallestSide()
    }
}

export default Box