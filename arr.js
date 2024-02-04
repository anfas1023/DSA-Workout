

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

// function recurssion(str){
//     console.log("str"+str);
//     let newStr=str.split(" ");
   
//     if(newStr.length<=1){
//         return " "
//     }

//     return newStr[newStr.length-1] +recurssion(newStr.slice(0,newStr.length-1))

// }

// let str="today is your review"
// console.log(recurssion(str));



// function subset(str){
//     for(let i=0;i<=str.length-1;i++){
//         console.log(str[i])
//         for(let j=0;j<str.length;j++){
//            console.log(str[i],str[j]);
//         }
//     }
// }

// console.log(subset("abc"));

// function uniqueChar(str){
//     let result=""

//     for(let i=0;i<str.length;i++){
//         let curr=0
//         for(let j=0;j<str.length;j++){
//               if(str[i]===str[j] && i!==j){
//                   curr++
//                   break
//               }
//         }
//         if(curr===0){
           
//         result+=str[i]
//         }
//     }

//     return result
// }

// console.log(uniqueChar("aabccd"));


function uniqueChars(str) {
    let newSet = new Set();
    let result = "";
  for(let i=0;i<str.length;i++){
    if(!newSet.has(str[i])){
        newSet.add(str[i])
    }else{
        
    }
  }
    return result;
}

console.log(uniqueChars("aabccdde"));  // Output: "be"


function moveZeroes(nums){
let start=nums.length-1
  for(let i=0;i<=start;i++){
    if(nums[i]===0){
      let temp=nums[start]
      nums[start]=nums[i]
      nums[i]=temp
      start--

    }
  }

  return nums
}

console.log(moveZeroes([0,1,2,0,3]))





