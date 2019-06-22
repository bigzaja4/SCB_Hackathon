const express = require("express");
const controller = require("../controllers/loginController");
const router = express.Router();

router.post("/",controller.loginMiddleware,controller.getLogin);

module.exports = router;