class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.nodeList = {};
  }

  addVertex(node) {
    this.nodeList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    //undirected graph
    if (!this.nodeList[node1].includes(node2)) {
      this.nodeList[node1].push(node2);
      //   console.log("node1", node1, "-->", this.nodeList[node1]);
    }

    if (!this.nodeList[node2].includes(node1)) {
      this.nodeList[node2].push(node1);
      //   console.log("node2", node2, "-->", this.nodeList[node2]);
    }
  }

  showConnections() {
    //return an array of key
    const allNodes = Object.keys(this.nodeList);

    //for(let .. of ..)shows item in array
    //for(let .. in ..)shows index in array

    for (let node of allNodes) {
      let nodeConnections = this.nodeList[node];

      let connectinons = "";

      for (let vertex of nodeConnections) {
        connectinons += vertex + "  ";
      }
      console.log(node + "-->" + connectinons);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
