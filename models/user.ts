import type { IUser } from "@/types";
import { Schema, model, Types } from "mongoose";

export const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
const User = model<IUser>("User", userSchema);
export default User;
