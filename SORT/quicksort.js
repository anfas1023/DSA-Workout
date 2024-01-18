// function quicksort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pivot=arr[0]
//     let left=[]
//     let rigth=[]

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//     left.push(arr[i])
//         }else{
//             rigth.push(arr[i])
//         }
//     }

//     return [...quicksort(left),pivot,...quicksort(rigth)]
// }


function quicksort(arr){
    if(arr.length<=1){
        return arr
    }

    let pivot=arr[0]

    let left=[]
    let rigth=[]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }

    return [...quicksort(left),pivot,...quicksort(rigth)]
}

console.log(quicksort([2,5,6,1,7,9]));