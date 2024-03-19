import type { IquestionRating } from "@/types";
import { Schema, model, Types } from "mongoose";

export const questionRateSchema = new Schema<IquestionRating>({
  userId: { type: Types.ObjectId, ref: "User" },
  questionId: { type: Types.ObjectId, ref: "questionForm" },
  rating: [
    {
      userId: { type: Types.ObjectId, ref: "User" },
      questionId: { type: Types.ObjectId, ref: "question" },
      rating: Number,
    },
  ],
});
const questionRate = model<IquestionRating>("questionRate", questionRateSchema);
export default questionRate;
