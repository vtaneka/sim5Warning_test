const mongoose = require('mongoose');

const DataScehma = new mongoose.Schema({ type: mongoose.Schema.Types.Mixed })

const warning = mongoose.model("warning", DataScehma);
module.exports = warning;

