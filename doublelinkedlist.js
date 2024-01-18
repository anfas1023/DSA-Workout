class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class doubleLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    addAtFront(data){
        const newNode=new Node(data)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode

        }

        this.size++
    }

    addAtEnd(data){

        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.prev=this.tail
            this.tail.next=newNode
           this.tail=newNode
        }

        this.size++
    }

    addAtIndex(index,data){

        if(index<0 || index>this.size){
            return "undefined"
        }
  const newNode=new Node(data)
       if(index===0){
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode

        if(!this.tail){
            this.tail=newNode
        }
       }else if(index===this.size){
        newNode.prev=this.tail
            this.tail.next=newNode
           this.tail=newNode
       }else{
        let current=this.head
        let count=0   
        while(count<index){
current=current.next
count++
        }
        newNode.prev = current;
        newNode.next = current.next;
          

      
            current.next.prev = newNode;
       
                         
        current.next = newNode;

       }
        this.size++

    }

    removeFirst(){

        if(!this.head){
            return undefined
        }

        if(this.size===1){
            this.tail=null
            this.head=null
        }else{
            this.head=this.head.next
            this.head.prev=null
        }

     

        this.size--
       
    }

    removeAtend(){
        if(!this.tail){
            return undefined
        }

        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
        this.size--
    }

    remove(index){
        if(index<0 || index>this.size){
            return undefined
        }

        if(index===0){
            if(this.size===1){
                this.head=null
                this.tail=null
            }
            this.head=this.head.next
            this.head.prev=null
            
           
        }else if(index===this.size){

            if(this.size===1){
                this.head=null
                this.tail=null
            }

              this.tail=this.tail.prev
              this.tail.next=null
        }else{

            let curent=this.head
            let count=0
            let prev=null

            while(count<index){
                prev=curent
                curent=curent.next
                count++
            }
            prev.next=curent.next
            curent.next.prev=prev
           
        }

        this.size--
    }

    display(){
        let current=this.head
        while(current){
            console.log(current.data);
           current=current.next
        }
    }
}

const doublelinkedlist=new doubleLinkedList()
doublelinkedlist.addAtEnd(2)
doublelinkedlist.addAtEnd(3)
doublelinkedlist.addAtEnd(4)
doublelinkedlist.addAtEnd(5)
doublelinkedlist.addAtEnd(6)
// doublelinkedlist.addAtIndex(2,100)
// doublelinkedlist.removeAtend()
// doublelinkedlist.removeAtend()
doublelinkedlist.remove(6)
doublelinkedlist.display()