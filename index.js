const express = require('express');
const db = require('./config/db.js');
const app = express();
const user = require('./routes/router.js')
app.use ('/app', user);

app.listen(3000,() => {
    console.log('Sever id running')
});