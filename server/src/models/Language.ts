import mongoose, { Document, Schema } from 'mongoose';

export interface ILanguage extends Document {
  code: string;
  name: string;
}

const LanguageSchema: Schema = new Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export default mongoose.model<ILanguage>('Language', LanguageSchema, 'languages');
