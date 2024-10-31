import { Request, Response } from "express";
import Language from "../models/Language";
import Translation from "../models/Translation";

export const getTranslations = async (req: Request, res: Response) => {
  const lang = req.query.lang as string;
  const keys = req.query.keys;
  const keysArray = Array.isArray(keys)
    ? keys
    : typeof keys === "string"
    ? keys.split(",")
    : [];

  try {
    const language = await Language.findOne({ code: lang });
    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }

    const translations = await Translation.find({
      language_id: language._id,
      key: { $in: keysArray },
    });

    const translationMap = translations.reduce<Record<string, string>>(
      (acc, { key, value }) => {
        acc[key] = value;
        return acc;
      },
      {}
    );

    res.json(translationMap);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
