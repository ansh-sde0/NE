// Events

const EventEmitter = require('events')
const {createReadStream} = require('fs')

const customEmitter = new EventEmitter()


customEmitter.on('response',(st)=> {
    console.log('Data recieved')
    console.log(st)
})

//customEmitter.emit('response','i am from emit lol')

// Streams
 
const stream = createReadStream('./content/test.txt','utf-8')

// http streams

let http = require('http')
let fs = require('fs')

http
    .createServer((req,res)=>{

        const text = fs.readFileSync('./content/test.txt','utf-8')
        res.end(text)
    })
    .listen(5000)
