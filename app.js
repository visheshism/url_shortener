import Express from "express"
import mainRouter from "./router/mainRouter.js"

export const app = Express()

// Middlewares
app.use(Express.json())
app.use(mainRouter)



// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Invalid Request"
    })
})


app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});



