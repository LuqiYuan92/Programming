const everyone = ["hi", "nemo"];

const large = new Array(10).fill("nemo");

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("find nemo");
    }
  }
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
}

const findNemo2 = (array) => {
  array.forEach((element) => {
    if (element === "nemo") {
      console.log("find nemo2");
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("find nemo3");
    }
  }
};

function nFacRuntimeFunc(n) {
  for (let i = 0; i < n; i++) {
    nFacRuntimeFunc(n - 1);
    console.log(i);
  }
}

nFacRuntimeFunc(3);
// findNemo(everyone);
// findNemo(large);
// findNemo2(everyone);
// findNemo3(everyone);
