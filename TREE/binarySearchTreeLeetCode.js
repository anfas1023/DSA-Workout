 class Node{
    constructor(value){
     this.value=value
     this.left=null
     this.right=null
    }
 }





 class binarySearchTree{
    constructor(){
        this.root=null
        this.prev=null   // used to check if a binary search tree or not

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

    bfs(){
       
        let queue=[]
        queue.push(this.root)

        while(queue.length>0){
            let current=queue.shift()
            console.log(current.value)

            if(current.left){
              queue.push(current.left)
            }

            if(current.right){
                queue.push(current.right)
            }
        }
    }


    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }

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


    min(root){
        if(!root.left){
            return root
        }else{
            return this.min(root.left)
        }
    }

    inOrderIterative(){
        let stack=[]
        let current=this.root
        let result=[]
        while(current!==null || stack.length>0){
            while(current){
                stack.push(current)
                current=current.left
            }

            current=stack.pop()
            result.push(current.value)
             current=current.right
            
        } 

        return result
    
    }

    isEmpty(){
        return this.root===null
    }

    // isBst(){
    //     let current=this.root
    //     let stack=[]
    //     let prev=null
    //     while(stack.length>0 || current!==null){
    //         while(current){
    //             stack.push(current)
    //             current=current.left
    //         }

    //         current=stack.pop()

    //         if(prev!==null && current.value<=prev.value){  
    //             return false
    //         }    

    //         prev=current
    //         current=current.right
    //     }

    //     return true
    // } 
    
    
    isBst(){
        let current=this.root
        let stack=[]
        let prev=null

        while(stack.length>0 && current!==null){
            while(current){
                stack.push(current)
                current=current.left
            }

            let current=stack.pop()

            if(prev!==null && current.value<=prev.value){
                return false
            }

            prev=current
            current=current.right
        }

        return true
    }

    // closestValue(target){
    //     if(!this.root){
    //         return "No Root"
    //     }

    //     let closest=this.root.value
    //     let current=this.root
    //     while(current){

    //         if(Math.abs(current.value-target)<Math.abs(closest-target)){
    //             closest=current.value
    //         }

    //         if(target<current.value && current.left){
    //             current=current.left
    //         }else if(target>current.value && current.right ){
    //             current=current.right
    //         }else{
    //             return current.value
    //         }


    //     }
    //     return closest
    // }


    closestValue(target){
        let current=this.root
        let closest=current.value

        while(current){
            if(Math.abs(current.value - target)<Math.abs(closest-target)){
                closest=current.value
            }


            if(target<current.value && current.left){
                current=current.left
            }else if(target>current.value && current.right){
                current=current.right
            }else{
                return current.value
            }
        }

        return closest
    }

    rangeOfSum(low,high){
    let current=this.root
    let queue=[] 
    queue.push(current)
    let result=0
    while(queue.length>0){
        current=queue.shift()

        if(current.value>=low && current.value<=high){
            result +=current.value
        }

         if(current.left){
            queue.push(current.left)
        }

        if(current.right){
            queue.push(current.right)
        }
    }

    return result
    }

    calculateDepth(node,targetValue,depth){
      if(!node){
        return -1
      }

      if(node.value===targetValue){
        return depth
      }

      if(targetValue<node.value){
        return this.calculateDepth(node.left,targetValue,depth+1)
      }else{
        return this.calculateDepth(node.right,targetValue,depth+1)
      }
    }


 }


 const bst=new binarySearchTree()
 bst.insert(20)
 bst.insert(18)
 bst.insert(16)
 bst.insert(19)
 bst.insert(25)
 bst.insert(22)
 bst.insert(30)
 console.log("inorder")
 console.log(bst.inOrderIterative())
 console.log("Bfs searching")

bst.bfs()

console.log(bst.isBst())
console.log(bst.closestValue(15))
console.log(bst.rangeOfSum(17,20));

console.log("depth of a node");

console.log(bst.calculateDepth(bst.root,19,0))
bst.delete(19)
console.log("after deletion");
console.log(bst.inOrderIterative())



