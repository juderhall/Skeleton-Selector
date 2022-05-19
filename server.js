const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.text({type:"*/*"}));

let skelliesNum = [0]
let decrementMode = false

app.put("/api/skelliesNum", (req, res) => {
    let incrementValue = req.body
    incrementValue = parseInt(incrementValue)
    skelliesNum = skelliesNum + incrementValue
    res.sendStatus(200)
})

//cannot figure out how to send data
app.get("/api/skelliesNum", (req, res) => {
})

app.listen(4000, () => console.log("App running on port 4000"))

