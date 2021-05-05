const app = require("./backend/app");
const debug = require("debug")("node-angular");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require("http");
const fs = require('fs');

const EgcrInfo = require('./backend/models/egcr-info');
const Lab = require('./backend/models/lab');
const MachineInfo = require('./backend/models/machine-info');
const PvInfo = require('./backend/models/pv-info');

const mongoConnectionString = 'mongodb://127.0.0.1:27017/lab-pv-system';

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    console.log("Listening on " + bind);
};


mongoose.connect(mongoConnectionString, async function() {

});

mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));

mongoose.connection.once('open', function() {
    console.info('Successfully connected to the database');
});


const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);