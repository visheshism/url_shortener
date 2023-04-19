import { Link } from "../models/shorten.js";

export const deleteOne = async (req, res, next) => {
    try {
        const { identifier } = req.params

        const linkExists = await Link.findOne({ identifier })
        if (!linkExists) return res.status(404).json({
            success: false,
            message: "Couldn't find any link with this identifier"
        })

        const link = await Link.deleteOne({ identifier }).select({ _id: 0 })
        if (!link.deletedCount > 0) return res.status(404).json({
            success: false,
            message: "Couldn't find any link with this identifier"
        })

        res.status(500).json({
            success: true,
            message: "Deleted !"
        })

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}