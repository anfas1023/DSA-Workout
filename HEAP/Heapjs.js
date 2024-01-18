class MaxHeap{
constructor(){
    this.heap=[]
}
insert(value){
    this.heap.push(value)
    this.heapifyUp(value)
}



heapifyUp(){
    let currIndex=this.heap.length-1

    while(currIndex>0){
        let parentIndex=Math.floor(currIndex-1/2)

        if(this.heap[currIndex]>this.heap[parentIndex]){
            [this.heap[currIndex],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[currIndex]]
            currIndex=parentIndex
        }else{
            break;
        }
    }
}

isEmpty(){
  return  this.heap.length===0
}

peek(){
    return this.isEmpty() ? null: this.heap[0]
}

printHeap(){
    for(let i=0;i<this.heap.length;i++){
        console.log(this.heap[i]);
    }
}

}


const heap=new MaxHeap();

heap.insert(40)
heap.insert(30)
heap.insert(79)
heap.insert(21)
heap.printHeap()