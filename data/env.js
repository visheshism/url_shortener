import { config } from "dotenv"
config({
    path: "./data/creds.env"
})

export const { MONGO_URI, PORT, API_KEY } = process.env

export const JWT_TOKEN = "url_shortener"