'use strict'

class Grid {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    position() {
        return [this.x, this.y].join(',')
    }
}

export default Grid
