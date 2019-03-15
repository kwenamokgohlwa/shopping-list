const express = require("express");
const router = express.Router();

const staticController = require("../controllers/staticController");

router.get("/", staticController.index)

router.post("/", staticController.create);

router.post("/:id/destroy", staticController.destroy);

router.post("/:id/update", staticController.update);

module.exports = router;