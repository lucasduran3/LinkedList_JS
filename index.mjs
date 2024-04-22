import {LinkedList} from "./LinkedList.mjs";

const linkedList = LinkedList();

linkedList.prepend("value 1");
linkedList.append("value 2");
linkedList.append("value 3");
linkedList.insertAt(1, "value 4");
console.log(`Initial elements: ${linkedList.toString()}`);

console.log(`Size: ${linkedList.size()}`);
console.log(`Head: ${linkedList.head().value}`);
console.log(`Last element: ${linkedList.tail().value}`);
console.log(`Element at specified index: ${linkedList.at(1)}`);

linkedList.pop();
console.log(`Last element removed: ${linkedList.toString()}`);

console.log(`Does the list contain the value 1?: ${linkedList.contains("value 1")}`);

console.log(`Index of value 2: ${linkedList.find("value 2")}`);