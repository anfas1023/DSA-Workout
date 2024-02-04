class Heap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)

    this.heapifyUp()
    }
    
    heapifyUp(){
        let currentIndex=this.heap.length-1

       while(currentIndex){
        let parentIndex=Math.floor((currentIndex-1)/2)
        if(this.heap[currentIndex]>this.heap[parentIndex]){
            [this.heap[currentIndex],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[currentIndex]]
            currentIndex=parentIndex
        }else{
            break
        }
       }
    }

    deleteMax(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
     this.heapifyDown(0)

    }


    heapifyDown(index){
    let currentIndex=index

    while(true){
    let largestIndex=currentIndex
    let rightIndex=2*largestIndex+1
    let leftIndex=2*largestIndex+2

    if(leftIndex<this.heap.length && this.heap[leftIndex]>this.heap[largestIndex]){
        largestIndex=leftIndex
    }


    if(rightIndex<this.heap.length && this.heap[rightIndex]>this.heap[largestIndex]){
        largestIndex=leftIndex
    }

    if(largestIndex!==currentIndex){
        [this.heap[largestIndex],this.heap[currentIndex]]= [this.heap[currentIndex],this.heap[largestIndex]]
        currentIndex=largestIndex
    }else{
        break
    }
    }
    }

    printheap(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i])
        }
    }

}


const bst=new Heap()
bst.insert(10)
bst.insert(19)
bst.insert(8)
bst.insert(5)
bst.insert(9)
bst.insert(29)
bst.printheap()
