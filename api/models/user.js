const mongoose = require("mongoose");


let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (v, x, z) {
                return !(this.id.length > 9);
            },
            message: "Maximum 4 vaccinations per user"
        }
    },
    city: String,
    street: String,
    houseNumber: String,
    phone: String,
    cellphone: String,
    imageUrl: String,
    dateOfIllness: Date,
    dateOfRecovery: Date,
    vaccines: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "vaccine",
            unique: true,
            required: true,
            validate: {
                validator: function (vaccines) {
                    return !(vaccines.length > 4);
                },
                message: "Maximum 4 vaccinations per user"
            },
        }
        // {
        //     date: Date,
        //     maker: String,
        // }
    ]
})
const user = mongoose.model("users", UserSchema);
module.exports = user;