import db from "../models";
import data from "../../data/data.json";
import { generateCode } from "../helpers/fn";

export const insertData = () =>
  new Promise(async (resolve, reject) => {
    try {
      const categories = Object.keys(data);
      categories.forEach(async (item) => {
        await db.Category.create({
          code: generateCode(item),
          value: item,
        });
      });
      const dataArr = Object.entries(data);
      dataArr.forEach((item) => {
        item[1]?.map(async (book) => {
          await db.Book.create({
            title: book.bookTitle,
            price: +book.bookPrice,
            available: +book.available,
            image: book.imgUrl,
            description: book.bookDescription,
            category_code: generateCode(item[0]),
          });
        });
      });
      resolve("OK");
    } catch (error) {
      reject(error);
    }
  });
