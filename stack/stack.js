// valid parenthisis

// function isValidPara(string){
//     let stack=[]
//     for(let i=0;i<string.length;i++){
//         if(string[i]==='{' || string[i]==='[' || string[i]==='('){
//             stack.push(string[i])
//         }else{
//             if(stack.length===0){
//                 return false
//             }
    
//             let ch=stack.pop()

//             if((ch==='{' && string[i]==='}')  || (ch==='[' && string[i]===']') || (ch==='(' && string[i]===')')){

//             }else{
//                 return false
//             }

//         }
//     }

//     if(stack.length>0){
//         return false
//     }

//     return true
// }


function isValidPara(string){
    let stack=[]

    for(let i=0;i<string.length;i++){
        if(string[i]==='{' || string[i]==='[' || string[i]==='('){
            stack.push(string[i])
        }else{
            if(stack.length<=0){
                return false
            }
            let ch=stack.pop()

            if(ch==='{' && string[i]==='}' || ch==='[' && string[i]===']' || ch==='(' && string[i]===')' ){

            }else{
                return false
            }

        }

    }

    if(stack.length<0){
        return false
    }

    return true
}

const string='({[]})'

console.log(isValidPara(string));

// reverse

// function reverseWord(string){
//     let split=string.split(' ');
//     console.log(split);
//     let stack=[]

//     for(let i=0;i<split.length;i++){
//       stack.push(split[i])
//     }

//     let finals=""
    
//     while(stack.length>0){
//         let result=stack.pop()
//         finals +=" "+result

// }
// return finals.trim()
// }

function reverseWord(string){
let split=string.split(" ")
let stack=[]
for(let i=0;i<split.length;i++){
stack.push(split[i])
}
let finals=" "
while(stack.length>0){
    let ch=stack.pop()
    finals +=ch
}

return finals.trim()
}
console.log(reverseWord("the sky is blue"));

