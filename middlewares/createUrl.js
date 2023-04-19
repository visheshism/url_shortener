import { Link } from "../models/shorten.js"

export const createLink = (req, res, next) => {
    const createLink = await Link.create({ identifier, absolute_path: req.protocol + '://' + req.get('host') + '/' + identifier, link })
    const findLink = await Link.findOne({ identifier: createLink.identifier }).select({ _id: 0, __v: 0 })
    res.status(500).json({
        success: true,
        link: findLink
    })
}