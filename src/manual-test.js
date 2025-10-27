const { BinarySearchTree } = require('./binary-search-tree.js');

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(1);
tree.add(25);

console.log(tree.has(1))
console.log(tree.has(5))

//console.log(tree.find(25))
console.log('Root:', tree.root());

console.log(tree.remove(15));

console.log('Root:', tree.root());

console.log(tree.min())
console.log(tree.max())

/*
this.rootNode = {
  data: 10,
  left: {
    data: 8,
    left: {
      data: 6,
      left: null,
      right: null
    },
    right: null
  },
  right: null
};

let current = this.rootNode; // current.data = 10
current = current.left;      // current.data = 8
current = current.left;      // current.data = 6
*/

/*

  if (!current.right) {
    // Тільки лівий нащадок — копіюємо його
    current.data = current.left.data;
    current.right = current.left.right;
    current.left = current.left.left;
    return current;
  }

 current.data = current.left.data;
- 🔧 Що робить: Копіює значення з лівого нащадка в поточний вузол.
- 🧠 Навіщо: Ми не видаляємо вузол фізично, а просто замінюємо його дані на дані нащадка.
- 📐 Архітектурно: Це дозволяє уникнути перепідключення батьківського вузла — ми просто "перевтілюємо" вузол.
       
  current.right = current.left.right;
- 🔧 Що робить: Перепідключає праву гілку поточного вузла до правої гілки його лівого нащадка.
- 🧠 Навіщо: Ми копіюємо структуру — якщо у лівого нащадка був правий нащадок, ми його зберігаємо.
- 📐 Архітектурно: Це зберігає піддерево, яке було під лівим нащадком
    
current.left = current.left.left;
- 🔧 Що робить: Перепідключає ліву гілку поточного вузла до лівої гілки його лівого нащадка.
- 🧠 Навіщо: Завершуємо копіювання структури — тепер current має ту ж структуру, що і його лівий нащадок.
- 📐 Архітектурно: Ми повністю замінили вузол на його лівого нащадка, включно з усіма підгілками.

return current;
- - 🔧 Що робить: Повертає оновлений вузол.
- 🧠 Навіщо: Завершує локальну операцію заміни.
- 📐 Архітектурно: Це дозволяє зберегти дерево без глобального перебудовування.

До:
    10
   /
  5
 / \
2   7

→ Видаляємо 10

Після:
    5
   / \
  2   7
  
  почат дерево 
      10
   /
  5
 / \
2   7
у вигляді обьекта
{
  data: 10,
  left: {
    data: 5,
    left: { data: 2, left: null, right: null },
    right: { data: 7, left: null, right: null }
  },
  right: null
}

 current.data = current.left.data; - current.data стає 5.
 {
  data: 5,
  left: { data: 5, ... }, // ще не оновлено
  right: null
}

 current.right = current.left.right; - current.left.right — це { data: 7 }
- тепер current.right = {data: 7}
обьект зараз виглядає так 
{
  data: 5,
  left: { data: 5, ... },
  right: { data: 7, left: null, right: null }
}
  
current.left = current.left.left;
- current.left.left — це { data: 2 }
- Тепер current.left = { data: 2 }
{
  data: 5,
  left: { data: 2, left: null, right: null },
  right: { data: 7, left: null, right: null }
}

*/



