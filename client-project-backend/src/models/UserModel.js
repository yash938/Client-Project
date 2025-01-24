import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },

    username: {
      type: String,
      unique: true,
      lowecase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    contact: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    avatar: {
      type: String, // cloudinary url
      default: "../../public/DefaultImgs/defaultProfile.png",
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const userModel = mongoose.model("Users", userSchema);
