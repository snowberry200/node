const{readFile, writeFile} = require ('fs');

console.log('reading file 1 \n starting...')
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    //console.log(result)
    const first = result;
    
    console.log('reading file 2 \n starting...')

    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        const second = result;   

        console.log('writing file(s) \n starting...')

    writeFile ('./content/result-sync.txt', `here is the result : ${first}, ${second}`,(err,result)=>{
        if (err){
            console.log(err);
        }
        console.log('done')
    }) })
})

