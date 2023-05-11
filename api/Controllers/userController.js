const userModel = require("../models/user");

exports.getUsers = () => {
  return new Promise((resolve, reject) => {
    userModel.find({}, (err, data) => {
      err && reject(err);
      data && resolve(data);
    });
  });
};

/* {
 "firstName": "יסכה",
 "lastName": "בכר",
 "id": "325018596",
 "city": "אלעד",
 "street": "רבי עקיבא",
 "houseNumber": "27",
 "phone": "055-6772357",
 "cellphone": "03-9090596",
 "imageUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdalicanvas.co.il%2Fwp-content%2Fuploads%2F2022%2F10%2F%25D7%25A9%25D7%25A7%25D7%2599%25D7%25A2%25D7%2594-%25D7%25A7%25D7%259C%25D7%2590%25D7%25A1%25D7%2599%25D7%25AA-1.jpg&tbnid=T2kXmA5R0FiH-M&vet=12ahUKEwiu2L3L5OP-AhXCpicCHct4Du8QMygFegUIARCeAg..i&imgrefurl=https%3A%2F%2Fdalicanvas.co.il%2F%25D7%2592%25D7%259C%25D7%25A8%25D7%2599%25D7%2599%25D7%25AA-%25D7%25AA%25D7%259E%25D7%2595%25D7%25A0%25D7%2595%25D7%25AA%2F%25D7%25A0%25D7%2595%25D7%25A4%25D7%2599%25D7%259D%2F%25D7%25AA%25D7%259E%25D7%2595%25D7%25A0%25D7%2594-%25D7%25A9%25D7%25A7%25D7%2599%25D7%25A2%25D7%2594-%25D7%25A7%25D7%259C%25D7%2590%25D7%25A1%25D7%2599%25D7%25AA%2F&docid=8hsoY2axo9MeGM&w=1024&h=717&q=%D7%AA%D7%9E%D7%95%D7%A0%D7%94&safe=active&ved=2ahUKEwiu2L3L5OP-AhXCpicCHct4Du8QMygFegUIARCeAg",
 "dateOfIllness": "12.2.22",
 "dateOfRecovery": "24.3.22"
  "vaccines": ["isVaccine"],

 }*/

exports.addUser = async (obj) => {
  let user = new userModel({
    firstName: obj.firstName,
    lastName: obj.lastName,
    id: obj.id,
    city: obj.city,
    street: obj.street,
    houseNumber: obj.houseNumber,
    phone: obj.phone,
    cellphone: obj.cellphone,
    imageUrl: obj.imageUrl,
    dateOfIllness: obj.dateOfIllness,
    dateOfRecovery: obj.dateOfRecovery,
    vaccines: obj.vaccines,
  });
  user.save(function (err, user) {
    if (err) {
      return next(err)
    }
    res.json(201, user)
  });
};
exports.getUser = (ID) => {
  return new Promise((resolve, reject) => {
    userModel.findById(ID, (err, data) => {
      err && reject(err);
      data && resolve(data);
    });
  });
};
exports.updateUser = async (ID, obj) => {
  userModel.findByIdAndUpdate(ID, obj, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
}