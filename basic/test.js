let str = "Suraj"

console.log("Str ",str.slice(1,3))

let arr = [1,2,3,4,5,6,7]

console.log("Arr ",arr.slice(1,4))

let brr = arr.splice(1,4)

console.log("Arr ",arr, " Brr ",brr)

let crr = [1,2,3,4,5,6,7]

console.log("Crr ",crr.slice(-3))

let drr = crr.splice(-3)

console.log("Crr ",crr, " Drr ",drr)


//singleton object
// let myObj = new Object()


// literal Object 
let myObj = {
    id:101,
    name: "Suraj",
    department:"Computer"
}


console.log("My Object ",myObj)


let myObj1 = {
    idd:102,
    myFun : function() {
        console.log("My Function ")
    }
}

let myObj2 = {
    myFun2 : function() {
        console.log("My Function 2")
    }
}
// By Assign method
// myObj = Object.assign({},myObj1,myObj2)

myObj = {...myObj,...myObj1 ,...myObj2}

console.log(" My Final Object ",myObj)

console.log("Enteties ",Object.entries(myObj))
console.log("values ",Object.values(myObj));
console.log("Keys ",Object.keys(myObj));



// Object with symbol key 

const mySymbol =  Symbol("key")

let mySymbObj = {
    id:101,
    [mySymbol]:"Symbol object"
}

console.log("Sym,bol Object ",mySymbObj)

let myStrStr = new String("hello")

console.log(myStrStr)

// contruction array 

let myConArr = new Array(1,2,3,4,5,6,7)

console.log(myConArr)

// Destructuring 
let desObj = {
    id:101,
    name:"Suraj",
    department:"Computer"
}

const {id,name,department } = desObj

console.table([id,name,department])


function testFun(...num) {
    return num

}


const testReturnedvalue = testFun(1,2,3,4,5,6,7,7)

console.log("Test Returned Value ",testReturnedvalue)

function testFunOne(num) {
    return num

}


console.log(testFunOne(myConArr))

console.log(testFunOne(myObj))


// Date 

const myDate = new Date()

console.log(myDate)

const myTimeMs = Date.now()

console.log(myTimeMs)

const mySpecificDate = new Date("2013-11-06")

console.log(mySpecificDate)


// Global scope variables 

var a = 1;
let b =2;
const c = 3;

if(true) {
 // local scop
    let b = 22
    const c = 33;
    console.log(a)
    console.log(b)
    console.log(c)
}

// Math library
console.log(Math.max(1,2,3,4,5,6))
console.log(Math.min(1,2,3,4,5,6))

console.log(Math.floor(Math.random() * (20-10 + 1) + 10))

console.log(Math.abs(-10))

console.log(Math.ceil(12.1))

console.log(Math.round(13.4))


let numToStr = "10"

console.log(Number(numToStr))

