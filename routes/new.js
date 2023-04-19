import express from "express"
import { hasLink } from "../middlewares/hasLink.js";
import { createOneByIdentifier } from "../controllers/create.js";
import { createOne } from "../controllers/create.js";
import { createLink } from "../middlewares/createUrl.js"

const router = express.Router()

router.post("/new", hasLink, createOne, createLink)
router.post("/new/:identifier", hasLink, createOneByIdentifier, createLink)

export default router;