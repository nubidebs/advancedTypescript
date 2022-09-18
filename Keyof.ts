import { proxy } from "./proxy"

type Person = {
    name: string,
    age: number,
    location: string
}



/* 

Problem we want to solve: We want to be notified when someone tries to read or set age

We have the logAccess function which takes two arguments:
- object
- key of the property we want to observe

=> we want to make sure the second argument is limited to the properties included in the object we pass 
eg. 'ages' gives an error in the example below 

const deb: Person =logAccess({
    name: 'Deb',
    age: '18',
    location: 'Rome'
   }, "ages") // ERROR HERE

*/

// Example 1: this would accept any string as second argument, not enough protection
function logAccessTooGeneric(object: Person, key: string): Person {
    return proxy(object, key)
}

// Example 2: Conceptually this is correct but the nwe would have to maintain the list of keys manually - not optimal
function logAccessManualEntries(object: Person, key: 'name' | 'age' | 'location'): Person {
    return proxy(object, key)
}

//Example 3: Good Practice
type PersonKeys = keyof Person // takes a type input and returns the union of the keys from the type

function logAccessAutoComplete(object: Person, key: PersonKeys): Person {
    return proxy(object, key)
}

// Example 4: Best Practice (more general, reusable)
function logAccess<T>(object: T, key: keyof T): T {
    return proxy(object, key)
}


const deb: Person =logAccess({
    name: 'Deb',
    age: '18',
    location: 'Rome'
   }, "age")


   
deb.age = deb.age + 1

