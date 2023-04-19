import jwt from "jsonwebtoken"
import { JWT_TOKEN } from "../data/env.js"

export const intoJwt = (url) => {
    return jwt.sign({ url }, JWT_TOKEN)
}

export const getJwt = (url) => {
    return jwt.verify(url, JWT_TOKEN)
}