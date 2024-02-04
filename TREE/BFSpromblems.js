class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class BinarySerachtree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }

        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }


    search(root,value){
        if(!root){
            return false
        }

        if(root.value===value){
            return true
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
min(root){
    if(root===null){
        return null;

    }
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
}

    max(root){
       
        if(!root.right){
          return   root.value
        }else{
           return  this.max(root.right)
        }
    }
   


    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
         

    deleteNode(root,value){
       

        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{

            if(root.left===null){
                return root.right
            }else if(root.right===null){
                return root.left
            }

            root.value=this.min(root.right)  

            root.right=this.deleteNode(root.right,root.value)

        }
        return root
    }


    BFS(){
     let queue=[]
     queue.push(this.root)
     while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);

        if(curr.left){
            queue.push(curr.left)
        }

        if(curr.right){
            queue.push(curr.right)
        }
     }
    }

    isBst(){
      let curr=this.root
      let prev=null
      let stack=[]
      

      while(stack.length>0 || curr!==null){
        while(curr){
            stack.push(curr)
            curr=curr.left
        }

         curr=stack.pop()

        if(prev!==null  && curr.value<=prev.value ){
            return false
        }
        prev=curr
        curr=curr.right
      }
      return true
    }



}


const Bst=new BinarySerachtree()

Bst.insert(10)
Bst.insert(20)
Bst.insert(4)
Bst.insert(8)
Bst.insert(18)
console.log(Bst.search(Bst.root,8));
// Bst.delete(8)
// console.log(Bst.search(Bst.root,8));
Bst.BFS()
console.log(Bst.isBst());
// console.log(Bst.min(Bst.root));
// console.log(Bst.max(Bst.root));