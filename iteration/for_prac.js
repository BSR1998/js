let arr = [1,2,3,4,5,6,7]

for (const element of arr) {
    console.log(element)
}

let map = new Map()

map.set("js","JavaScript")
map.set("c++","cpp")
map.set("java","JAVA")

map.set("jss","JavaScript")

for (const [key,value] of map) {
    console.log(key,value)
}


let str = "Suraj Borekar"

for (const element of str) {
    console.log(element)
}

let arr_obj = [
    {
        id:1,
        name:"Suraj"
    },
    {
        id:1,
        name:"Suraj"
    },
    {
        id:1,
        name:"Suraj"
    }
]

for (const element of arr_obj) {
    console.log(element)
}

let obj = {
    1:1,
    2:2,
    3:3
}

for (const key in obj) {
   
    
    console.log(obj[key])
    
    
}

for (const [key,value] of Object.entries(obj)) {
    console.log(key,value)
}

let brr = [1,2,3,4,5,6,7,8]

brr.forEach((element,index) => {
    console.log(" element ",element," index ",index)
})