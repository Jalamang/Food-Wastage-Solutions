const app = require("./app.js")

// const dotenv = require("dotenv")
// dotenv.config()

const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log("The server is started on " + PORT)
)