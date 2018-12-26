const mongoose = require('mongoose');

const DataScehma = new mongoose.Schema({
    "warning": { type: String },
    "taskData": [{ type: Object }]
})

const warning = mongoose.model("warning", DataScehma);
module.exports = warning;

