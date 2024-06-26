import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User1 from "../models/userModel.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import resetPassword from "../Templates/Mail/reset.js";
import mailServices from "../services/mailer.js";
import crypto from "crypto";

const signToken = (userId) => jwt.sign({
    userId}
, process.env.JWT_SECRET);

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User1({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User1.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

export const forget = async (req, res, next) => {
  const { email } = req.body;
  if (!email || email == "") {
    return next(errorHandler(400, "Email is required"));
  }

  const user = await User1.findOne({ email });
  if (!user) {
    return next(errorHandler(404, "User not found"));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    const resetURL = `http://localhost:5173/reset?token=${resetToken}`;
    console.log(resetToken);

    mailServices.sendEmail({
      sender: `Shreya's Blog reya25pandey@gmail.com`,
      recipient: user.email,
      subject: "Reset Password",
      text: "Hey!",
      html: resetPassword(user.username, resetURL),
      attachments: [],
    });

    next(errorHandler(200, "Reset password link sent to Email"));
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });

    next(
      errorHandler(
        500,
        "Error sending reset password link, Please try again later"
      )
    );
  }
};

export const reset = async (req, res, next) => {
    const resetToken = req.params.token;
    console.log("freset", resetToken);
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    console.log("Hashed token:", hashedToken);

  const user = await User1.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if(!user){
    return next(errorHandler(400, "Invalid token or token has expired"));
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  const newtoken = signToken(user._id);
  res.status(200).json({
    status: "success",
    message: "Password reseted successfully",
    token: newtoken,
  })

};
