import { getJwt } from "../data/jwt.js"

export const redirectUrl = async (req, res, next) => {

    try {
        const { identifier, absolute_path, url } = req.link

        console.log(identifier, absolute_path, url)

        // res.status(500).json({
        //     identifier,
        //     absolute_path,
        //     link
        // })

        res.redirect(getJwt(url))

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}