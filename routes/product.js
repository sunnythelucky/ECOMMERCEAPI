const router = require("express").Router();

//GET ALL PRODUCTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query ? await Product.find().sort({ _id: -1 }).limit(1) : await Product.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
