class weightedgraph{
    constructor(){
        this.adjacentList={}

    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=new Map()
        }
    }

    addEdges(vertex1,vertex2,weight){
        this.addVertex(vertex1)
        this.addVertex(vertex2)

        this.adjacentList[vertex1].set(vertex2,weight)
        this.adjacentList[vertex2].set(vertex1,weight)


    }

    printGraph() {
        for (const vertex in this.adjacentList) {
          const edges = this.adjacentList[vertex];
          const edgeList = [...edges].map(([neighbor, weight]) => `${neighbor}(${weight})`).join(', ');
          
          console.log(`${vertex} -> ${edgeList}`);
       
        }
      }

      
}
const graph=new weightedgraph()
graph.addEdges('A', 'D',3);
graph.addEdges('A', 'C',6);
graph.addEdges('B', 'D',8);
graph.addEdges('C', 'E',9);
graph.printGraph()