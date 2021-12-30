console.log('Hello world');
console.log(__dirname);
console.log(__filename);

//  Common js Export import
const myModules = require('./myOwnModule');
const { A, B } = require('./myOwnModule'); 

console.log(myModules);
A();
B();

// ES6 Module Import And Export 
// default Export 
//import data from './myEcmaScriptModule.mjs'
//console.log(data.profession);

// Named Export 
//import { greetings, welcome} from './myEcmaScriptModule.mjs';
//console.log(greetings + " " + welcome );

// Built in Modules 

//============= 1. OS Module =============

// https://nodejs.org/api/os.html

const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());
console.log(os.version());

// ============ 2. Path Module ==========

//  https://nodejs.org/api/path.html

const path = require('path');

console.log(path.basename('/web development/Nodejs-Basic-Tutorial/index.js'));
console.log(path.dirname('/web development/Nodejs-Basic-Tutorial/index.js'));
console.log(path.extname('/web development/Nodejs-Basic-Tutorial/index.js'));
console.log(path.parse('/web development/Nodejs-Basic-Tutorial.index.js'));

//============= 3. FS Module =============

// https://nodejs.org/api/fs.html

const fs = require('fs');

// 1. Create
// fs.writeFileSync('test.txt', 'welcome in node');

// 2. Read
//const read = fs.readFileSync('test.txt');
//console.log(read.toString());

// 3. update
//fs.appendFileSync('test.txt', 'yup;how are you')

// 4. Destroy 
//fs.unlinkSync('test.txt')

// Using Asynchronous 

//  1. Create
// fs.writeFile('testing.txt','welcome in node fs module', (err)=>{
//     console.log('file created successfully');
//     console.log(err);
// })

// 2. Read 
// fs.readFile('testing.txt', 'UTF-8', (err, data)=>{
//     console.log(data);
// })

// 3. Update 
// fs.appendFile('testing.txt', 'you are great', (err) =>{
//     console.log('add more data');
// })

// 4. Destroy 
// fs.unlink('testing.txt', (err) => {
//     console.log('Deleted successfully');
// })

//============= 4. URL Module =============

//https://nodejs.org/api/url.html

const url = require('url');

const myURL = new URL('https://example.org:3000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href);
console.log(myURL.pathname);

//============= 5. EVENT Emitter Module =============

//https://nodejs.org/api/events.html

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Switch off The Motor!');
  setTimeout(() => {
    console.log('Switch off The Motor! It is A gentle Reminder');
  }, 3000);
});

myEmitter.emit('WaterFull');   //event tb tb run hoga jb event fire/ emit hoga 

//============= 6. Http Server =============

//https://nodejs.org/api/http.html

const http = require('http');

const port = process.env.PORT || 3000

const server = http.createServer((req, res)=>{
    // console.log(req);
    res.statusCode = 200; 
    res.setHeader('Content-type', 'text/html')
    res.end('Hello All')
})

server.listen(port, () => {
    console.log(`server is listening on port ${port} `);
})

//==========================================================================================

