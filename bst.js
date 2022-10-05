#!/usr/bin/env node

// data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

class Node {
    constructor(data) {
      this.data = data
      this.left = null
      this.right = null
    }
}

class Tree { 
    constructor(array) {
      this.array = [...removeDuplicates(mergeSort(array))]
      this.root = null
    }

    buildTree() {

    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

const mergeSort = (array) => {
  if (array.length === 1) return array

  const newArray = []

  const leftIndex = mergeSort(array.slice(0, array.length / 2))
  const rightIndex = mergeSort(array.slice(array.length / 2))

  while (leftIndex.length && rightIndex.length) {
    if(leftIndex[0] < rightIndex[0]) {
      newArray.push(leftIndex.shift())
    } else {
      newArray.push(rightIndex.shift())
    }
  }

  return [...newArray, ...leftIndex, ...rightIndex]
}

const removeDuplicates = (array) => {
  return [...new Set(array)];
}
