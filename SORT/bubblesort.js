// const bubblesort=(arr)=>{
//     let temp;
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//           if(arr[j]>arr[j+1]){
//             temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//           }
//         }
//     }

//     return arr
// }


function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }

    return arr
}


console.log(bubblesort([2,1,3,4,8,5,9,10]));
