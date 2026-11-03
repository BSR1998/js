// " ", "0","null", 1,[],{} true value return

//"",-0,0,null,undefined,nan, false value


if(!-0) {
    console.log("False value")
}

// ternary operator 

let varValue = true ? 0 : 1

console.log(varValue);

let varValue1 = null ?? function () { console.log("happy birthday")}

if(varValue1) {


    varValue1()
}
