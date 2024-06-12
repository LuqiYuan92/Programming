class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data=[]
  }

  //address that store the key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    //module %this.data.length keep the address within the size of hash table
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  }

  //if collision happens, get the key from the linked list array
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    console.log("current", currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log("key", currentBucket[i][0]);
          return currentBucket[i][0];
        }
      }
    }
    return undefined;
  }

  key() {
    if (!this.data.length) {
      return undefined;
    }
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      // // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          //the second [0] remove the outer array
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    console.log("all keys", keysArray);
    return keysArray;
  }
}

const myHashTable = new HashTable(5);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
//collision
myHashTable.set("apples", 9);
//stored in the same address as linked list
myHashTable.get("apples");
myHashTable.get("grapes");
myHashTable.key();
