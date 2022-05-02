const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  root() {

    return (this.data == null) ?
      null :
      this;
    // remove line with error and write your code here
  }

  add(data) {
    if (this.data == null)
      this.data = data;
    else if (data > this.data) {
      if (this.right == null)
        this.right = new BinarySearchTree(data);
      else
        this.right.add(data);
    }
    else if (data < this.data) {
      if (this.left == null)
        this.left = new BinarySearchTree(data);
      else
        this.left.add(data);
    }

    // remove line with error and write your code here
  }

  has(data) {
    if (this.data == data)
      return true;
    else if (data > this.data) {
      if (this.right == null)
        return false
      else
        return this.right.has(data);
    }
    else if (data < this.data) {
      if (this.left == null)
        return false
      else
        return this.left.has(data);
    }
    // remove line with error and write your code here
  }

  find(data) {
    if (this.data == data)
      return this;
    else if (data > this.data) {
      if (this.right == null)
        return null
      else
        return this.right.find(data);
    }
    else if (data < this.data) {
      if (this.left == null)
        return null
      else
        return this.left.find(data);
    }
    // remove line with error and write your code here
  }

  remove(data) {
    if (data > this.data) {
      if (this.right.data == data)
        this.right = null;
      else
        this.right.remove(data);
    }
    else if (data < this.data) {
      if (this.left.data == data)
        this.left = null;
      else
        this.left.remove(data);
    }
    // remove line with error and write your code here
  }

  min() {
    return (this.left == null) ?
      this.data :
      this.left.min();

    // remove line with error and write your code here
  }

  max() {
    return (this.right == null) ?
      this.data :
      this.right.max();
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};