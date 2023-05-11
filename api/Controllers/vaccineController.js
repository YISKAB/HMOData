const vaccineModel = require("../models/vaccine");
const userModel = require("../models/user")

exports.getVaccines = async () => {
    return new Promise((resolve, reject) => {
        vaccineModel.find({}, (err, data) => {
            err && reject(err);
            data && resolve(data);
        });
    });
};

exports.addVaccine = async (obj) => {
    let vaccine = new vaccineModel({
        idUser: obj.idUser,
        date: obj.date,
        maker: obj.maker,

    })
    vaccine.save();
    userModel.updateUser(vaccine.idUser, {
        $push: {
            vaccines: vaccine._id
        }
    })

};
exports.getVaccine = (ID) => {
    return new Promise((resolve, reject) => {
        vaccineModel.findById(ID, (err, data) => {
            err && reject(err);
            data && resolve(data);
        });
    });
};