const Guriyaha = require('../models/guriyahaModel');

// POST
exports.createGuriyaha = async (req, res) => {
  try {
    const guriyaha = new Guriyaha(req.body);
    const savedGuriyaha = await guriyaha.save();
    res.json(savedGuriyaha);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating guriyaha');
  }
};

// PUT
exports.updateGuriyaha = async (req, res) => {
  try {
    const updatedGuriyaha = await Guriyaha.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedGuriyaha) {
      return res.send('Guriyaha not found');
    }
    res.json(updatedGuriyaha);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating guriyaha');
  }
};

// GET all Guriyaha entries
exports.getAllGuriyaha = async (req, res) => {
  try {
    const guriyahaList = await Guriyaha.find();
    res.json(guriyahaList);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting Guriyaha entries');
  }
};

// GET a single Guriyaha entry by ID
exports.getGuriyahaById = async (req, res) => {
  try {
    const guriyaha = await Guriyaha.findOne({ id: req.params.id });
    if (!guriyaha) {
      return res.send('Guriyaha entry not found');
    }
    res.json(guriyaha);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting Guriyaha entry');
  }
};


// DELETE
exports.deleteGuriyaha = async (req, res) => {
  try {
    const deletedGuriyaha = await Guriyaha.findOneAndDelete({ id: req.params.id });
    if (!deletedGuriyaha) {
      return res.send('Guriyaha not found');
    }
    res.send('Guriyaha deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting guriyaha');
  }
};
