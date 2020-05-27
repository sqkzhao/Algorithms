// FILO
class SLStack {
    constructor() {
        this.head = null
    }

    push(value) {
        var newNode = new StackNode(value);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode;
    }

    pop() {
        if (this.head == null) {
            return;
        }
        var runner = this.head;
        var prev = this.head;
        while (runner.next != null) {
            prev = runner;
            runner = runner.next;
        }
        prev.next = null;
        runner = null;
    }

    peek() {
        // RETURN THE VALUE OF TOP OF STACK
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        return runner.value;
    }
}

class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// var slstack = new SLStack();
// slstack.push(1);
// slstack.push(2);
// slstack.push(3);
// slstack.push(4);
// slstack.push(5);
// console.log(slstack);
// console.log(slstack.peek());
// slstack.pop();
// console.log(slstack.peek());