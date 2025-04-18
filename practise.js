"use strict";
// Types in TS
// numver, string, boolean, null, void, never etc.
Object.defineProperty(exports, "__esModule", { value: true });
// type Inference, we are explicitly giving type to a var
var name = 'ALBERTROSE';
name = name.toLowerCase();
console.log(name);
// automatically type inference happens
var integer = 10; // TS infers: age is number
// when needed explicit inference :
// Here, declared a num var, thought to store only number type 
// but another programmer changed this. Hence use explicit type declaration  here.
var num;
function fetchPath() {
    num = "Anitha";
    return "completed execution";
}
// functions in Ts
function getValue(value) {
    // this function takes number as parameter.
    //  returns a string
    return "I am done.";
}
// Return no value then use void type
function errHandle() {
    throw new Error("Error prone code!!!");
}
// Return no value then use never type
// strictly don't return the value from the function.
function errHandle2() {
    throw new Error("Error prone code!!!");
}
// default parameter for a function
function demoWithDefaults(action, flag) {
    if (flag === void 0) { flag = false; }
    console.log("i am done execution.");
}
// return the object from the function
function returnObj() {
    return {};
}
// function accepts the multiple params in obj.
function returnObj2(_a) {
    var string = _a.name, number = _a.salary;
    return {};
}
function demoMultipleArray(object) {
    console.log(object);
}
// Arrays 
var arr = [];
// union
var num2;
// example
var airPlaneSeat; // just like ROR freeze var
airPlaneSeat = "secondClass";
// Tuples (tuples give restriction on how the value of the Dtype are stored - order of the Dtype values)
var tUser = [2, "Hi"]; // here we cannot change the order the data
// Also here we might change the tuple definition by altering the Dtype with inbuild functions
// such as the push(), pop(), etc..
// Enum (there are multiple ways to define this)
// use const if you don't modify in further code.
var staticValue;
(function (staticValue) {
    staticValue["VAL1"] = "val1";
    staticValue["vAL2"] = "val2";
})(staticValue || (staticValue = {}));
