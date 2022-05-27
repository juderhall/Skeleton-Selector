const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.text({type:"*/*"}));

let skelliesNum = 0
let decrementMode = false

app.get("/api/skelliesNum", (req, res) => {
    res.status(200).send({skelliesNum})
})

app.put("/api/skelliesNum", (req, res) => {
    let changeValue = req.body
    if (changeValue === 'object') {
        console.log("gay panic")
    } 
    console.log(changeValue)
    changeValue = parseInt(changeValue)
    console.log(changeValue)
    skelliesNum = skelliesNum + changeValue
    console.log(skelliesNum)
    res.status(200).send(skelliesNum.toString())
})

app.get("/api/decrementMode", (req, res) => {
    res.status(200).send({decrementMode})
})

app.put("/api/decrementMode", (req, res) => {
    let changeDecrementMode = req.body.decrementMode
    decrementMode = changeDecrementMode
    console.log(decrementMode)
    res.sendStatus(200)
})



app.listen(4000, () => console.log("App running on port 4000"))

