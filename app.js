const express = require('express')
const path = require('path')

const app = express()

// setup static
app.use(express.static('./content'))

app.get('/',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'./content/index.html')) 

})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000...')
    
 })
 
    