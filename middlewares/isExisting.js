import { Link } from "../models/shorten.js"

export const isExisting = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const link = await Link.findOne({ identifier: identifier })
        if (!link) return res.json({
            success: false,
            message: "Invalid request"
        })

        req.link = link
        next()

    } catch (err) {
        res.status(401).json({ status: "error", message: err.message })
    }
}