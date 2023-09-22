const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const { loadContact,loadDetail,addContact} = require('./utils/contact');
const morgan = require('morgan');


app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('Public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded())

app.get('/',(req,res)=>{

    res.render('index',{
        layout : 'layouts/main-layouts',
        title:"Homepage",
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        layout : 'layouts/main-layouts',
        title:"About page",
    })
})
app.get('/contact',(req,res)=>{
    const contacts = loadContact();
    res.render('contact',{
        layout : 'layouts/main-layouts',
        title:"Contact page",
        contacts
    })
})

app.get('/contact/add',(req,res)=>{
    res.render('submitData',{
        layout : 'layouts/main-layouts',
        title:"Submit Data page",
    })
})

app.post('/contact',(req,res)=>{
    addContact(req.body);
    res.redirect('/contact')
})

app.get('/contact/:nama',(req,res)=>{
    const contact = loadDetail(req.params.nama);
    res.render('details',{
        layout : 'layouts/main-layouts',
        title:"Contact Details page",
        contact
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