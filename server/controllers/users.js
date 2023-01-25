import users from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await users.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Somthing went wrong");
  }
};

export const postUser = async (req, res) => {
  const { name, age } = req.body;

  try {
    const user = await new users({
      name: name,
      age: age,
    }).save();

    // const saveUser = await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json("Somthing went wrong");
  }
};

export const getUser = async (req, res) => {
  const { id: _id } = req.params;
  console.log(_id);

  try {
    const user = await users.findById(_id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Somthing went wrong");
  }
};

export const removeUser = async (req, res) => {
  const { id: _id } = req.params;
  console.log(_id);

  try {
    const removedUser = await users.deleteOne({ _id });

    res.status(200).json(removedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  console.log(req.body);

  try {
    const updatedUser = await users.updateOne(
      { _id },
      { $set: { name: req.body.name, age: req.body.age } }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
