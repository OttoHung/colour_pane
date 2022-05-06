const COLOUR_COMPONENT_STEPS = 32
const COLOUR_COMPONENT_STEP = 8

interface Colour {
    red: number,
    green: number,
    blue: number
}

let count = 0
let from = 0
let until = COLOUR_COMPONENT_STEP * COLOUR_COMPONENT_STEPS
let steps = COLOUR_COMPONENT_STEP
let b = from

const generateInterestingColour = () =>{
    for (let r = 8 ; r <= until ; r+=COLOUR_COMPONENT_STEP) {        
        for (let g = 8 ; g <= until ; g+=COLOUR_COMPONENT_STEP) {            
            while(true) {
                b += steps

                printColour({
                    red: r,
                    green: g,
                    blue: Math.abs(b)
                })

                if (Math.abs(b) >= until){
                    steps *= -1
                    break;
                } else if (b === 0){
                    break;
                }
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

generateInterestingColour()
