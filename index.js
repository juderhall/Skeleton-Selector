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
let redO = document.querySelector('#redO')
let redX = document.querySelector('#redX')

decrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:false})
    redO.style.display = "none"
    redX.style.display = "inline"
    setTimeout(() => decrementButton.style.display = "none", 500)
})

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
    
function unhideButton() {
    if (decrementButton.style.display === "none") {
        redO.style.display = "inline"
        redX.style.display = "none"
        decrementButton.style.position = "absolute"
        decrementButton.style.display = "inline"
        decrementButton.style.top = Math.floor(Math.random() * window.innerHeight) + 'px'
        decrementButton.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'
        axios.put("http://localhost:4000/api/decrementMode", {decrementMode:true})
    }
}

setInterval(decrement, 5000)
setInterval(unhideButton, 3000)

