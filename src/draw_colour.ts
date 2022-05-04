/**
 * R: 8 16 24 32 40 48 56 64 72 80 88 96 102 110 ... 256
 * G: 8 16 24 32 40 48 56 64 72 80 88 96 102 110 ... 256
 * B: 8 16 24 32 40 48 56 64 72 80 88 96 102 110 ... 256
 * 
 * Total: 32768
 */

/**
 * Sequence:
 * 1. 8 8 8
 * 2. 8 8 16
 * 3. 8 16 16
 * 4. 16 16 16
 * 5. 16 16 24
 * 6. 16 24 24
 * 7. 24 24 24
 */
const COLOUR_COMPONENT_STEPS = 32
const COLOUR_COMPONENT_STEP = 8

interface Colour {
    red: number,
    green: number,
    blue: number
}

let count = 0
const generateColour = () => {
    for (let r = 8 ; r <= 256 ; r+=8) {
        for (let g = 8 ; g <= 256 ; g+=8) {
            for (let b = 8 ; b <= 256 ; b+=8) {
                printColour({
                    red: r,
                    green: g,
                    blue: b
                })
            } 

            if( ++count % 8 === 0 ) {
                document.body.append(document.createElement("br"))
            }
        }
    }
}

const printColour = (colour: Colour) => {
    const div = document.createElement("div")
    div.style.background = `rgb(${colour.red}, ${colour.green}, ${colour.blue})`
    div.style.width = "3px"
    div.style.height = "3px"
    div.style.display = "inline-block"

    document.body.append(div)
    
}


generateColour()
