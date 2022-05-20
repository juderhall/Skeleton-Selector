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
    //cconsole.log(decrementMode)
    res.status(200).send({decrementMode})
})

app.put("/api/decrementMode", (req, res) => {
    let changeDecrementMode = req.body
    console.log(changeDecrementMode)
    console.log(req.body)
    //this bit of code makes console text... invisible?
    /*
    decrementMode = changeDecrementMode
    console.log(decrementMode)
    res.sendStatus(200)
    */
})



app.listen(4000, () => console.log("App running on port 4000"))

