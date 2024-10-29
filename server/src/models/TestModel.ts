import mongoose, { Schema, Document } from 'mongoose';

export interface ITest extends Document {
    name: string;
}

const TestSchema: Schema = new Schema({
    name: { type: String, required: true },
});

const TestModel = mongoose.model<ITest>('test', TestSchema, 'test');

export default TestModel;