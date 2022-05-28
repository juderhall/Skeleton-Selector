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

decrementButton.addEventListener('click', () => {
    decrementButton.style.display = "none"
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:false})
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
    decrementButtonTwo.style.display = "inline"
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:true})
}

setInterval(decrement, 5000)
setInterval(unhideButton, 10000)



