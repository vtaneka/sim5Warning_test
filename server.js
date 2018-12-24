var express = require("express");
const http = require('http');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const DataRepository = require('./DatabaseRepository');


app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));




try {
    mongoose.connect("mongodb://vtaneka:compro1234@ds243084.mlab.com:43084/sim5_test_db");
}
catch (e) {
    console.log("failed to establish mlab connection");
}




app.post("/postDepraction",DataRepository.PostData);



const db = mongoose.connection;

db.on("connected", function () {
    console.log("mongoose connection established");
});

db.on("disconnected", function () {
    console.log("mongoose connection terminated");
})


const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
let port = process.env.PORT || 8088;
server.listen(port, () => console.log(`API running on localhost:${port}`));