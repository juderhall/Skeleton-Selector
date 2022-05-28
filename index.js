//Basic Interface Code
let numDisplay = document.querySelector("#numDisplay")

//Basic Increment Code 
incrementValue = 1

let incrementButton = document.querySelector("#incrementButton")

incrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/skelliesNum", incrementValue)
        .then(function (response) {
            numDisplay.innerHTML = response.data
        })      
})

//Basic Decrement Code
decrementValue = "-30"

let decrementButton = document.querySelector("#decrementButton")

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

//setInterval(setDecrementMode, 30000)

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
            
setInterval(decrement, 5000)

//Basic Decrement Off Code
decrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:false})
    decrementButton.innerHTML = "Decrement Mode is off"
    axios.get("http://localhost:4000/api/decrementMode")
        .then(function (response) {
            const {decrementMode} = response.data
        })
})

//Decrement Mode Button

let decrementButtonTwo = document.querySelector("#decrementButtonTwo")

decrementButtonTwo.addEventListener('click', () => {
    decrementButtonTwo.style.display = "none"
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:false})
})

function unhideButton() {
    decrementButtonTwo.style.display = "inline"
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:true})
}

setInterval(unhideButton, 5000)