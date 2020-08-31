// const Category = require("../models/Category");
import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import Category from '../models/Category';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const queryParams: FindOptions = {
      order: [["name", "ASC"]],
      attributes: ["id", "name"],
    };

    const category = await Category.findAll(queryParams);
    return res.json(category);
  } catch (err) {
    console.log("getCategories:", err.message);
    res.status(500).json({ message: err.message });
  }
};
