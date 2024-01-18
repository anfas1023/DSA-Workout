var isPalindrome = function(x) {
    n=x.length-1
    let isValid=false
    for(let i=0;i<n;i++){
      
        if(x[i]===x[n]){
     isValid=true
        }else{
            return false
        }
        n--
    }

    return isValid
};


console.log(isPalindrome(121));


// dupliacte

var dupliacte=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
              if(arr[i]===arr[j]){
                arr.splice(j,1)
                j--
                // for(let k=j;k<arr.length;k++){
                //     arr[k]=arr[k+1]
                // }
                // arr.length--
                // j--
              }
        }
    }
    return arr
}

console.log(dupliacte([1,2,3,2,3,3,5]));


const removeDuplicate=(arr)=>{
    let s=[]

    for(let i=0;i<arr.length;i++){
        // if(!s.includes(arr[i])){
        //     s.push(arr[i])
        // }

        if(s.indexOf(arr[i]) === -1){
            s.push(arr[i]);
        }
    }

    return s
}


console.log(removeDuplicate([1,2,3,3,4,5,6,4]));

const reverse=(arr)=>{
    let temp=0
    for(let i=0,j=arr.length-1;i<j;i++,j--){
   let temp=arr[i]
   arr[i]=arr[j]
   arr[j]=temp
    }

    return arr
}


console.log("reverse array:"+reverse([1,2,3,4,5]));

let secondlargest=(arr)=>{
    let l=-1
    let sl=-1
    let tl=-1

    for(let i=0;i<arr.length;i++){
        if(arr[i]>l){
            sl=l
            l=arr[i]
        }else if(arr[i]>sl && arr[i]!==l ){
            tl=sl
            sl=arr[i]
        } else if(arr[i] > tl && arr[i] !== sl && arr[i] !== l){
            tl = arr[i];
        }
    }


    return sl
}

console.log("Second largest is:"+secondlargest([2,3,4,5,99,7]));





