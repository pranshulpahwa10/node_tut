const {writeFileSync} = require('fs')

for(let i=0; i<10000; i++){
    writeFileSync('./content/bigtext.txt', `hello bruhh ${i}\n`, {flag:'a'})
}