const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log(`Whoa!! executed`);
})

customEmitter.emit('response')