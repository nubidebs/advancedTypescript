export type Point = {
    x: number,
    y: number
}

// Problem we want to solve: We want the origin point to be immutable


// Option 1. We can create a read only type
// cons: repetition

export type ReadonlyPoint1A = {
    readonly x: number
    readonly y: number
}

// This can also be written with the built-in Readonly like

export type ReadonlyPoint1B = Readonly<Point>



//============================================

// Option 2. Use mapped types

/*
Syntax of mapped types:

export type ReadonlyPointMapped = {
    [loop]: output
}
*/

export type ReadonlyPointMapped = {
   readonly [Key in keyof Point]: number
}

/* I can make the above mapped type more generic but still applied to Point */

export type ReadonlyPoint = {
    readonly [Key in 'x' | 'y']: Point[Key]
}

/* We could also write it more generic  (reusable) combining
- mapped types
- keyof
- generics

export type Readonly<T> = {
    readonly [Key in T]: T[Key]
}

*/



// FINAL SOLUTION: I can just write as below to use the Readony built-in type with geenrics:

export const origin: Readonly<Point> = {
    x: 0,
    y: 0,
}