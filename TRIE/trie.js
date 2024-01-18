class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}


class Trie{
    constructor(){
        this.root=new Node()
    }
    
    insert(word){
        let currentNode= this.root
//    app
        for(let i=0;i<word.length;i++){
            let char=word[i]
           
            if(!currentNode.children[char]){
                currentNode.children[char]= new Node() 
               
            }
            currentNode=currentNode.children[char]
            
            
        }  
        currentNode.isEndOfWord=true   
    }
   
    search(word){
   let currentNode=this.root
 
   for(let i=0;i<word.length;i++){
    let char=word[i]

    if(!currentNode.children[char]){
        return false
    }

    currentNode=currentNode.children[char]
   }

  return currentNode.isEndOfWord
    }

}


// Ananthor way to insert
// insert(word) {
//     let node = this.root;
//     for (const char of word) {
//         if (!node.children.has(char)) {
//             node.children.set(char, new TrieNode());
//         }
//         node = node.children.get(char);
//     }
//     node.isEndOfWord = true;
// }

// search(word) {
//     let node = this.root;
//     for (const char of word) {
//         if (!node.children.has(char)) {
//             return false;
//         }
//         node = node.children.get(char);
//     }
//     return node.isEndOfWord;
// }

const trie=new Trie()

trie.insert("apple")
console.log(trie.search("applerr"));



