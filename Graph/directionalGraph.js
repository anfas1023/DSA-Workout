class Graph{
    constructor(){
        this.adjacentList={}
    }

   addvertex(v){
    if(!this.adjacentList[v]){
        this.adjacentList[v]=new Set()
    }
   }

   addEdges(v1,v2){
    if(!this.adjacentList[v1]){
        this.addvertex(v1)
    }

    if(!this.adjacentList[v2]){
        this.addvertex(v2)
    }

    this.adjacentList[v1].add(v2)
    this.adjacentList[v1].add(v2)
    

   }

    printGraph(){
        for(let key in this.adjacentList){
            console.log(key,"->",[...this.adjacentList[key]]);
        }
    }

Bfs(start){
    let result=[]
    let queue=[start]

    let visited={}
    visited[start]=true

    while(queue.length){
        let curr=queue.shift()
        result.push(curr)

        for(let key of this.adjacentList[curr]){
            if(!visited[key]){
                queue.push(key)
                visited[key]=true
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


removeEdges(v1,v2){
    this.adjacentList[v1].delete(v2)
    this.adjacentList[v2].delete(v1)
}

removeVertex(vertex){
    if(!this.adjacentList[vertex]){
        return "vertex not find"
    }

    for(const key of this.adjacentList[vertex]){
        this.removeEdges(vertex,key)
    }

    delete this.adjacentList[vertex]
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




