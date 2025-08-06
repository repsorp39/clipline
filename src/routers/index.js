const express = require("express");
const { startCollection, writer } = require("../controllers/collection");
const router = express.Router();

router.get('^/$|index(.ejs)?', (req, res) => res.render('index'));
router.post("/start", startCollection);
router.get('/collection/:name', writer);


module.exports = router;