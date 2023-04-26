import { getJwt } from "../data/jwt.js"

export const redirectUrl = async (req, res, next) => {

    try {
        const { identifier, absolute_path, url } = req.link

        // res.status(200).json({
        //     identifier,
        //     absolute_path,
        //     link
        // })

        console.log(`Accessed ${getJwt(url).url} at /${identifier}`)
        res.redirect(getJwt(url).url)

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}