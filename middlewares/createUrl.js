import { Link } from "../models/shorten.js"

import { intoJwt, getJwt } from "../data/jwt.js"

export const createLink = async (req, res, next) => {
    try {
        const identifier = req.identifier
        const { link } = req.body
        const createLink = await Link.create({ identifier, absolute_path: req.protocol + '://' + req.get('host') + '/' + identifier, url: intoJwt(link) })
        
        const findLink = await Link.findOne({ identifier: createLink.identifier }).select({ _id: 0, __v: 0 })

        res.status(500).json({
            success: true,
            link: {
                absolute_path: findLink.absolute_path,
                identifier: findLink.identifier,
                url: getJwt(findLink.url)
            }
        })
    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}
