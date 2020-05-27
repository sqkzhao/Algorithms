// TEST CASES
// [1,2,3,4] => enqueue(8) => [8,1,2,3,4,5]
// [1,2,3,4,5] => dequeue() => [1,2,3,4]
// stack1 = [1, 2, 3, 4, 5]
// stack2 = [5, 4, 3, 2, 1, 8]
// stack1 = [8, 1, 2, 3, 4, 5]
// FIFO

class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(val) {
        // USING THE TWO ARRAYS(STACKS) IMPLEMENT THE ENQUEUE METHOD
        // THIS OPERATION WILL BE COSTLY
        // ONLY USE PUSH AND POP METHODS ATTACHED TO THE ARRAY
        var length = this.stack1.length;
        for (var i = 0; i < length; i++) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.push(val);

        // WE WANT TO MOVE THE NUMBERS BACK TO STACK 1
        var length2 = this.stack2.length;
        for (var j = 0; j < length2; j++){
            this.stack1.push(this.stack2.pop());
        }
    }
    dequeue() {
        // REMOVING FROM THE TOP
        this.stack1.pop();
    }
}