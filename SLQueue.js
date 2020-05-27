class SLQ{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enQueue = (value) => {
        if(this.head == null){
            this.head = new SLQnode(value);
            this.tail = this.head;
            return;
        }
        var runner = this.tail;
        runner.next = new SLQnode(value);
        this.tail = runner.next;
    }
    
    deQueue = () => {
        var runner = this.head;
        this.head = runner.next;
        runner = null;
    }
}

class SLQnode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


