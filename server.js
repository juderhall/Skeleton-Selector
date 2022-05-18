const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.text({type:"*/*"}));

let skelliesNum = 0
let decrementMode = false

app.put("/api/skelliesNum", (req, res) => {
    console.log(req.body)
    let incrementValue = req.body
    console.log(incrementValue)
    incrementValue = parseInt(incrementValue)
    console.log(incrementValue)
    skelliesNum = skelliesNum + incrementValue
    console.log(skelliesNum)
    res.sendStatus(200)
})

app.listen(4000, () => console.log("App running on port 4000"))

