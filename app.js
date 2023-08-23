const http = require ('http');
const port = 3000;
const fs = require('fs');


// RenderFile
const renderHTML=(req,res)=>{
    const url = req.url;

    const method = req.method;
    console.log(`${method} ${url}`);
    
    fs.readFile(`./${url}.html`,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write(fs.readFileSync('./404.html'))
        }
        else{
            res.write(data)
        }
        res.end();
    })
}


// Create Server
http
.createServer(renderHTML)
.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
})