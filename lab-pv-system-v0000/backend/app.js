const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
var https = require('follow-redirects').https;
var fs = require('fs');
const cors = require('cors');
const path = require('path');

var { google } = require("googleapis");
var MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
var SCOPES = [MESSAGING_SCOPE];

const EgcrInfo = require('./models/egcr-info');
const Lab = require('./models/lab');
const MachineInfo = require('./models/machine-info');
const PvInfo = require('./models/pv-info');

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(express.static(path.join(__dirname, '../dist/lab-pv-system')));
//app.use(express.static('../dist/lab-pv-system');

app.get('/pc-frontend', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '../dist/lab-pv-system/index.html'));
});

app.get('/mobile-frontend', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '../dist/lab-pv-system/index.html'));
});

app.get('/lca-frontend', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '../dist/lab-pv-system/index.html'));
});

app.post("/api/send-notification", (req, res, next) => {

    var title = req.body.title;
    var body = req.body.body;

    new Promise(function(resolve, reject) {
        var key = require("./lab-pv-system.json");
        var jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function(err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    }).then(token => {
        // start of sending notification

        var options = {
            'method': 'POST',
            'hostname': 'fcm.googleapis.com',
            'path': '/v1/projects/lab-pv-system/messages:send?',
            'headers': {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            'maxRedirects': 20
        };

        var req = https.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function(chunk) {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function(error) {
                console.error(error);
            });
        });

        var postData = JSON.stringify({ "message": { "topic": "news", "notification": { "title": title, "body": body }, "webpush": { "headers": { "Urgency": "high" }, "notification": { "body": title, "requireInteraction": "true", "badge": "/badge-icon.png" } } } });

        req.write(postData);

        req.end();
        // end of sending notification
        res.status(200).json({ token });
    });
});

// end points for add data
app.post("/api/egcr-info/add", (req, res, next) => {
    const lat = req.body.lat;
    const lon = req.body.lon;

    new EgcrInfo({
        lat: lat,
        lon: lon
    }).save();

    res.status(201).json({
        message: 'EGCR Info added successfully'
    });
});

app.post("/api/lab/add", (req, res, next) => {

    const reqFields = Object.keys(req.body);

    const mustFields = ["lat", "lon", "city", "area", "phase", "st", "s_st", "building", "floor"];

    const isValidOperation = mustFields.every((field) =>
        reqFields.includes(field)
    );

    console.log(reqFields);
    console.log("fields validation is " + isValidOperation);

    if(!isValidOperation) {
        console.log("Request fields are not complete");
        return res.status(400).json({
            status: 400,
            message: "Incomplete fields"
        });
    }

    try {
        new Lab({
            lat: req.body.lat,
            lon: req.body.lon,
            city: req.body.city,
            area: req.body.area,
            phase: req.body.phase,
            st: req.body.st,
            s_st: req.body.s_st,
            building: req.body.building,
            floor: req.body.floor
        }).save();
    
        res.status(201).json({
            message: 'Lab added successfully'
        });
    } catch(err) {
        console.log("Error during Lab.save(): " + err.message);
        return res.status(400).json({
            status: 400,
            message: err.message
        });
    }
});

app.post("/api/lab-info/update", (req, res, next) => {

    console.log("api called [/api/lab-info/update]");

    //console.log("update called");
    const labItem = {
        "lab_id":req.body.lab_id, 
        "lat": req.body.lat,
        "lon": req.body.lon,
        "city": req.body.city,
        "area": req.body.area,
        "phase": req.body.phase,
        "st": req.body.st,
        "s_st": req.body.s_st,
        "building": req.body.building,
        "floor": req.body.floor
    };

    console.log("New Lab data in api is ");
    console.log(labItem);

    Lab.findOneAndUpdate({ "lab_id": req.body.lab_id }, labItem, { new: true })
        .then(function(lab) {

            if(lab != null) {
                console.log("lab id found");

                return res.status(200).json({
                    status: 200,
                    data: lab,
                    message: "Success"
                });
            } else {
                console.log("lab NOT found against lab_id " + req.body.lab_id);
                return res.status(404).json({
                    status: 404,
                    message: "lab_id not found"
                });
            }
        })
        .catch(function(err) {
            console.log("Error during Lab.findOneAndUpdate(): " + err.message);
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});

app.post("/api/lab-info/delete", (req, res, next) => {

    console.log("api called [/api/lab-info/delete]");

    Lab.findOneAndDelete({ "lab_id": req.body.lab_id })
        .then(function(lab) {

            if(lab != null) {
                console.log("lab id found");

                return res.status(200).json({
                    status: 200,
                    data: lab,
                    message: "Success"
                });
            } else {
                console.log("lab NOT found against lab_id " + req.body.lab_id);
                return res.status(404).json({
                    status: 404,
                    message: "lab_id not found"
                });                
            }
        })
        .catch(function(err) {
            console.log("Error during Lab.findOneAndDelete() " + err.message);
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});

app.post("/api/machine-info/add", (req, res, next) => {

    console.log("API called [/api/machine-info/add]");

    const reqFields = Object.keys(req.body);

    const mustFields = ["hss_id", "lab_id"];

    const isValidOperation = mustFields.every((field) =>
        reqFields.includes(field)
    );

    console.log(reqFields);
    console.log("fields validation is " + isValidOperation);

    if(!isValidOperation) {
        console.log("Request fields are not complete");
        return res.status(400).json({
            status: 400,
            message: "Incomplete fields"
        });
    }

    try {
        MachineInfo.find({ "hss_id": req.body.hss_id }).then(function(docs) {
        
            if(docs[0] != null) {
                console.log("In step 1: Machine not found against lab_id " + req.body.lab_id);
                return res.status(409).json({
                    status: 400,
                    message: "machine with hss_id already exists"
                });
            }
        });

    } catch(err) {
        console.log(err.message);
    }

    try {
        const now = new Date();

        new MachineInfo({
            hss_id: req.body.hss_id,
            lab_id: req.body.lab_id,
            pr1: 0,
            pr2: 0,
            dr1: 0,
            dr2: 0,
            ss: 0,
            monitor: 0,
            lastUpdatedBy: "lca",
            monitorUpdateTime: now.getTime(),
            triggerBufferTime: 20000
        }).save(function(err) {
            if(err) {
               // console.log(err);
              /*  console.log(err.code);
                if(err.code == 11000) {
                    console.log("HSS_ID already exists");
                    return res.status(400).json({
                        status: 400,
                        message: "HSS_ID already exists"
                    });         
                }
				*/
            } else {
                console.log("no error");
            }
        });
    
        res.status(201).json({
            message: 'Machine info added successfully'
        });
    } catch(err) {
        console.log("Error during MachineInfo.save(): " + err.message);
        return res.status(400).json({
            status: 400,
            message: err.message
        });
    }
    
});

app.post("/api/pv-info/add", (req, res, next) => {

    console.log("API called [/api/pv-info/add]");
    try {
        new PvInfo({
            lat: req.body.lat,
            lon: req.body.lon,
            lab_id: req.body.lab_id,
            lab_order: req.body.lab_order
        }).save();
    
        res.status(201).json({
            message: 'Pv info added successfully'
        });
    } catch(err) {
        console.log("Error during PvInfo.save(): " + err.message);
        return res.status(400).json({
            status: 400,
            message: err.message
        });
    }
});
//-------------------------------------------------------


// Method to update pv-info
app.post("/api/pv-info/update", (req, res, next) => {

    //console.log("update called");
    const pvItem = {
        "lat": req.body.lat,
        "lon": req.body.lon,
        "lab_id": req.body.lab_id,
        "lab_order": req.body.lab_order,
        "pv_id": req.body.pv_id
    };

    console.log("New PV data in api is");
    console.log(pvItem);

    PvInfo.findOneAndUpdate({ "pv_id": req.body.pv_id }, pvItem, { new: true })
        .then(function(pv) {

            if(pv != null) {
                console.log("pv id found");
                return res.status(200).json({
                    status: 200,
                    data: pv,
                    message: "Success"
                });
            } else {
                console.log("pv NOT FOUND against pv_id " + req.body.pv_id);
                return res.status(404).json({
                    status: 404,
                    message: "pv_id not found"
                });
            }
        })
        .catch(function(err) {
            console.log("Error during PvInfo.findOneAndUpdate(): " + err.message);
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});

// Method to delete pv-info
app.post("/api/pv-info/delete", (req, res, next) => {

    console.log("pv delete called");

    PvInfo.findOneAndDelete({ "pv_id": req.body.pv_id })
    .then(function(pv) {

        if(pv != null) {
            console.log("pv id found is " + pv.pv_id);

            return res.status(200).json({
                status: 200,
                data: pv,
                message: "Success"
            });
        } else {
            console.log("pv NOT FOUND against id " + req.body.pv_id);
            return res.status(404).json({
                status: 404,
                message: "pv_id not found in the database"
            });
        }
    })
    .catch(function(err) {
        console.log("Error during PvInfo.findOneAndDelete :" + err.message);
        return res.status(400).json({
            status: 400,
            message: err.message
        });
    });
});

// Method to update machine-info
app.post("/api/machine-info/update", (req, res, next) => {


    const now = new Date();

    const machineItem = {
        "hss_id": req.body.hss_id,
        "lab_id": req.body.lab_id,
        "pr1": req.body.pr1,
        "pr2": req.body.pr2,
        "dr1": req.body.dr1,
        "dr2": req.body.dr2,
        "ss": req.body.ss,
        "monitor": req.body.monitor,
        "lastUpdatedBy": req.body.lastUpdatedBy,
        "monitorUpdateTime": now.getTime(),
        "triggerBufferTime": 20000
    };

    console.log(machineItem);

    MachineInfo.find({ "lab_id": req.body.lab_id }).then(function(docs) {
        
        if(docs[0] == null) {
            console.log("In step 1: Machine not found against lab_id " + req.body.lab_id);
            return res.status(404).json({
                status: 404,
                message: "machine with lab_id not found"
            });
        }

        const now = new Date();
        console.log("Lab ID found");
        var machineItemInDB = docs[0];
        console.log("machine is ");
        console.log(machineItemInDB);

        if(machineItem.lastUpdatedBy == "lca") {
            //Lock or unlock commands
            console.log("Machine update msg from lca");
            machineItemInDB.monitor = machineItem.monitor;
            machineItemInDB.lastUpdatedBy = machineItem.lastUpdatedBy;
            machineItemInDB.monitorUpdateTime = machineItem.monitorUpdateTime;
    
        } else if(machineItem.lastUpdatedBy == "devcom") {
            //Alarm or beacone from devcom
            console.log("Machine update msg from devcom");
            console.log("machineItemInDB.monitorUpdateTime: " + machineItemInDB.monitorUpdateTime +
                        "\nmachineItemInDB.triggerBufferTime: " + machineItemInDB.triggerBufferTime +
                        "\nnow.getTime(): " + now.getTime()); 
            if(now.getTime() > (machineItemInDB.monitorUpdateTime + machineItemInDB.triggerBufferTime)) {
                console.log("Sensor for lab_id" + machineItemInDB.lab_id + " triggered AFTER buffer time");
                machineItemInDB.pr1 = machineItem.pr1;
                machineItemInDB.pr2 = machineItem.pr2;
                machineItemInDB.dr1 = machineItem.dr1;
                machineItemInDB.dr2 = machineItem.dr2;
                machineItemInDB.ss = machineItem.ss;
                machineItemInDB.lastUpdatedBy = machineItem.lastUpdatedBy;
            } else {
                console.log("Sensor for lab_id" + machineItemInDB.lab_id + " triggered BEFORE buffer time");
            }
        }

        MachineInfo.findOneAndUpdate({ "lab_id": req.body.lab_id }, machineItemInDB, { new: true })
            .then(function(machine) {
                if(machine == null) {
                    console.log("In step 2: Machine not found against lab_id " + req.body.lab_id);
                    return res.status(404).json({
                        status: 404,
                        message: "machine with lab_id not found"
                    });
                }
                console.log("Updated lab");
                return res.status(200).json({
                    status: 200,
                    data: machine,
                    message: "Success"
                });
            })
            .catch(function(err) {
                console.log("Error in machine update");
                return res.status(400).json({
                    status: 400,
                    message: err.message
                });
            });

    })
    .catch(function(err) {
        console.log("Error in machine update: " + err.message);
        return res.status(400).json({
            status: 400,
            message: err.message
        });
    });

});
//-------------------------------

// Method to delete machine-info
app.post("/api/machine-info/delete", (req, res, next) => {

    console.log("Machine delete called");

    MachineInfo.findOneAndDelete({ "hss_id": req.body.hss_id })
    .then(function(machine) {

        if(machine != null) {
            console.log("hss id found");

            return res.status(200).json({
                status: 200,
                data: machine,
                message: "Success"
            });
        } else {
            console.log("hss NOT found against ID " + req.body.hss_id);
            return res.status(404).json({
                status: 404,
                message: "hss_id not found"
            });            
        } 
    })
    .catch(function(err) {
        console.log("Error during MachineInfo.findOneAndDelete(): " + err.message);
        return res.status(400).json({
            status: 400,
            message: err.message
        });
    });
});

// get all data
app.get("/api/egcr-info", (req, res, next) => {

    EgcrInfo.find()
        .then(function(data) {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Success"
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});


app.get("/api/lab", (req, res, next) => {

    Lab.find()
        .then(function(data) {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Success"
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});



app.get("/api/machine-info", (req, res, next) => {

    MachineInfo.find()
        .then(function(data) {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Success"
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});


app.get("/api/pv-info", (req, res, next) => {

    PvInfo.find()
        .then(function(data) {
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Success"
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
});

app.post("/api/my-pv-info" , (req,res) =>{
    PvInfo.findOne({pv_id:req.body.pv_id}, function(err,pv_info) {
        if(err){
           return res.send(err)
        }
        else if(pv_info){
           return res.send(pv_info)
        }
        
    })
});

module.exports = app;

