export const redirectUrl = async (req, res, next) => {

    try {
        const { identifier, absolute_path, link } = req.link

        console.log(identifier, absolute_path, link)

        // res.status(500).json({
        //     identifier,
        //     absolute_path,
        //     link
        // })

        res.redirect(link)

    } catch (err) {
        res.status(401).json({ status: "Error", message: err.message })
    }
}