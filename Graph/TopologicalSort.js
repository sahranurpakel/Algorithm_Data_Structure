class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  addEdge(v, w) {
    this.adj[v].push(w);
  }
  topologicalSortUtil(v, visited, stack) {
    visited[v] = true;

    for (let i = 0; i < this.adj[v].length; i++) {
      if (!visited[this.adj[v][i]]) {
        this.topologicalSortUtil(this.adj[v][i], visited, stack);
      }
    }
    stack.push(v);
  }
  topologicalSort() {
    let stack = [];
    let visited = new Array(this.V);

    for (let i = 0; i < this.V; i++) {
      visited[i] = false;
    }
    for (let j = 0; j < this.V; j++) {
      if (visited[j] === false) {
        this.topologicalSortUtil(j, visited, stack);
      }
    }

    while (stack.length !== 0) {
      console.log(" _________ : ", stack.pop());
    }
  }
}
var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(2, 0);
g.addEdge(3, 1);
g.addEdge(3, 2);
// g.addEdge(3, 3);
console.log("Following is a Topological sort of the given graph");

// Function Call
g.topologicalSort();
