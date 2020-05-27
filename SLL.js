class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SLList {
    constructor() {
        this.head = null;
    }

    arrayToList(arr) {
        this.head = new SLNode(arr[0]);
        var runner = this.head;
        for (let i = 1; i < arr.length; i++) {
            runner.next = new SLNode(arr[i]);
            runner = runner.next;
        }
    }

    insert(num) {
        // CREATE A NEW NODE AT THE END OF THE LIST, USING THE NUM
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new SLNode(num);
    }

    insertAscending(num) {
        // INSERT A NEW NODE WHILE KEEPING THE LIST SORTED
        // ASSUMED THE LIST IS ALREADY SORTED
        // 1,2,3,5,6  => insertAscending(4) => 1,2,3,4,5,6
        var runner = this.head;
        while (runner.next.value < num) {
            runner = runner.next;
        }
        var temp = runner.next;
        runner.next = new SLNode(num);
        runner.next.next = temp;
    }

    contains(num) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value == num) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    containsRecursive(node, num) {
        if (node != null){
            if (node.value == num) {
                return true;
            }
        } else {
            return false;
        }
        return this.containsRecursive(node.next, num);
    }

    moveMinToFront() {
        var min = this.head;
        var runner = this.head;
        var trail = null;
        while (runner.next !== null) {
            if (min.value > runner.next.value){
                min = runner.next;
                trail = runner;
            }
            runner = runner.next;
        }
        if (min == this.head) {
            return;
        } else {
            trail.next = min.next;
            min.next = this.head;
            this.head = min;
        }
    }

    removeVal(num) {
        var runner = this.head;
        if (this.head.value == num){
            this.head = this.head.next;
            return;
        } else {
            while (runner != null){
                if (runner.next.value == num){
                    runner.next = runner.next.next;
                    return;
                }
                runner = runner.next;
            }
        }
    }

    printList() {
        var runner = this.head;
        while (runner.next != null) {
            console.log(runner.value);
            runner = runner.next;
        }
        console.log(runner.value);
    }

    reverseList()  {
        var current = this.head;
        var next = null;
        var prev = null;
        while  (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}


