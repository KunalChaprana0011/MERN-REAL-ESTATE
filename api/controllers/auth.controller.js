import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

//adding next middleware to handle errors
export const signup = async (req, res ,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully!!");
  } catch (error) {
    // res.status(500).json(error.message);
    //using middleware to handle errors
    next(error);

    //testing user created error handler
    // next(errorHandler(550,'oops something went wrong error from user created error function '));
  }
};
