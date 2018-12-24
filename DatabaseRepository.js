const mongoose = require("mongoose");
const datamodel = require("./DataModel")


class DatabaseRepository {
    async PostData(req, res, next) {

        var newData = {};
        newData.warningMessage = req.body.warning;
        newData.taskData = [];
        newData.taskData.push(req.body.taskData);

        let queryObj = { warningMessage: req.body.warning };
        try {
            let datamodelObject = new datamodel(data);
            return await datamodelObject.findOneAndUpdate(queryObj, newData);
        } catch (err) {
            next(err);
        }
    }

    async GetData() {
        
    }
}

module.exports = new DatabaseRepository();