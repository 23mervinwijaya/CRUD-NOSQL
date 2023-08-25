// Routing pakai HTTP Module

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


//Routing pakai Express.js 

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     res.sendFile('views/index.html',{root:__dirname})
// })
// app.get('/about',(req,res)=>{
//     res.sendFile('views/about.html',{root:__dirname})
// })
// app.get('/product/:id',(req,res)=>{
//     res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.type}`)
// })

// app.use('/',(req,res)=>{
//     res.status = 404;
//     // res.json({
//     //     nama : 'Mervin',
//     //     email : '23mervinwijaya@gmail.com'
//     // })
//     // res.send('<h1>Page Not Found</h1>')

//     res.sendFile('views/404.html',{root:__dirname})
// })

// app.listen(port,()=>{
//     console.log(`Server is listening to port ${port}`)
// })


// Routing pakai Express + EJS

const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan');

app.set('view engine','ejs');
app.use(expressLayouts);
app.use(morgan('dev'));
app.use(express.static('Public'));


app.get('/',(req,res)=>{
    const mahasiswa = [
        {
            nama : 'Mervin',
            kelas : 8,
            noTelp : 3213
        },
        {
            nama : 'Sandhika Galih',
            kelas : 9,
            noTelp : 1515
        }
    ]
    res.render('index',{
        layout : 'layouts/main-layouts',
        title:"Homepage",
        mahasiswa
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        layout : 'layouts/main-layouts',
        title:"About page",
    })
})
app.use('/',(req,res)=>{
    
    res.render('404',{
        layout : 'layouts/main-layouts',
        title:"404 : Page Not Found",
    })
})


app.listen(port,()=>{
    console.log(`app is listening to port ${port}`)
})