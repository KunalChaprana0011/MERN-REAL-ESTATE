import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

//adding next middleware to handle errors
export const signup = async (req, res, next) => {
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Invalid Credentials!!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return next(errorHandler(401, "Invalid Credentials!!")); 
    }
    const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET)
    const {password:pass,...rest} = validUser._doc;
    res
    .cookie('access_token',token,{httpOnly:true})
    .status(200)
    .json(rest)

  } catch (error) {
    next(error);
  }
};
