require("dotenv").config()

const express = require("express")

const port = process.env.PORT || 5005

const app = express()
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})