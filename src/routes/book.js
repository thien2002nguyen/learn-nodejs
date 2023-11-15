import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdminOrModerator } from "../middlewares/verify_roles";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

//PUBLIC ROUTES
router.get("/", controllers.getBooks);

//PRIVATE ROUTES
router.use(verifyToken);
router.use(isAdminOrModerator);
router.post("/", uploadCloud.single('image'), controllers.createNewBook);
router.put("/", uploadCloud.single('image'), controllers.updateBook);
router.delete("/", controllers.deleteBook);

module.exports = router;
