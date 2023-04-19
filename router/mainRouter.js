import express from "express";
import createRoute from "../routes/new.js";
import getRoute from "../routes/get.js";
import deleteRoute from "../routes/delete.js";
import accessRoute from "../routes/access.js"
import { API_KEY } from "../data/env.js";

const mainRouter = express.Router();

mainRouter.use(`/${API_KEY}`, createRoute)
mainRouter.use(`/${API_KEY}`, getRoute)
mainRouter.use(`/${API_KEY}`, deleteRoute)
mainRouter.use(accessRoute)


export default mainRouter;
