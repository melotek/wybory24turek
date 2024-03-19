import type { IRating } from "@/types";
import { Schema, model, Types } from "mongoose";

export const ratingSchema = new Schema<IRating>({
  userId: Types.ObjectId,
  questionId: Types.ObjectId,
  rating: {
    type: Number,
    required: true,
  },
});
const Rating = model<IRating>("Rating", ratingSchema);
export default Rating;
