/* Partial: makes all properties in T optional

type Partial<T> is a mapped type with keyof, generics and ? modifier which makes all properties optional.

export type Partial<T> = {
    [P in keyof T]?: T[P]
}

*/

export class State<T> {
    constructor(public current: T){ }
    update(next: Partial<T>){
        this.current = {...this.current, ...next };
    }
}

const state = new State({ y: 0})

// It allows us to update only the 'y' property without throwing an error for the missing 'x'
state.update({ y: 123}) 
console.log(state.current)


//==================================


/* Required: makes all properties in T required

export type Partial<T> ={
    [P in keyof T]-?: T[P]
}

*/

type CircleConfig = {
    color?: string,
    radius?: number
}

class Circle {
    // Required: Internally all members will always be present
    private config: Required<CircleConfig>

    constructor(config: CircleConfig){
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius ?? 0,
        }
    }
    draw(){
        console.log(
            'Drawing a circle.',
            'Color:', this.config.color,
            'Radius', this.config.radius
        )
    }
}