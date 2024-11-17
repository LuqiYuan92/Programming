// * @param {number} numCourses
// * @param {number[][]} prerequisites
// * @return {boolean}
// */
var canFinish = function (numCourses, prerequisites) {
  //array that store the indegree(number of incoming edges) of each course
  let indegree = Array(numCourses).fill(0);

  //create adjacency list to store the directed edges(index as prereq,value as the next course)
  let adjList = Array.from({ length: numCourses }, () => []);
  for (let edge of prerequisites) {
    adjList[edge[1]].push(edge[0]);
    indegree[edge[0]]++;
  }
  //queue to store the courses that have no prereq(indegree=0, no incoming edges)
  let queue = [];
  let visted = 0;
  for (let index = 0; index < numCourses; index++) {
    if (indegree[index] === 0) {
      queue.push(index);
    }
  }
  while (queue.length) {
    let currentCourse = queue.shift();
    visted++;
    //delete the edge by decrementing the indegree of the course that has current course as prereq
    adjList[currentCourse].forEach((nextCourse) => {
      indegree[nextCourse]--;
      if (indegree[nextCourse] == 0) {
        queue.push(nextCourse);
      }
    });
  }
  return visted === numCourses;
};
