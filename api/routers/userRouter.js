const express = require("express")
const router = express.Router();
const userController = require("../Controllers/userController")

router.get("/", async function (req, res) {
    let data = await userController.getUsers()
    return res.status(200).json(data)
})

router.get("/:ID", async function (req, res) {
    let ID = req.params.ID
    let data = await userController.getUser(ID)
    return res.status(200).json(data)
})

router.put("/:ID", async function (req, res) {
    let ID = req.params.ID;
    let user = req.body
    let data = await userController.updateUser(ID, user)
    return res.status(200).json(data);

})

router.post("/", async function (req, res) {
    let data = await userController.addUser(req.body)
    return res.status(200).json(data)
})
module.exports = router;