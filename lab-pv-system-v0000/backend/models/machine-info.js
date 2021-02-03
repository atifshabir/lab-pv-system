const mongoose = require('mongoose');

const machineInfoSchema = mongoose.Schema({
    hss_id: { type: String, required: true},
    lab_id: { type: Number, required: true},
    pr1: { type: Number, required: true},
    pr2: { type: Number, required: true},
    dr1: { type: Number, required: true},
    dr2: { type: Number, required: true},
    ss: { type: Number, required: true},
    monitor: { type: Number, required: true},
    lastUpdatedBy: { type: String, required: true},
    monitorUpdateTime: { type: Number, required: true},
    triggerBufferTime: {type: Number, required: true}
});

module.exports = mongoose.model('MachineInfo', machineInfoSchema);