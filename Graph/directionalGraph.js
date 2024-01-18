class Graph{
    constructor(){
        this.adjacentList={}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=new Set()
        }
    }

    addEdges(v1,v2){
        if(!this.adjacentList[v1]){
            this.addVertex(v1)
        }

        if(!this.adjacentList[v2]){
            this.addVertex(v2)
        }

        this.adjacentList[v1].add(v2)
        this.adjacentList[v2].add(v1)

    }

    printGraph(){
        for(let key in this.adjacentList){
            console.log(key,"->",[...this.adjacentList[key]]);
        }
    }

    removeEdges(v1,v2){
        this.adjacentList[v1].delete(v2)
        this.adjacentList[v2].delete(v1)
    }


Bfs(start){
    if(!this.adjacentList[start]){
        return "not defined start"
    }

    let visted={}
    let result=[]
    let queue=[start]
    visted[start]=true

    while(queue.length>0){
        let current=queue.shift()
        result.push(current)

        for(let key of this.adjacentList[current]){
            if(!visted[key]){
                queue.push(key)
              visted[key]=true
            

            }
        }
    }

    return result

}



dfs(start){
    if(!this.adjacentList[start]){
        return "not defined vertex"
    }
    let visted={}
    let result=[]
    let stack=[start]
    visted[start]=true

    while(stack.length>0){
        let current=stack.pop()
        result.push(current)

        for(let key of this.adjacentList[current]){
            if(!visted[key]){
                stack.push(key)
                visted[key]=true
            }
        }
    }


    return result
}


    removeVertix(vertex) {
        if (!this.adjacentList[vertex]) {
            return "Vertex not found";
        }
    
      for(const verte in this.adjacentList[vertex]){
        this.removeEdges(vertex,verte)
      }
    delete this.adjacentList[vertex]
        return "Vertex removed";
    }
  
}

const graph=new Graph()

graph.addEdges("A","B")
graph.addEdges("A","C")
graph.addEdges("B","D")
graph.addEdges("C","E")
// graph.printGraph()

// graph.removeVertix("A")
// console.log("aftere deletion of vertex");

graph.printGraph()
console.log(graph.Bfs("A"));
console.log(graph.dfs("A"));




