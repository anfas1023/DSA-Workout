// Trie data structure is defined as a Tree based data structure that is used for storing some collection of strings and performing efficient search operations on them. 
// Trie follows some property that If two strings have a common prefix then they will have the same ancestor in the trie. A trie can be used to sort a collection of strings alphabetically as well as search whether a string with a given prefix is present in the trie or not.



// advanatge
// used in prefix based search
// o(l) time complaxity
// print words one by one

// aplication 
// spell checker
// dictaory
// prefixing searching algorithem

// disadvantage
// the main disadvantage is use lot of space
// hash table o(1) but it has o(1) comaplaxity


class Node{
    constructor(){
        this.childrens={}
        this.isendOfWords=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    
    insert(word){
        let current=this.root

        for(let i=0;i<word.length;i++){
            let char=word[i]

            if(!current.childrens[char]){
                current.childrens[char]=new Node()
            }
            current=current.childrens[char]
        }

        current.isendOfWords=true
    }

    search(word){
        let current=this.root

        for(let i=0;i<word.length;i++){
            let char=word[i]

            if(!current.childrens[char]){
               return  false
            }
     
            current=current.childrens[char]

        }

        return current.isendOfWords
    }

    preffix(word){
        let current=this.root

        for(let i=0;i<word.length;i++){
            let char=word[i]

            if(!current.childrens[char]){
                return false
            }
            current=current.childrens[char]
        }

        return true

    }
}


const trie=new Trie()

trie.insert("Anfas")
console.log(trie.search("Anfas"))
console.log(trie.preffix("anfd"));

 