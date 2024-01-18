class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedList{ 
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    addAtTop(value){
        const newNode=new Node(value)
       newNode.next=this.head
       this.head=newNode

       if(!this.tail){
        this.tail=newNode
       }

       this.size++

    }


    addAtLast(value){
      const newNode=new Node(value)

      if(!this.head){
        this.head=newNode
        this.tail=newNode
        return
      }else{
        this.tail.next=newNode
        this.tail=newNode
      }

      this.size++

    }

    addAtIndex(index,value){
        if(index<0 || index>this.size){
            return "number is smaller"
        }
  const newNode=new Node(value)
        let current=this.head
        let prev=null
        let count=0

        while(count<index){
            prev=current
            current=current.next
            count++
        }

        if(prev===null){
            newNode.next=this.head
            this.head=newNode
        }else{
            if(index===this.size){
                this.tail.next=newNode
                this.tail=newNode
                return
            }
            newNode.next=current
            prev.next=newNode
           
        }

      
this.size++
        

    }

    removeAtTop(){
        const removed=this.head
        this.head=this.head.next
        this.size--
        if(this.size===0){
            this.tail=null
        }

        return removed
    }

    removeAtLast(){
        if(!this.head){
            return undefined
        }

     
    let current = this.head;
    let prev = null;

    while (current.next) {
        prev = current;
        current = current.next;
    }

        const removed=current

        if(prev===null){
            this.head=null
            this.tail=null
        }else{
            this.tail=prev
           this.tail.next=null
        }

        this.size--
        return removed
    }

    display(){
        let current=this.head

        while(current!==null){
            console.log("Elements ARE"+current.data);
            current=current.next
        }

        
    }

    removeAtIndex(index){
        if(index <0 || index>this.size){
            return "undefined number"
        }

        if(index===0){
            this.head=this.head.next
            this.size--
            if(this.size===index){
                this.tail=null
            }

            return 
        }


    

        let current=this.head
        let prev=null
        let count=0

        while(count<index){
            prev=current
            current=current.next
            count++
        }

        prev.next=current.next

        if(index===this.size){
           this.tail=prev 
           }
                
           this.size--
    }

    reverse(){
        let current=this.head
        let prev=null
        let nextNode=null
        let tail=this.head

        while(current){
            nextNode=current.next
            current.next=prev
            prev=current
            current=nextNode

        }

        this.tail=tail
        this.head=prev
    }

    midlle(){
        let middle=Math.floor(this.size/2)

        let current=this.head
        let prev=null
        let count=0

        while(count<middle){
            current=current.next
            count++
        }
        return current.data
    }


    

   


}

const linkedlist=new linkedList()

linkedlist.addAtLast(2)
linkedlist.addAtLast(3)
linkedlist.addAtLast(4)
linkedlist.addAtLast(5)
linkedlist.addAtLast(6)
// linkedlist.removeAtLast()
// linkedlist.removeAtLast()
// linkedlist.removeAtTop()
// linkedlist.removeAtIndex(4)
// linkedlist.reverse()
console.log(linkedlist.midlle());




linkedlist.display()