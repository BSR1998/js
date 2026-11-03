// global scope 

var a = "aa"
    let b = "bb"
    const c = "cc"


// functional scope 

function one() {
    var a = "a"
    let b = "b"
    const c = "c"
    console.log(a)
}


// block scope

if(true) {
    var a = "a"
    let b = "b"
    const c = "c"
}
one()
console.log(a)