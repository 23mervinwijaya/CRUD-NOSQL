const fs = require('fs');
const dirPath = '../data';
const filePath = '../data/contact.json';

if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,'[]','utf-8')
}

const loadData = () =>{
    const fileBuffer = fs.readFileSync(filePath,'utf-8');
    const contact = JSON.parse(fileBuffer);
    return contact;
}

const insertFIle = (nama,umur,email) =>{
    fs.writeFileSync()
}