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
  topologicalSortUtil(v, visited, stack, recursionStack) {
    visited[v] = true;
    recursionStack[v] = true;
    for (let i = 0; i < this.adj[v].length; i++) {
      if (!visited[this.adj[v][i]]) {
        if (
          this.topologicalSortUtil(
            this.adj[v][i],
            visited,
            stack,
            recursionStack
          )
        ) {
          console.log("Cycle var ");
          return true;
        }
      } else if (recursionStack[this.adj[v][i]]) {
        console.log("BUrda cycle tespit eidldi");
        return true;
      }
    }
    recursionStack[v] = false;
    stack.push(v);
    return false;
  }
  topologicalSort() {
    let stack = [];
    let visited = new Array(this.V);
    let recursionStack = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      visited[i] = false;
      recursionStack[i] = false;
    }
    for (let j = 0; j < this.V; j++) {
      if (visited[j] === false) {
        if (this.topologicalSortUtil(j, visited, stack, recursionStack)) {
          console.log("Graph has a cycle ");
          return;
        }
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
g.addEdge(3, 3);
console.log("Following is a Topological sort of the given graph");

// Function Call
g.topologicalSort();
