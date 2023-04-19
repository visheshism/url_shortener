import { Link } from "../models/shorten.js";


export const getOne = async (req, res, next) => {
    try {
        const { identifier } = req.params
        const link = await Link.findOne({ identifier }).select({ _id: 0, __v: 0 })

        if (!link) return res.status(404).json({
            success: false,
            message: "Couldn't find any link with this identifier"
        })

        res.status(500).json({
            success: true,
            link
        })

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}

export const getAll = async (req, res, next) => {
    try {
        const allLinks = await Link.find().select({ _id: 0, __v: 0 })

        if (!allLinks.length > 0) return res.status(404).json({
            success: false,
            message: "No Links found !"
        })

        res.status(500).json({
            success: true,
            links: allLinks
        })

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}