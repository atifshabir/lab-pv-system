const app = require("./backend/app");
const debug = require("debug")("node-angular");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require("http");

const https = require('https');
const fs = require('fs');
//const privateKey = fs.readFileSync('ssl_cert/from_linux/selfsigned.key', 'utf8');
//const certificate = fs.readFileSync('ssl_cert/from_linux/selfsigned.crt', 'utf8');

//const credentials = { key: privateKey, cert: certificate };

const EgcrInfo = require('./backend/models/egcr-info');
const Lab = require('./backend/models/lab');
const MachineInfo = require('./backend/models/machine-info');
const PvInfo = require('./backend/models/pv-info');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const firstInitialize = true; // set true to set the mongodb for first use after that make it false;
// !! It will reset the database and add default examples so be cautious !!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

/*
const onListening = () => {
    const addr = httpsServer.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    console.log("Listening on " + bind);
};
*/




mongoose.connect(mongoConnectionString, async function() {
    if (firstInitialize) {


        mongoose.connection.collections["counters"].drop(function(err) {
            console.log('counters dropped');
        });
        mongoose.connection.collections["egcrinfos"].drop(function(err) {
            console.log('egcrinfos dropped');
        });
        mongoose.connection.collections["labs"].drop(function(err) {
            console.log('labs dropped');
        });
        mongoose.connection.collections["machineinfos"].drop(function(err) {
            console.log('machineinfos dropped');
        });
        mongoose.connection.collections["pvinfos"].drop(function(err) {
            console.log('pvinfos dropped');
        });

        //EGCR2
        await new EgcrInfo({
            lat: 33.568383,
            lon: 73.138788
        }).save();

        //EGCR1
        await new EgcrInfo({
            lat: 33.575337,
            lon: 73.152188
        }).save();

        //Block-B, street 1
        await new PvInfo({
            lat: 33.569929,
            lon: 73.139711,
            lab_id: 0,
            lab_order: "CCR"
        }).save();

        //RoadNo3
        await new PvInfo({
            lat: 33.569089,
            lon: 73.146105,
            lab_id: 0,
            lab_order: "CCR"
        }).save();

        //RoadNo1
        await new PvInfo({
            lat: 33.571216,
            lon: 73.149624,
            lab_id: 0,
            lab_order: "CCR"
        }).save();

        //ALARMED HOUSE. Block-A, street 13
        await new Lab({
            lat: 33.572289,
            lon: 73.142414,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();


        //NOMAL HOUSE Block-C, street 39
        await new Lab({
            lat: 33.567909,
            lon: 73.141856,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();

        //ALARMED HOUSE. Block-D-Ext, street 1, lan-17A
        await new Lab({
            lat: 33.571788,
            lon: 73.153143,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();

        //NORMAL HOUSE Block-C, street 44
        await new Lab({
            lat: 33.566568,
            lon: 73.144753,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();

        //NORMAL HOUSE Block-B, street 2
        await new Lab({
            lat: 33.575310,
            lon: 73.148100,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();

        //NORMAL HOUSE Block-D, street 28
        await new Lab({
            lat: 33.570483,
            lon: 73.146813,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();

        await new MachineInfo({
            lab_id: 1,
            pr1: 1,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 2,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 3,
            pr1: 1,
            pr2: 0,
            dr1: 1,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 4,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 5,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 6,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        /*
        await new Lab({
          lat: 34.0507194,
          lon: -118.2688471,
          city: "Los Angeles",
          area: "1331",
          phase: "W",
          st: "7",
          s_st: " ",
          building: "12",
          floor: "1st"
      }).save();

        await new Lab({
            lat: 34.0507194,
            lon: -118.2688471,
            city: "Los Angeles",
            area: "1331",
            phase: "W",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "1st"
        }).save();

        await new Lab({
            lat: 34.0575725,
            lon: -118.2659292,
            city: "Los Angeles",
            area: "430",
            phase: "S-Grand",
            st: "7",
            s_st: " ",
            building: "142",
            floor: "2nd"
        }).save();

        await new Lab({
            lat: 34.0485144,
            lon: -118.2696499,
            city: "Los Angeles",
            area: "214",
            phase: "Albany",
            st: "7",
            s_st: " ",
            building: "10",
            floor: "Ground"
        }).save();

        await new Lab({
            lat: 34.0444611,
            lon: -118.2636114,
            city: "Los Angeles",
            area: "245",
            phase: "Fifth Area",
            st: "7",
            s_st: " ",
            building: "12",
            floor: "4th"
        }).save();

        //6548268, 34.0444611, -118.2636114, "Los Angeles", "245", "Fifth Area", "7", "", "12", "4th", 1, 0, 1, 1, 0

        await new MachineInfo({
            lab_id: 1,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 2,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 3,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new MachineInfo({
            lab_id: 4,
            pr1: 1,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0
        }).save();

        await new EgcrInfo({
            lat: 34.0367087,
            lon: -118.163447
        }).save();

        await new PvInfo({
            lat: 34.0494611,
            lon: -118.2636114,
            lab_id: 0,
            lab_order: "CCR"
        }).save();

        await new PvInfo({
            lat: 34.0359263,
            lon: -118.2479044,
            lab_id: 0,
            lab_order: "CCR"
        }).save();

        await new PvInfo({
            lat: 33.9903218,
            lon: -118.2764002,
            lab_id: 0,
            lab_order: "Self"
        }).save();
        */
    }

});

mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));

mongoose.connection.once('open', function() {
    console.info('Successfully connected to the database');
});


const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/*
const httpsServer = https.createServer(credentials, app);
httpsServer.on("error", onError);
httpsServer.on("listening", onListening);
httpsServer.listen(18443);
*/


const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);