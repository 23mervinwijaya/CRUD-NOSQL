
const {mkdirSync,existsSync,writeFileSync,readFileSync} = require('fs');

const dataPath = './data';
const filePath = './data/account.json';

if(!existsSync(dataPath)){
    mkdirSync(dataPath);   
}
if(!existsSync(filePath)){
    writeFileSync(filePath,'[]','utf-8')
}


// Membaca contact.json
const loadContact = () =>{
    const buffer = readFileSync('data/account.json','utf-8');
    const account = JSON.parse(buffer);
    return account;
}

// Membaca details contact.json
const loadDetail=(nama)=>{
    const contacts = loadContact();
    const contact = contacts.find(
        (contact)=>contact.nama.toLowerCase() === nama.toLowerCase());
    return contact;
};
module.exports = {loadContact,loadDetail};































// const fs = require('fs');
// const dirPath = '../data';
// const filePath = '../data/contact.json';

// directory & File exist checking
// if(!fs.existsSync(dirPath)){
//     fs.mkdirSync(dirPath);
// }
// if(!fs.existsSync(filePath)){
//     fs.writeFileSync(filePath,'[]','utf-8')
// }

// // get data from form.html
// const form = document.getElementById('myForm');

// console.log(form);

// const insertData = (nama,umur,email) =>{
//     const fileBuffer = fs.readFileSync(filePath,'utf-8');
//     const contact = JSON.parse(fileBuffer);
//     const newData = {
//         "nama" : nama,
//         "umur" : umur,
//         "email" : email
//     };
//     // Push data to contact
//     contact.push(newData);

//     // convert to json format
//     fs.writeFileSync(filePath,JSON.stringify(contact,null,2),'utf-8');
//     console.log(fs.readFileSync(filePath,'utf-8'))
// };



















// const formHandler = (event)=>{
//     event.preventDefault();
    
//     const form = document.getElementById('formPendaftaran');
//     const dataForm = new FormData(form);
//     const formObject = {};

//     dataForm.forEach((value,key)=>{
//         formObject[key] = value;
//         const buffer = readFileSync(filePath,'utf-8');
//         const account = JSON.parse(buffer);
//         account.push(formObject);
//     })


//     const output = document.getElementById('dataPendaftar');
//     output.innerHTML = `${JSON.stringify(account)}`

//     form.addEventListener('submit',formHandler)
// }

