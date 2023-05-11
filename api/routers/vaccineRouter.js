const express = require("express")
const router = express.Router();
const vaccineController = require("../Controllers/vaccineController")

router.get("/", async function (req, res) {
    let data = await vaccineController.getVaccines()
    return res.status(200).json(data)
})
router.post("/", async function (req, res) {
    let data = await vaccineController.addVaccine(req.body)
    return res.status(200).json(data)
})
router.get("/:ID", async function (req, res) {
    let ID = req.params.ID
    let data = await vaccineController.getVaccine(ID)
    return res.status(200).json(data)
})

module.exports = router;