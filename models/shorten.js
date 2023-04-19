import mongoose from "mongoose";

const schema = mongoose.Schema({
    absolute_path: {
        type: String,
        required: true,
        unique: true
    },
    identifier: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    }
})

export const Link = mongoose.model("Links", schema, "links")