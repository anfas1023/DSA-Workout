
class Maxheap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let currentIndex=this.heap.length-1

        while(currentIndex>0){
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
        if(this.isEmpty()){
            return "cannot delete element is empty"
        }

    let max=this.heap[0]
    this.heap[0]=this.heap.pop()

    this.heapifyDown(0)

    return max
    } 

    heapifyDown(index){
        let currentIndex=index

        while(true){
            let leftChild=2*currentIndex+1
            let rightChild=2*currentIndex+2
            let largestIndex=currentIndex

            if(leftChild< this.heap.length && this.heap[leftChild]>this.heap[largestIndex] ){
                largestIndex=leftChild
            }

            if(rightChild <this.heap.length && this.heap[rightChild]>this.heap[largestIndex]){
                largestIndex=rightChild
            }

         if(currentIndex!==largestIndex){
            [this.heap[currentIndex],this.heap[largestIndex]]=[this.heap[largestIndex],this.heap[currentIndex]]

            currentIndex=largestIndex
         }else{
            break
         }
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    printHeap(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}

const heap=new Maxheap()

heap.insert(20)
heap.insert(30)
heap.insert(10)
heap.insert(50)
heap.insert(15)
heap.insert(40)

heap.printHeap()

console.log("heap after deletion");
heap.deleteMax()
heap.printHeap()

console.log("heap after deletion2");
heap.deleteMax()
heap.insert(79)
heap.insert(50)
heap.insert(40)
heap.printHeap()