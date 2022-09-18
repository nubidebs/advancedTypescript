// Generic type for a function
type A<T> = (x: T) => T;
// Type for a generic function (or something that is generic)
type B = <T>(x: T) => T;

declare const a:A; // Error missing generic argument
declare const aNumber: A<number>
declare const aString: A<string>

declare const b: B;
declare const bIsNotGeneric: B<number> // Error B is not generic

const numToNum: A<number> = function (x: number) {
    return x + 10;
}

const identity: B = function <T>(x: T) {
    return x
}