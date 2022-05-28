let numDisplay = document.querySelector("#numDisplay")
let incrementButton = document.querySelector("#incrementButton")
let decrementButton = document.querySelector("#decrementButton")

incrementValue = 1
decrementValue = "-30"

incrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/skelliesNum", incrementValue)
        .then(function (response) {
            numDisplay.innerHTML = response.data
        })      
})

setInterval(setDecrementMode, 10000)
setInterval(decrement, 5000)

function setDecrementMode() {
    axios.get("http://localhost:4000/api/decrementMode")
        .then(function (response) {
            const {decrementMode} = response.data
            if (decrementMode === false) {
                axios.put("http://localhost:4000/api/decrementMode", {decrementMode:true})
                decrementButton.innerHTML = "Decrement Mode is On"
            }
        })
}

function decrement() {
    axios.get("http://localhost:4000/api/decrementMode")
        .then(function (response) {
            const {decrementMode} = response.data
            if (decrementMode === true) {
                axios.put("http://localhost:4000/api/skelliesNum", {decrementValue})
                    .then(function (response) {
                        numDisplay.innerHTML = response.data
                    })
            }})
}    
            
decrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:false})
    decrementButton.innerHTML = "Decrement Mode is off"
    axios.get("http://localhost:4000/api/decrementMode")
        .then(function (response) {
            const {decrementMode} = response.data
        })
})