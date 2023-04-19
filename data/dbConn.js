import mongoose from "mongoose";

export default (MONGO_URI) => mongoose.connect(MONGO_URI, {
    dbName: "urlShortener"
})
    .then(() => console.log("DB CONNECTED"))
    .catch((e) => console.log(e.message))