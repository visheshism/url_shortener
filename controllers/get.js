import { Link } from "../models/shorten.js";
import { getJwt } from "../data/jwt.js"

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
            link: {
                absolute_path: link.absolute_path,
                identifier: link.identifier,
                url: getJwt(link.url).url
            }
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
            links: allLinks.map(x => {
                return {
                    absolute_path: x.absolute_path,
                    identifier: x.identifier,
                    url: getJwt(x.url).url
                }
            })
        })

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}