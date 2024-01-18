class hashtable{
    constructor(size){           
        this.table=new Array(size) 
        this.size=size  
    }    

    hash(key){        
    let total=0    
    for(let i=0;i<key.length;i++){     
       total+=key.charCodeAt(i)   
    }

    return total % this.size  

}

set(key,value){  
let index=this.hash(key)  
const bucket=this.table[index]  

if(!bucket){
    this.table[index]=[[key,value]]
}else{
     const samekeyitem=bucket.find(item => item[0]===key)
     if(samekeyitem){
        samekeyitem[1]=value
    }else{
        bucket.push([key,value])
    }

}
}   

get(key){
    const index=this.hash(key)

    const bucket=this.table[index]
    if(bucket){
      const samekeyitem=bucket.find(item=> item[0]===key) 
      if(samekeyitem){
        return samekeyitem[1]
      } 
    }

    return undefined
}

remove(key){
  const index=this.hash(key)
  const bucket=this.table[index]
  if(bucket){
    const samekeyitem=bucket.find(item => item[0]===key)
    if(samekeyitem){
        bucket.splice(samekeyitem,1)
    }
  }
}


dispaly(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i]);
        }
    }
}
}

const table=new hashtable(20)
table.set("name","anfas")
table.set("age",22)
console.log(table.dispaly());
console.log(table.get("age"));
table.remove("name")
table.dispaly()

