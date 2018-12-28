const mongoose = require("mongoose");
const warning = require("./DataModel")


class DatabaseRepository {
    async PostData(req, res, next) {
        let reqData = req.body;
        let queryObj = { warning: reqData.warning };

        let datamodelObject = new warning(reqData);

        try {
            let repetition = false;
            var warningData = await this.GetData(queryObj, warning);

            if (warningData != null) {
                for (let index = 0; index < warningData.taskData.length; ++index) {
                    if (reqData.taskData.id == warningData.taskData[index].id && reqData.taskData.trace == warningData.taskData[index].trace
                    ) {
                        repetition = true;
                        break;
                    }
                }
                if (repetition != true) {
                    warningData.taskData.push(reqData.taskData)
                    await warning.findOneAndUpdate(queryObj, warningData);
                }
            }
            else {
                await datamodelObject.save(reqData);
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