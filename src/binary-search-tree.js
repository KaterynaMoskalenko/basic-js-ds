const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');
 
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    // Remove line below and write your code here
    return this.rootNode;
  }

  // the method is implemented using an infinite while loop
  // add(data) {
  //   // Remove line below and write your code here
  //  const newNode = new Node(data);
  //  console.log(`Добавляем: ${data}`);


  //   if (this.rootNode === null) {
  //     this.rootNode = newNode;// связываешь rootNode с этим узлом
  //     console.log(`Корень был пуст. Назначен: ${data}`);
  //     return;
  //   }

  //   let current = this.rootNode;
  //   while (true) {
  //      console.log(`Сравниваем с узлом: ${current.data}`);

  //     if (data < current.data) {
  //       if (!current.left) {
  //         current.left = newNode;
  //         console.log(`Вставляем ${data} слева от ${current.data}`);
  //         break;
  //       }
  //       current = current.left;
  //     } else if (data > current.data) {
  //       console.log(`${data} > ${current.data} → идём вправо`);
  //       if (!current.right) {
  //         current.right = newNode;
  //         console.log(`Вставляем ${data} справа от ${current.data}`);
  //         break;
  //       }
  //       current = current.right;
  //     } else {
  //       // значение уже есть — не добавляем дубликаты
  //       console.log(`${data} уже существует в дереве. Не вставляем.`);
  //       break;
  //     }
  //   }
  // }
  
  // versal data search by value
  
  _findData(current, data, returnType = 'node') {
  if (!current) return returnType === 'boolean' ? false : null;
  if (current.data === data) {
    return returnType === 'boolean' ? true : current;
  }

  return data < current.data
    ? this._findData(current.left, data, returnType)
    : this._findData(current.right, data, returnType);
}
    
  _insert(current, data) {
      if (!current) return new Node(data);

      if (data < current.data) {
        current.left = this._insert(current.left, data);
      } else {
        current.right = this._insert(current.right, data);
      }
      return current;
    }   
  
    _findMin(node) {
      while (node.left) node = node.left;
      return node;
    }
    
  //the method is implemented using recursion
  add(data) {
     // if data has already exsisted
    if (this._findData(this.rootNode, data)) {
      console.log(`Data ${data} exsist.`);
      return;
    }
    // if root is empty - create
      this.rootNode = this._insert(this.rootNode, data);
  }
    
  find(data) {
    // Remove line below and write your code here
    //return Object or null
    return this._findData(this.rootNode, data, 'node'); 
  }

  has(data) {
    // Remove line below and write your code here
    //return Boolean
    return this._findData(this.rootNode, data, 'boolean');  
  }

  remove(data) {
    // Remove line below and write your code here
   
    const current =  this._findData(this.rootNode, data, 'node'); 
            
    // current finded , check inherits
    if (!current.left && !current.right) {
      current.data = null;
      return null;
    }  
    
    if (!current.left) {
      current.data = current.right.data;
      current.left = current.right.left;
      current.right = current.right.right;
      return current;
    }
        
    if (!current.right) {
      // Тільки лівий нащадок — копіюємо його
      current.data = current.left.data;
      current.right = current.left.right;
      current.left = current.left.left;
      return current;
    }
      
  // 2 inherits/successor
  const successor = this._findMin(current.right);
  current.data = successor.data;
  
  // remove successor localy
  let parent = current;
  let node = current.right;
    
  while (node.left) {
    parent = node;
    node = node.left;
  }

 // if successor — direct right descendant
    if (parent === current) {
    parent.right = node.right;
  } else {
    parent.left = node.right;
  }
  return current;    
}  

  min() {
    // Remove line below and write your code here
    if (!this.rootNode) return null;    
    const minData = this._findMin(this.rootNode);
    return minData ? minData.data : null;    
  }

  max() {
    // Remove line below and write your code here
    if (!this.rootNode) return null;
    
    let currentMax = this.rootNode;
    while (currentMax.right) {
      currentMax = currentMax.right;
    }
    return currentMax.data;         
  }
}

// testing Node
  const testNode = new Node(42);
  console.log(testNode);


module.exports = {
  BinarySearchTree
};

