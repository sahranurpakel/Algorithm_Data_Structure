class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (var i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }
  Bfs(s) {
    let visited = new Array(this.V);
    let result = [];
    for (var i = 0; i < this.V; i++) {
      visited[i] = false;
    }
    let queue = [];
    queue.push(s);
    visited[s] = true;
    while (queue.length !== 0) {
      console.log("QUEUE : ", queue);
      s = queue.shift();
      result.push(s);
      if (this.adj[s] !== undefined) {
        this.adj[s].forEach((element) => {
          if (!visited[element]) {
            queue.push(element);
            visited[element] = true;
          }
        });
      }
    }
    return result;
  }
  Dfs(v) {
    let visited = new Array(this.V);
    let result = [];
    for (var i = 0; i < this.V; i++) {
      visited[i] = false;
    }
    visited[v] = true;
    let stack = [];
    stack.push(v);
    while (stack.length !== 0) {
      v = stack.pop();
      result.push(v);
      if (this.adj[v] !== undefined) {
        this.adj[v].forEach((element) => {
          if (!visited[element]) {
            stack.push(element);
            visited[element] = true;
          }
        });
      }
    }
    console.log(" result :  ", result);
    return result;
  }
}
let g = new Graph(4);
g.addEdge(1, 0);
g.addEdge(2, 0);
g.addEdge(3, 1);
g.addEdge(3, 2);
console.log("BFS result : ", g.Bfs(0));
g.Dfs(0);
