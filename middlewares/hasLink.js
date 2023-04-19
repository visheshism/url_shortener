export const hasLink = (req, res, next) => {
    const { link } = req.body

    if (link === null) return res.json({
        success: false,
        message: "Link missing"
    })

    next()
}