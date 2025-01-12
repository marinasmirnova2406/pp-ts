import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  // phoneNumber: string;
  // avatarUrl: string;
  profile: {
    firstName: string;
    lastName: string;
    gender?: "male" | "female" | "other";
    dateOfBirth?: Date;
    // bio: string;
    // location: {
    //   country: string;
    //   city: string;
    //   timezone: string;
    // };
  };
  preferences: {
    // language: string;
    // currency: string;
    // theme: "light" | "dark";
    notifications: {
      email: boolean;
      // sms: boolean;
      // push: boolean;
    };
  };
  roles: string[];
  // permissions: string[];
  accountStatus: {
    isActive: boolean;
    isVerified: boolean;
    createdAt: Date;
    lastLogin?: Date;
  };
  // subscriptions: {
  //   id: string;
  //   type: "basic" | "premium";
  //   startDate: Date;
  //   endDate: Date;
  //   isActive: boolean;
  // }[];
  activity: {
    lastVisitedPages: string[];
    recentActions: {
      action: string;
      timestamp: Date;
    }[];
  };
  // social: {
  //   twitter: string;
  //   github: string;
  //   linkedin: string;
  // };
  // favors: {
  //   countriesToTrip: string[];
  //   sights: string[];
  // };
}

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // phoneNumber: { type: String },
  // avatarUrl: { type: String },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: { type: Date },
    // bio: { type: String },
    // location: {
    //   country: { type: String },
    //   city: { type: String },
    //   timezone: { type: String },
    // },
  },
  preferences: {
    // language: { type: String, default: "en" },
    // currency: { type: String, default: "USD" },
    // theme: { type: String, enum: ["light", "dark"], default: "light" },
    notifications: {
      email: { type: Boolean, default: true },
      // sms: { type: Boolean, default: false },
      // push: { type: Boolean, default: true },
    },
  },
  roles: [{ type: String }],
  // permissions: [{ type: String }],
  accountStatus: {
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
  },
  // subscriptions: [
  //   {
  //     id: { type: String, required: true },
  //     type: { type: String, enum: ["basic", "premium"], required: true },
  //     startDate: { type: Date, required: true },
  //     endDate: { type: Date, required: true },
  //     isActive: { type: Boolean, required: true },
  //   },
  // ],
  activity: {
    lastVisitedPages: [{ type: String }],
    recentActions: [
      {
        action: { type: String, required: true },
        timestamp: { type: Date, required: true },
      },
    ],
  },
  // social: {
  //   twitter: { type: String },
  //   github: { type: String },
  //   linkedin: { type: String },
  // },
  // favors: {
  //   countriesToTrip: [{ type: String }],
  //   sights: [{ type: String }],
  // },
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema, "users");
export default User;

