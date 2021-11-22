const { Router } = require("express");
const CityController = require("./controller");

const router = new Router();

router.route("/").get(CityController.apiGetCities);
router.route("/region/:id").get(CityController.apiGetRegionCities);

module.exports = router;
