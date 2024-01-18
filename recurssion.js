// function reverse(string){
//     if(string.length===0){
//         return " "
//     }


//     // console.log(string[string.length-1]);
//  return string[string.length-1]+reverse(string.slice(0,string.length-1))

// }
// console.log(reverse("hello"));


function reverse(string){
    if(string.length<=0){
        return " "
    }

    return string[string.length-1] + reverse(string.slice(0,string.length-1))
}

console.log(reverse("hello"));


function reverseString(str){
    let string=str.split('')
    for(let i=0,j=string.length-1;i<j;i++,j--){
    let temp=string[i]
    string[i]=string[j]
    string[j]=temp
    }
    return string.join(" ")
}

console.log(reverseString("hello"));



function sumOfNaturalNumber(n){
    if(n===0){
        return 1
    }
return n* sumOfNaturalNumber(n-1)

}

console.log(sumOfNaturalNumber(3));
// // 12345 =>15
function sumOfnumbers(n){
    if(n===0){
        return 0
    }

    return n%10 +sumOfnumbers(parseInt(n/10))

}

console.log(sumOfnumbers(1234569));

// multiply by element in an array

function multiply(arr){

    if(arr.length===0){
        return 1
    }
    return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
}

console.log(multiply([1,2,3,4]));   


// sum of element



function sum(arr,n){
    // if(arr.length===0){
    //     return 0
    // }

    // return arr[arr.length-1]+sum(arr.slice(0,arr.length-1))

    if(n===0){
        return arr[n]
    }

    return sum(arr,n-1) +arr[n]
}
let v=[3,2,3]
let n=v.length-1
console.log(sum(v,n));


function fib(n){
    if(n<=0){
        return 1
    }

  return  fib(n-1) +fib(n-2)

}

console.log(fib(5));


function factorial(n){
    if(n===1){
        return 1
    }

    return n * factorial(n-1)
}

console.log("factorial:"+factorial(5));





