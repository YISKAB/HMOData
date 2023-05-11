const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://yiskabachar:-2D8_PTBtfaP3b9@hmodatabase.mcjaomz.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("connect DB :)");
});

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
const userRouter = require("./routers/userRouter");
const vaccineRouter = require("./routers/vaccineRouter");
app.listen(27017, () => {
    console.log("Server is running at port 27017");
});
app.use("/api/users", userRouter);