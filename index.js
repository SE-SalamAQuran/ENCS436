const express = require('express');

const bodyparser = require('body-parser');
const expressIP = require('express-ip');
const app = express();

const ngrok = require('ngrok');


const port = process.env.PORT  || 7000;
app.use(bodyparser.urlencoded({
    extended: true
}));



module.exports = function GET_IP_PORT(req,res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var port = req.headers['x-forwarded-for'] || req.connection.remotePort;

    sessionStorage.setItem("ip",ip);
    sessionStorage.setItem("port",port);
    return ip,port;
}

app.get('/1',(req,res)=>{
    res.set('Content-type', 'text/html');
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var port = req.headers['x-forwarded-for'] || req.connection.remotePort;
    // res.sendFile("C:/Users/user/Desktop/ENCS436/views/1.html");
    res.write('<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ENCS436 Web Server</title></head>');
    res.write('<style> span{color: green;}</style>');
    res.write('<body><div><h1>Salam Adel Quran <strong>1161667</strong></h1><h1>Mohammad Qutna <strong>1153263</strong></h1><h2>Welcome to our course <span> Computer Networks </span></h2>');

    res.write( `<p>IP Address is => ${ip}</p>`+`<p>Port # is => ${port}</p></div>`);
    res.write('</body></html>')
 });



app.get('/2',(req,res)=>{
    res.set('Content-type', 'text/html');
    res.sendFile("C:/Users/user/Desktop/ENCS436/views/2.html");
});

app.get('/3',(req,res)=>{
    res.set('Content-type', 'image/jpeg');
    res.sendFile("C:/Users/user/Desktop/ENCS436/views/images/image.jpg");
    
});


app.listen(port, ()=>{
console.log(`Server Listening on port: ${port}`);
});

