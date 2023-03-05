class CQueue {
  constructor() {
    this.stack1 = []; // 存储元素的栈
    this.stack2 = []; // 辅助栈
  }

  appendTail(value) {
    this.stack1.push(value); // 直接将元素压入存储栈中
  }

  deleteHead() {
    if (this.stack2.length === 0) {
      // 如果辅助栈为空，需要将存储栈中的元素倒序压入辅助栈中
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      // 如果辅助栈仍然为空，说明队列中没有元素
      return -1;
    }

    return this.stack2.pop(); // 否则直接从辅助栈中弹出元素
  }
}

// 示例1
const queue1 = new CQueue();
console.log(queue1.appendTail(3)); // 输出 null
console.log(queue1.deleteHead()); // 输出 3
console.log(queue1.deleteHead()); // 输出 -1
console.log(queue1.deleteHead()); // 输出 -1

// 示例2
const queue2 = new CQueue();
console.log(queue2.deleteHead()); // 输出 -1
console.log(queue2.appendTail(5)); // 输出 null
console.log(queue2.appendTail(2)); // 输出 null
console.log(queue2.deleteHead()); // 输出 5
console.log(queue2.deleteHead()); // 输出 2
