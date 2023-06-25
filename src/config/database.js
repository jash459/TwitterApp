import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://jashhinger62:Hinger111@cluster0.2zfdluk.mongodb.net/"
  );
};
