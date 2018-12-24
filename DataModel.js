const mongoose = require('mongoose');

const DataScehma = new mongoose.Schema({ type: mongoose.Schema.Types.Mixed })

const dataModel = mongoose.model("jquery_migrate-1.x_warnings", DataScehma);
module.exports = dataModel;

