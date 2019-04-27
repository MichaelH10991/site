var express = require("express")
var app = express()
var path = require("path")
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/JSTut.html"))
})

app.use("/static", express.static(path.join(__dirname, "/public")))

app.listen(port)
