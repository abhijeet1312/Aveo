// User Sign-up Function
import { findbyuseremail, createuser } from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from "lodash";

export const SignUpUser = async (req, res) => {
  try {
    let {
      user_first_name,
      user_last_name,
      user_email,
      user_password,
      user_phone_number,
    } = req.body;

    user_first_name = _.trim(user_first_name);
    user_last_name = _.trim(user_last_name);
    user_email = _.toLower(_.trim(user_email)); //
    user_phone_number = _.trim(user_phone_number);

    // Check if the user already exists
    const user = await findbyuseremail(user_email);
    if (user) {
      return res
        .status(400)
        .json({ error: "User already exists", success: false });
    }

    // Hash the password before storing
    bcrypt.hash(user_password, 10, async (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res
          .status(500)
          .json({ error: "Error processing password", success: false });
      }

      // Create a new user
      const newUser = await createuser(
        user_first_name,
        user_last_name,
        user_email,
        hash,
        user_phone_number
      );

      if (!newUser) {
        return res
          .status(500)
          .json({ error: "Failed to create User", success: false });
      }

      return res
        .status(201)
        .json({ message: "User created successfully", success: true });
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", success: false });
  }
};

export const loginUser = async (req, res) => {
  let { user_email, user_password } = req.body;

  try {
    // Checking if the user exists
    user_email = _.toLower(_.trim(user_email)); // ✅ Emails should always be lowercase

    const user = await findbyuseremail(user_email);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid email or password", success: false });
    }

    // Comparing the password
    const isMatch = await bcrypt.compare(
      user_password,
      user.user_password_hash
    );
    if (!isMatch) {
      return res
        .status(401)
        .json({ error: "Invalid email or password", success: false });
    }

    // Creating a JWT token
    console.log("-------user-id---------", user.user_id);
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: "72h",
    });

    // Setting the token in the cookie
    res.cookie("authToken", token, { httpOnly: true });

    console.log(
      "----------------------------------------------------------",
      user
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: user, // Returning user details
      success: true,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", success: false });
  }
};
