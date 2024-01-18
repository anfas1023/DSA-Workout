

// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let mid=Math.floor(arr.length-1/2)

//     let left=mergesort(arr.slice(0,mid))
//     let rigth=mergesort(arr.slice(mid))

//     return merge(left,rigth)
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


// let arr=["Banana","grape","orange","Apple"]

// console.log(mergesort(arr));

function recurssion(str){
    console.log("str"+str);
    let newStr=str.split(" ");
   
    if(newStr.length<=1){
        return " "
    }

    return newStr[newStr.length-1] +recurssion(newStr.slice(0,newStr.length-1))

}

let str="today is your review"
console.log(recurssion(str));



