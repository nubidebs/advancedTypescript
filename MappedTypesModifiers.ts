export type Point = {
    readonly x:number,
    y?: number
}

// exactly like type Point
export type Mapped<T> = {
    [P in keyof T]: T[P]
}

// x and y are read only
export type Mapped<T> = {
    readonly [P in keyof T]: T[P]
}

// (+ explicitely states that we added the read and made all properties read only)
export type Mapped<T> = {
    +readonly [P in keyof T]: T[P]
}

// x and y are optional with the ? (the + explicitely says we added the question mark)
export type Mapped<T> = {
    [P in keyof T]: T[P]+?
}

// x and y are NOT optional anymore
export type Mapped<T> = {
    [P in keyof T]: T[P]-?
}

// x and y are not readonly anymore
export type Mapped<T> = {
    -readonly[P in keyof T]: T[P]
}


export type Result = Mapped<Point>



/* USECASE SCENARIO for modifiers */

export class State<T> {
    constructor(public current: T){ }
    update(next: Partial<T>){
        this.current = {...this.current, ...next };
    }
}

const state = new State({ x: 0, y: 0})

// type Partial<T> on line 45 is a mapped type with keyof, generics and ? modifier which makes all properties optional.
// It allows us to update only the 'y' property without throwing an error for the missing 'x'
state.update({ y: 123}) 
console.log(state.current)