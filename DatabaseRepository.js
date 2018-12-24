const mongoose = require("mongoose");
const datamodel = require("./DataModel")


class DatabaseRepository {
    async PostData(req, res, next) {

        var newData = {};
        newData.warningMessage = req.body.warning;
        newData.taskData = [];
        newData.taskData.push(req.body.taskData);

        let queryObj = { warningMessage: req.body.warning };
        let datamodelObject = new datamodel(data);
        var warningData = await this.GetData(queryObj, datamodelObject);
        try {
            warningData.taskData.push(req.body.taskData)
            return await datamodelObject.findOneAndUpdate(queryObj, warningData);
        } catch (err) {
            next(err);
        }
    }

    async GetData(queryObj, modelObject) {
        try {
            // return the data


            return await modelObject.findOne(queryObj);
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new DatabaseRepository();