const {readFile,writeFile} = require('fs');
console.log("stat")

readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
    return ;
}
const first = result;
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        return ;
    } 
    const second=result;
    writeFile('./content/result-async.txt',
    `Here is the result ${first},${second}`,
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }  
        console.log("donw with this task")   ;   
    }
   
    )
    
})

})

console.log("starting next task")

// stat
// starting next task
// donw with this task