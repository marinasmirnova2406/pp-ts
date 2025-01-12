import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAuth extends Document {
  userId: string;
  passwordHash: string;
  passwordUpdatedAt: Date;
}

const authSchema = new Schema<IAuth>({
  userId: { type: String, required: true },
  passwordHash: { type: String, required: true },
  passwordUpdatedAt: { type: Date, required: true },
});

const Auth: Model<IAuth> = mongoose.model<IAuth>("Auth", authSchema, "auths");
export default Auth;