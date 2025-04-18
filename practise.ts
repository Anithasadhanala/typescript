
// Types in TS
// numver, string, boolean, null, void, never etc.


// type Inference, we are explicitly giving type to a var
let name: string = 'ALBERTROSE'
name = name.toLowerCase()
console.log(name)


// automatically type inference happens
let integer = 10 // TS infers: age is number


// when needed explicit inference :
// Here, declared a num var, thought to store only number type 
// but another programmer changed this. Hence use explicit type declaration  here.
let num
function fetchPath(): string{
    num = "Anitha"
    return "completed execution"
}


// functions in Ts
function getValue(value: number): string{
    // this function takes number as parameter.
    //  returns a string
    return "I am done."
}



// Return no value then use void type
function errHandle(): void{
    throw new Error("Error prone code!!!")
}


// Return no value then use never type
// strictly don't return the value from the function.
function errHandle2(): never{
    throw new Error("Error prone code!!!")
}


// default parameter for a function
function demoWithDefaults( action: string, flag: boolean = false): void{
    console.log("i am done execution.")
}


// return the object from the function
function returnObj():{}{
    return {}
}


// function accepts the multiple params in obj.
function returnObj2({name: string, salary: number}):{}{
    return {}
}


// Above function might have more params so, use the type Obj
// Type definition
type Obj = {
    key1: number,
    key2: string
}
type Employee = {
    readonly _id: number, // cannot modify
    name: string,
    isActive: boolean,
    tax?: number          // optional value to be shared
}
function demoMultipleArray(object: Obj){   // here the type definition is used
    console.log(object)
}


// Arrays 
let arr: (string | number)[] = []


// union
let num2: number | string
// example
let airPlaneSeat: "seater" | "firstClass" | "secondClass"   // just like ROR freeze var
airPlaneSeat = "secondClass"


// Tuples (tuples give restriction on how the value of the Dtype are stored - order of the Dtype values)
let tUser: [number, string] = [2, "Hi"] // here we cannot change the order the data
// Also here we might change the tuple definition by altering the Dtype with inbuild functions
// such as the push(), pop(), etc..


// Enum (there are multiple ways to define this)
// use const if you don't modify in further code.
enum staticValue {
    VAL1 = "val1",
    vAL2 = "val2"
}


// Interface 
interface Users {
    name: string,
    age: number,
    getAddress(pinCode: number): string,   // function to be implemented
    getDetails: () => number
}
let user1: Users = {
    name: "anitha",  age: 26, 
    getAddress: (code: 533291) => {  // here we are also naming the params not like normal function
        return "done"
    },
    getDetails: ()=>{
        return 100
    }
}
interface Role extends Users{              // inheritance in Interface
    roles: "Admin" | "Manager" | "Learner"
}





export {}