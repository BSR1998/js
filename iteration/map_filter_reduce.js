let mapArr = [1,2,3,4,5,6,7,8,9,10]

let arr = mapArr.map((element,index) => (element * 2))

console.log(arr)

const filterArr = [1,2,3,4,5,6,7,8]

let brr = filterArr.filter((element,index) => {
    console.log("Filter Index ",index)
    return element % 2 === 0
})


console.log(brr)


let reduceArr  = [ '1','2','1','2','3','4'
] 

let totalCount = reduceArr.reduce((acc , curr) => {


    acc[curr] = (acc[curr] || 0) + 1

    return acc

},{})


console.log(totalCount)


const totalSumArr = [1,2,34,54,6,7,8]

const totalSum = totalSumArr.reduce((acc,curr) => acc + curr)

console.log(totalSum)