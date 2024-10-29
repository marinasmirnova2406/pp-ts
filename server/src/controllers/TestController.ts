import { Request, Response } from 'express';
import TestModel from '../models/TestModel';

export const getTests = async (req: Request, res: Response) => {
    try {
        const tests = await TestModel.find();
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка получения тестов', error });
    }
};

export const createTest = async (req: Request, res: Response) => {
    const newTest = new TestModel(req.body);
    try {
        const savedTest = await newTest.save();
        res.status(201).json(savedTest);
    } catch (error) {
        res.status(400).json({ message: 'Ошибка создания теста', error });
    }
};