'use strict'

import Box from './box.js'

class Ribbon extends Box {
    ribbonFeet() {
        return (this.smallestRibSide() + (this.length * this.width * this.height))
    }

    smallestRibSide() {
        let lw = (this.length + this.width + this.length + this.width)
        let wh = (this.width + this.height + this.width + this.height)
        let hl = (this.height + this.length + this.height + this.length)

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
}

export default Ribbon
