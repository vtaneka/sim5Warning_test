var express = require("express");
const http = require('http');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const DataRepository = require('./DatabaseRepository');

var app = express();


app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
var cors = require('cors');
app.use(cors({origin: "*"}));



try {
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
}
catch (e) {
    console.log("failed to establish mlab connection");
}




app.post("/postDepracation", DataRepository.PostData.bind(DataRepository));

const db = mongoose.connection;



db.on("connected", function () {
    console.log("mongoose connection established");
});

db.on("disconnected", function (data, err) {
    console.log("mongoose connection terminated");
})


const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
let port = process.env.PORT || 8088;
server.listen(port, () => console.log(`API running on localhost:${port}`));