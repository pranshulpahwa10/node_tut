const {readFile, writeFile} = require('fs');
//gain proper understanding of async tasks
console.log('start');

readFile('./content/first.txt','utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('read1 completed');
    
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('read2 completed');
        
        const second = result;

        writeFile('./content/result-async.txt', 
            `Here is the result async: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                // console.log(result);
                console.log('write completed');
                
            }
                
        )
    })
        
})

console.log('outer read started');

readFile('./content/second.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('executed');
    
})