import express from "express"
import { deleteOne } from "../controllers/delete.js";

const router = express.Router()

router.delete("/delete/:identifier", deleteOne)

export default router;