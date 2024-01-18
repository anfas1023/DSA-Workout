// function mergesort(arr){

//     if(arr.length<=1){
//         return arr
//     }
//   let mid=Math.floor(arr.length-1/2)
//     let left=mergesort(arr.slice(0,mid))
//     let rigth=mergesort(arr.slice(mid))
//    return merge(left,rigth)
// }

// function merge(left,rigth){
//     let sortedArr=[]
//     while(left.length && rigth.length){
//         if(left[0]<rigth[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(rigth.shift())
//         }
//     }

//     return [...sortedArr,...left,...rigth]
// }



function mergesort(arr){
if(arr.length<=1){
    return arr
}

let mid=Math.floor(arr.length/2)

let left=mergesort(arr.slice(0,mid))
let rigth=mergesort(arr.slice(mid))

return merge(left,rigth)
}


function merge(left,rigth){
    let sortedArr=[]

    while(left.length && rigth.length){
        if(left[0]<rigth[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(rigth.shift())
        }
    }

    return [...sortedArr,...left,...rigth]
}


console.log(mergesort([2,4,5,8,8,7,3,9]));