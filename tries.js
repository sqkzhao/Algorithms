class TrieNode{
    constructor(){
        this.children = {
            // 'i':Node,
            // 'b':Node
        }
        this.isComplete = false;
    }
}
class TrieSet{
    constructor(){
        this.root = null;
    }

    insert(string){
        var wordLen = string.length;
        var runner = this.root;
        // ADDING A WORD WHEN THE TRIE IS EMPTY
        if(this.root == null){
            this.root = new TrieNode();
            var runner = this.root;
            for(let i = 0; i < wordLen; i++){
                runner.children[string[i]] = new TrieNode();
                runner = runner.children[string[i]];
            }
            runner.isEndOfWord = true;
            return;
        }
        // ADDING A WORD WHEN THE TRIE IS NOT EMPTY
        for(let i = 0; i < wordLen; i++){
            if(runner.children[string[i]] == null){
                runner.children[string[i]] = new TrieNode();
            }
            runner = runner.children[string[i]];
        }
        runner.isEndOfWord = true;
    };

    exists(string){
        var wordLen = string.length;
        var runner = this.root;
        if(this.root == null){
            console.log("TRIE IS EMPTY");
            return;
        }
        for(let i =0; i < wordLen; i++){
            if(runner.children[string[i]] == null){
                console.log("WORD DOES NOT EXIST");
                return;
            }
            runner = runner.children[string[i]];
        }
        if(runner.isEndOfWord == false ){
            console.log("THE CHARS ARE THERE BUT DOES NOT EXIST AS WORD");
            return false;
        }
        console.log("WORD EXISTS WITHIN TRIE");
        return true
    };

    autocomplete(string){
        var runner = this.root
        for(let i = 0; i < string.length; i++){
            runner = runner.children[string[i]];
        } 
        return autoHelper(string, runner);
    };
    autoHelper(string, node){
        var output = [];
        if(node.isComplete == true){
            output.push(string);
        }
        for(let key of node.children) {
            // YOU HAVE TO ADD THE ARRAY BEING RETURNED FROM THE
            // RECURSIVE CALL
            autoHelper(string+=key, node.children[key]);
        }
        return output;
    };
}

// var trie = new TrieSet();
// trie.insert('tomb');
// trie.insert('tomato');
// trie.insert('tomatoes');
// console.log(trie.autocomplete('tom'))