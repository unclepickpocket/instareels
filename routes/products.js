const express = require("express");
const router = express.Router()

const {getImg, getVid} = require("../controllers/products");

router.route("/").get(getVid);
router.route("/img").get(getImg);

module.exports = router;