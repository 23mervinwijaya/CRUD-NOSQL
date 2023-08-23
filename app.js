// const http = require ('http');
// const port = 3000;
// const fs = require('fs');


// // RenderFile
// const renderHTML=(req,res)=>{
//     const url = req.url;

//     const method = req.method;
//     console.log(`${method} ${url}`);
    
//     fs.readFile(`./${url}.html`,(err,data)=>{
//         if(err){
//             res.writeHead(404);
//             res.write(fs.readFileSync('./404.html'))
//         }
//         else{
//             res.write(data)
//         }
//         res.end();
//     })
// }


// // Create Server
// http
// .createServer(renderHTML)
// .listen(port,()=>{
//     console.log(`Server is listening to port ${port}`)
// })

const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile('views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile('views/about.html',{root:__dirname})
})

app.use('/',(req,res)=>{
    res.status = 404;
    // res.json({
    //     nama : 'Mervin',
    //     email : '23mervinwijaya@gmail.com'
    // })
    // res.send('<h1>Page Not Found</h1>')

    res.sendFile('views/404.html',{root:__dirname})
})

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
})
