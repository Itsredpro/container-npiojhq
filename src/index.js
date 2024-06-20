const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("<h1>omg</h1>")
})

app.get("/health", (req, res) => {
  res.send("yes")
})


app.listen(80, () => {
  console.log(`Example app listening on port ${port}`)
})
