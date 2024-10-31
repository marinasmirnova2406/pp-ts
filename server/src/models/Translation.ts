import mongoose, { Document, Schema } from 'mongoose';
import { ILanguage } from './Language';

export interface ITranslation extends Document {
  language_id: ILanguage['_id'];
  key: string;
  value: string;
}

const TranslationSchema: Schema = new Schema({
  language_id: { type: Schema.Types.ObjectId, ref: 'Language', required: true },
  key: { type: String, required: true },
  value: { type: String, required: true },
});

export default mongoose.model<ITranslation>('Translation', TranslationSchema, "translations");