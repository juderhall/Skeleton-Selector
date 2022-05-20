const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.text({type:"*/*"}));

let skelliesNum = 0
let decrementMode = false

app.get("/api/skelliesNum", (req, res) => {
    res.status(200).send({skelliesNum})
})

app.put("/api/skelliesNum", (req, res) => {
    let incrementValue = req.body
    incrementValue = parseInt(incrementValue)
    skelliesNum = skelliesNum + incrementValue
    res.sendStatus(200)
})

app.get("/api/decrementMode", (req, res) => {
    console.log(decrementMode)
    res.status(200).send({decrementMode})
})

app.put("/api/decrementMode", (req, res) => {
    let decrementMode = red.body
})



app.listen(4000, () => console.log("App running on port 4000"))

