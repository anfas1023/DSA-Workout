class Graph{
    constructor(){
     this.vertixes={}
    }

    addVertixes(vertix){
       if(!this.vertixes[vertix]){
        this.vertixes[vertix]=new Set()
       }
    }

    addEdges(vertex1,vertex2){
      if(!this.vertixes[vertex1]){
        this.addVertixes(vertex1)
      }

      if(!this.vertixes[vertex2]){
        this.addVertixes(vertex2)
      }

      this.vertixes[vertex1].add(vertex2)
      this.vertixes[vertex2].add(vertex1)

    }

    removeEdges(vertex1,vertex2){
      this.vertixes[vertex1].delete(vertex2)
      this.vertixes[vertex2].delete(vertex1)
    }

    removeVertix(vertex) {
      if (!this.vertixes[vertex]) {
          return "Vertex not found";
      }
  
    for(const verte of this.vertixes[vertex]){
      this.removeEdges(vertex,verte)
    }
  delete this.vertixes[vertex]
      return "Vertex removed";
  }


bfs(startVertex){
  if(!this.vertixes[startVertex]){
    return "there no vertex found"
  }

  let visited={}
  let result=[]
  let queue=[startVertex]
  visited[startVertex]=true

  while(queue.length>0){
    let currentvertex=queue.shift()
    result.push(currentvertex)

    for(const key of this.vertixes[currentvertex]){
      if(!visited[key]){
        queue.push(key)
        visited[key]=true

      }
    }
  }

  return result

}



dfs(startVertex){
if(!this.vertixes[startVertex]){
  return "No Vertexes are found"
}
let visited={}
let result=[]
let stack=[startVertex]
visited[startVertex]=true

while(stack.length){
  let currentvertex=stack.pop()
  result.push(currentvertex)

  for(const key of this.vertixes[currentvertex]){
    if(!visited[key]){
      stack.push(key)
      visited[key]=true
    }
  }
}

return result
} 



    printGraph() {
      for (let key in this.vertixes) {
          console.log(`${key} --> ${[...this.vertixes[key]].join(', ')}`);
      } 
  }
}



const graph=new Graph()

graph.addEdges('A', 'D');
graph.addEdges('A', 'C');
graph.addEdges('B', 'D');
graph.addEdges('C', 'E');
graph.printGraph()
console.log(graph.bfs('A'));
console.log(graph.dfs("A"));



