// a graph is anon linear data dsstructure that consist of finite number of vertixes alsocalled node connected by edges
// The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. 
// More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(E, V).

// Directed graph and undirected graph
// A graph in which edges have a direction 
// edges are usaaly representing by an arrow in the direction the graph can be traversed 


// a graph in which the edges  are biderectinol and the graph can be traversed in either direction.
// the absence of arrow tell usthat graph is undirected.

        // representation of vertixes

        // Adjacency list and adjacency matrix

        // In this method, the graph is stored in the form of the 2D matrix where rows and columns denote vertices.

        // A
      // /   \
    //   B    c

    const addjacencymatrix=[
        [0,1,1],
        [1,0,0],
        [1,0,0]
    ]

    // This graph is represented as a collection of linked lists. 
    // There is an array of pointer which points to the edges connected to that vertex. 

        // b
      // /   \
    //   a   c


    const adjacencyList={
        'A':[B],
        'b':[A,A],
        'c':[B]
    }


    // BFS AND DFS

    // bfs is a breadth first search in bfs  each node is travsed  all node are travsed in the current level then only it move to its next level

  
       // A
      // /  \
    //   B   C
//     /      \
//    D       E

// A,B,C,D,E

// unlike others in graph it contain cycles so to avoid it we can catagories it into visited and not visted
//  BFS uses a queue data structure for traversal.

// DFS is a technique visit all the node as far as possible and then use backtracking to go prev node and check if any node to visit and viit this processes countinously check evernode


      // A
      // /  \
    //   B   C
//     /      \
//    D       E

// a,b,d,c,e



// types of graph


// An unweighted graph is a graph where all edges have the same weight or no weight at all.
//  In this example, let's consider a simple unweighted graph:

// A -- B -- C
// |    |
// D -- E


// A weighted graph is a graph where each edge has an associated numerical value called weight. 

// A --2-- B
// | \   / |
// 4   1   5
// | /   \ |
// D --3-- C

// A cycle graph is a graph that forms a cycle, where the first and last vertices are connected

// A -- B
// |    |
// D -- C


// A cyclic graph is a graph that contains at least one cycle. The cycle can involve multiple vertices and edges.

// A -- B
// |  / |
// D -- C -- E

// A connected graph is a graph in which there is a path between every pair of vertices. 

// A -- B -- C
// |    |
// D -- E

// A graph is said to be a disconnected graph where there does not exist any path between at least one pair of vertices. In other words, we can say that if we start from any one of the vertices of the graph and try to move to the remaining present vertices of the graph and there exists not even a single path to move to that vertex, then it is the case of the disconnected graph. If any one of such a pair of vertices doesn't have a path between them, it is called a disconnected graph.

//   A -- B       C -- D





// spanning trree

// Spanning trre is consider as a subset of the graph  
// it should be connected graph and disconnected graph is not exist 
// so edges can be found by number of veretx n so n-1
// so we can construct a graph by removeing e-n+1 edges from the graph
// The weight of a spanning tree is determined by the sum of weight of all the edge involved in it.
// A minimum spanning tree (MST) is defined as a spanning tree that has the minimum weight among all the possible spanning trees.



// // application 
// Commonly used to represent social networks, such as networks of friends on social media.
// Graphs can be used to represent the topology of computer networks, such as the connections between routers and switches.
//  Graphs are used to represent the connections between different places in a transportation network, such as roads and airports.

  

// // adavantage
// Graph algorithms are often very efficient and can be used to solve complex problems quickly and effectively.
// Graphs can be used to represent complex data structures in a simple and intuitive way, making them easier to understand and analyze.
// They can be used to model and solve a wide range of problems, including pathfinding, data clustering, network analysis, and machine learning.

// disadvantage
// Graphs can be complex and difficult to understand, especially for people who are not familiar with graph theory or related algorithms.
// Graph algorithms can be difficult to design and implement correctly, and can be prone to bugs and errors.
// Graphs can be difficult to visualize and analyze, especially for very large or complex graphs, which can make it challenging to extract meaningful insights from the data. 
