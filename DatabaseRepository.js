const mongoose = require("mongoose");
const warning = require("./DataModel")


class DatabaseRepository {
    async PostData(req, res, next) {

        var newData = {};
        newData.warningMessage = req.body.warning;
        newData.taskData = [];
        newData.taskData.push(req.body.taskData);

        let queryObj = { warningMessage: req.body.warning };
        let datamodelObject = new warning(req.body);
        try {
            var warningData = await this.GetData(queryObj, warning);

            if (warningData) {
                warningData.taskData.push(req.body.taskData)
                await warning.findOneAndUpdate(queryObj, warningData);
            }
            else {
                await datamodelObject.save(req.body);
            }

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