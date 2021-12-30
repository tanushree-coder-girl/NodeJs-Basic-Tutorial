const http = require('http');
const fs = require('fs');
const path = require('path');

const  host= '127.0.0.1';
const port = '3000';

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type', 'text/html')

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync(path.join(__dirname, 'views/homePage.html'));
        res.end(data.toString());
    }

    else if (req.url == '/about'){
        res.statusCode = 200;
        const data = fs.readFileSync(path.join(__dirname, 'views/aboutPage.html'));
        res.end(data.toString());
    }

    else if (req.url == '/contact'){
        res.statusCode = 200;
        const data = fs.readFileSync(path.join(__dirname, 'views/contactPage.html'));
        res.end(data.toString());    }

    else if (req.url == '/timepass'){
        res.statusCode = 200;
        res.end(' Timepass Page !! ')
    }

    else if (req.url == '/json'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ name: 'tanu', profession : 'Developer', interest : 'Coding' }));
    }
    else {
        res.statusCode = 404;
        res.end('<h1>page not found</h1>')
    }

})

server.listen(port, host, ()=>{
    console.log(`server is running on port ${host} ${port}`);
})
