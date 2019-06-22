const express = require("express");
const router = express.Router();

router.post("/redirect",(req,res) => {
    res.set("hello")
});


module.exports = router;