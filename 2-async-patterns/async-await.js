const {readFile, writeFile} = require('fs');
// node native method
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try{
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/result-mind-grenade.txt', `This is some crazy shit ${first}, ${second}`)
        console.log(first, second);
    }
    catch(err){
        console.log(err);
    }
}
start()


// promise
// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf-8', (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result)=>{console.log(result);})
// .catch((err)=>{console.log(err);
// })

// async await

// const start = async()=>{
//     try{
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// start()