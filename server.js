const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
const fs = require('fs');
const port = 3000;

app.use(bodyParser.json());

app.get('/', (request, response)=>{
    response.json({info: 'server is started and reqady to use'})
})

https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
    passphrase: 'pmod11258'}, app).listen(port);
