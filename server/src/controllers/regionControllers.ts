import { Request, Response } from "express";
import Country from "../models/Country";

interface Timezone {
  code: string;
  name: string;
}

interface CountryData {
  country: string;
  countryCode: string;
  group: string;
  currency: string;
  translationKey: string;
  timezones: {
    primary: Timezone;
    all: Timezone[];
  };
  language: string;
}

export const getCountryNamesByGroup = async (req: Request, res: Response) => {
  try {

    const { group } = req.params;
    
    const countries = await Country.find({ group });

    const result = countries.map((country) => ({
      country: country.country,
      countryCode: country.countryCode,
      translationKey: country.translationKey,
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
