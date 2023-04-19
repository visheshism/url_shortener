import { Link } from "../models/shorten.js"

export const createOne = async (req, res, next) => {

    try {
        const { link } = req.body
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const nums = "1234567890"
        const length = 16
        let i = 0
        const choices = [chars, nums]
        let identifier = '';

        while (i <= length) {
            let currentNum = Math.floor(Math.random() * 2)
            identifier += choices[currentNum][Math.floor(Math.random() * choices[currentNum].length)]
            i++
        }
        identifier = identifier.toLowerCase()
        const checkIdentifier = await Link.findOne({ identifier })
        if (checkIdentifier) return res.json({
            success: false,
            message: "Internal Server Error, Please try again"
        })

        next()

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}

export const createOneByIdentifier = async (req, res, next) => {
    try {
        const { identifier } = req.params
        const { link } = req.body
        const linkExist = await Link.findOne({ identifier })
        if (linkExist) return res.status(401).json({
            success: false,
            message: "URL already exists with this identifier, Link:" + req.protocol + '://' + req.get('host') + identifier,
        })

        next()
    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}
