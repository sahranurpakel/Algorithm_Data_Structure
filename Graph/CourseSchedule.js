class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  addEdge(arr) {
    this.adj[arr[0]].push(arr[1]);
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
          return false;
        }
      }
    }
    return true;
  }
}
var canFinish = function (numCourses, prerequisites) {
  let g = new Graph(numCourses);
  for (let i = 0; i < prerequisites.length; i++) {
    g.addEdge(prerequisites[i]);
  }
  console.log(g.topologicalSort());
  return g.topologicalSort();
};
