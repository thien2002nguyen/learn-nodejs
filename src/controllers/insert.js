import * as services from "../services";
import { internalServerError } from "../middlewares/handle_error";

export const insertData = async (req, res) => {
  try {
    const response = await services.insertData();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
