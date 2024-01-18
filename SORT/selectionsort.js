// function selectionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp;
//         let minIndex=i
//         for(let j=i+1;j<arr.length-1;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//   temp=arr[i]
//   arr[i]=arr[minIndex]
//   arr[minIndex]=temp
    
        
//     }
//     return arr
// }

// console.log(selectionsort([4,5,1,2,9,8]));

function selectionsort(arr){
  
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }

        let temp=arr[minIndex]
        arr[minIndex]=arr[i]
        arr[i]=temp
    }

    return arr
}

console.log(selectionsort(["Orange", "Apple", "Mango", "Banana"]));