function binarySearch(arr,key){

    let start=0
    let end=arr.length-1


    while(start<=end){
        let mid=Math.floor(start+end/2)
        if(arr[mid]===key){
            return mid
        }else if(arr[mid]<key){
            start=mid+1
        }else{
            end=mid-1
        }
    }

    return -1

    
}

console.log(binarySearch([2,3,5,4,7,6],3));

function recurssiveBinary(arr,key,start,end){
    if(start>end){
        return -1
    }

    let mid=Math.floor(start+end/2)

    if(arr[mid]===key){
        return mid
    }else if(arr[mid]<key){
      return  recurssiveBinary(arr,key,mid+1,end)
    }else{
        return  recurssiveBinary(arr,key,start,mid+1)
    }
}

let arr=[1,2,4,3,5,6]

console.log(recurssiveBinary(arr,3,0,arr.length-1));