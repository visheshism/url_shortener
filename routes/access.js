import express from "express";
import { isExisting } from "../middlewares/isExisting.js";
import { redirectUrl } from "../controllers/redirection.js";

const router = express.Router();

router.get("/:identifier", isExisting, redirectUrl)

export default router;
