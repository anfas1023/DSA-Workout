// types of binary trree
// complete binary tree,full binary tree,perfect binary tree

// A binary tree is considered complete if all levels,
//  except possibly the last, are completely filled, and all nodes are as left as possible.
// In a complete binary tree, if a node has a right child, it must also have a left child.


// A binary tree is considered full (or proper) if every node has either 0 or 2 children. 
// In other words, each node in a full binary tree has either both left and right children or no children at all.


// A binary tree is considered perfect if all levels are completely filled, and all leaf nodes are at the same level.m



class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);  // Fixed: Use this.insertNode
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);  // Fixed: Use this.insertNode
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    // DFS (Depth-first search) is a technique used for traversing trees or graphs.
    //  Here backtracking is used for traversal. In this traversal first, 
    // the deepest node is visited and then backtracks to its parent node if no sibling of that node exists

        preOrder(root){
            if(root){
                console.log(root.value);
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }

        inOrder(root){
            if(root){
                this.inOrder(root.left)
                console.log(root.value);
                this.inOrder(root.right)
            }
           
        }

        breadthFirstSearch(){
            const queue=[]
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

        postorder(root){
            if(root){
                this.postorder(root.left)
                this.postorder(root.right)
                console.log(root.value);
            }
        }

        min(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }

        max(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }

    isEmpty(){
        return this.root===null
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
        } else if(value > root.value){
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

    
isBST(){
    let current=this.root
    let prev=null

    let stack=[]

    while(stack.length>0 || current!==null){
        while(current){
            stack.push (current)
            current=current.left
        }

        current=stack.pop()

        if(prev!==null && current.value<=prev.value){
            return false
        }

        prev=current
        current=current.right
    }

    return true
}


    
    closest(root, target) {
        if (!root) {
            return null;
        }
     
        let closest = root.value;
     
        while (root) {
            if (Math.abs(root.value - target) < Math.abs(closest - target)) {
                closest = root.value;
            }
     
            if (target < root.value && root.left) {
                root = root.left;
            } else if (target > root.value && root.right) {
                root = root.right;
            } else {
                return root.value;
            }
     
            console.log("value",root.value);
        }
     
        return closest;
     }


    
}

const bst=new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


console.log(bst.search(bst.root,100));
// console.log("PreOrder Vlaues Are:");
// bst.preOrder(bst.root)
// console.log("Inorder values are:");
// bst.inOrder(bst.root)

// console.log("post oredr value:");
// bst.postorder(bst.root);

console.log("breadth first search:");
bst.delete(5);
bst.breadthFirstSearch()

console.log("manimum value");
console.log(bst.min(bst.root));
console.log("maximum value");
console.log(bst.max(bst.root));

console.log("bst or not");
console.log(bst.isBST());
console.log(bst.closest(bst.root,9));