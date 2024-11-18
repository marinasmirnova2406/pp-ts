import mongoose, { Schema, Document } from "mongoose";

interface Timezone {
  code: string;
  name: string;
}

interface Timezones {
  primary: Timezone;
  all: Timezone[];
}

interface Country extends Document {
  country: string;
  countryCode: string;
  group: string;
  currency: string;
  translationKey: string;
  timezones: Timezones;
  language: string;
}

const TimezoneSchema = new Schema<Timezone>({
  code: { type: String, required: true },
  name: { type: String, required: true },
});

const TimezonesSchema = new Schema<Timezones>({
  primary: { type: TimezoneSchema, required: true },
  all: { type: [TimezoneSchema], required: true },
});

const CountrySchema = new Schema<Country>({
  country: { type: String, required: true },
  countryCode: { type: String, required: true },
  group: { type: String, required: true },
  currency: { type: String, required: true },
  translationKey: { type: String, required: true },
  timezones: { type: TimezonesSchema, required: true },
  language: { type: String, required: true },
});

export default mongoose.model<Country>("Country", CountrySchema, "countries");
