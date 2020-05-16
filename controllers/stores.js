const StoreSchema = require('../models/Store');
// @desc get all stores
// @route GET /api/v1/stores
// @access public
exports.getStores = async (req, res, next) => {
  try {
    const stores = await StoreSchema.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc create a store
// @route POST /api/v1/stores
// @access public
exports.addStore = async (req, res, next) => {
  try {
    console.log(req.body);
    const store = await StoreSchema.create(req.body);

    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
        res.status(400).json({ error: 'This store already exist' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};
