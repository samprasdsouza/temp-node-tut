const {readFileSync, writeFileSync, readFile, writeFile } = require('fs') 
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    // console.log(result);
    const fir = result;

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
        console.log(err)
        return
        }
        const second = result
        writeFile('./content/result-sync.txt',
         `Here is the result : ${fir},${second}`,
         (err,result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log('done with the task');
            // console.log(result)
         })
    })
})
console.log('starting with next task');