const UserModel = require('../models/usersModel');

// POST - Create a user
const createUser = async (req, res) => {
  console.log('Inside createUser function');
  const data = new UserModel({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    gender: req.body.gender,
    userPower: req.body.userPower,
  });

  try {
    const createdUser = await data.save();
    res.json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving data');
  }
};

// GET - Get all users
const getUsers = async (req, res) => {
  console.log('Inside getUsers function');
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving users');
  }
};

// GET - Get a user by ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  console.log('Inside getUserById function');

  try {
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving user');
  }
};

// PUT - Update a user
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, address, gender, userPower } = req.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { id: userId },
      { $set: { name, email, address, gender, userPower } },
      { new: true, useFindAndModify: false }
    );

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating user');
  }
};

// DELETE - Delete a user
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await UserModel.findOneAndDelete({ id: userId });

    if (!deletedUser) {
      return res.status(404).send('User not found');
    }

    res.send('User deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting user');
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
