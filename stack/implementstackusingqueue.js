class stackUsingQueue{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    
    push(x){
        while(this.q1.length !==0){
            this.q2.push(this.q1.shift())
        }

        this.q1.push(x)

        while(this.q2.length !==0){
            this.q1.push(this.q2.shift())
        }
    }

    pop(){
        return this.q1.shift()
    }

    top(){
        return this.q1[0]
    }

    empty(){
        return this.q1.length===0
    }

}

const obj=new stackUsingQueue();
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)

console.log(obj.top());
console.log(obj.pop());
console.log(obj.pop());