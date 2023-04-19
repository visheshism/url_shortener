import { app } from "./app.js"
import { MONGO_URI, PORT } from "./data/env.js"
import dbConn from "./data/dbConn.js"

app

dbConn(MONGO_URI)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})