import type { IUser } from "@/types";
import { Schema, model, models } from "mongoose";

export const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: false,
  },
  secondname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "USER",
  },
});
const User =
  models.userSchema || model<IUser>("User", userSchema, "uzytkownicy-wyborcy");
export default User;
