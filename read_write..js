const {readFile,writeFile} = require('fs')

readFile('./content/test.txt','utf8',(err,res) => {

    if (err){

        console.log(err)
        return 
    }
    txt = res

    writeFile('./content/write.txt',txt,(err,res) => {

        if (err) {
            console.log(err)
            return

        }
        console.log(res)
    })
})