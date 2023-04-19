import express from "express"
import { getAll, getOne } from "../controllers/get.js";

const router = express.Router()

router.get("/get", getAll)
router.get("/get/:identifier", getOne)

export default router;