const { Router } = require("express");
const RegionController = require("./controller");

const router = new Router();

router.route("/").get(RegionController.apiGetReegions);

module.exports = router;
