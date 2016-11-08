'use strict'

import Box from './box.js'

class Ribbon extends Box {
    ribbonFeet() {
        return (this.smallestRibSide() + (this.length * this.width * this.height))
    }

    smallestRibSide() {
        let lw = this.length + this.length + this.width + this.width
        let wh = this.width + this.width + this.height + this.height
        let hl = this.height + this.height + this.length + this.length

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
