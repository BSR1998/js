// +++++++++++++++++ Q1 +++++++++++++++++++++++
let jsStr = "JavaScript"
 let reversed = "";
for(let i=jsStr.length-1;i >=0;i-- ) {
   reversed+= jsStr[i]
}

console.log(reversed)

// +++++++++++++++++ Q2 ++++++++++++++++++++++++
let strPalidrom = "madam"

let reversePalidrom = strPalidrom.split("").reverse().join("")

if(strPalidrom === reversePalidrom) console.log("true")

// +++++++++++++++++ Q3 ++++++++++++++++++++++++

let vowelsStr = "Hello World"

vowelsStr = vowelsStr.replace(" ","")

let vowelsStrArr = vowelsStr.split("")
const vowels = ["a", "e", "i", "o", "u"];

const obj = vowelsStrArr.reduce((acc,curr) => {

    if(vowels.some(vowel => curr.toLowerCase().includes(vowel))) {

        acc["vowels"] = (acc["vowels"] || 0) + 1
        
        return acc
    }
    else {
         acc["consonants"] = (acc["consonants"] || 0) + 1
         return acc 
    }
},{})

console.log(obj)

// +++++++++++++++++ Q4 ++++++++++++++++++++++++

let a = 10 
let b = 45 
let c = 30 

if(a > b && a > c ) console.log(a)
else if(b> a && b>c) console.log(b)
else if(c > a && c > b) console.log(c)

// +++++++++++++++++ Q5 ++++++++++++++++++++++++

let factNum = 5 

const factnumFun = (num) => {


    if(num === 0) return 1

    return num * factnumFun(num - 1)
}

console.log(factnumFun(5))

// +++++++++++++++++ Q6 ++++++++++++++++++++++++

let primeNum = 17

for(let i = 2 ; i < primeNum - 1;i++) {
    if(primeNum % i ===0) {
        console.log("Prime number")
        break 
    }
}

// +++++++++++++++++ Q7 ++++++++++++++++++++++++


console.log( Math.floor(Math.random() * 1000000))
