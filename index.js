//Basic Interface Code
let numDisplay = document.querySelector("#numDisplay")
let userName = document.getElementById("userName")
let submitButton = document.querySelector("#submitButton")
let incrementButton = document.querySelector("#incrementButton")
let necromancerName = document.querySelector("#necromancerName")

submitButton.addEventListener('click', () => {
    let user = userName.value
    axios.post("http://localhost:4000/api/user", {user})
        .then(function (response) {
            console.log(response)
            necromancerName.innerHTML = response.data.user
        })
    setInterval(decrement, 5000)
    setInterval(unhideButton, 3000)
    incrementButton.disabled = false;
    console.log("increment Button disabled: " + incrementButton.disabled)
})

//Basic Increment Code 
incrementValue = 1

let blueO = document.querySelector('#blueO')
let blueX = document.querySelector('#blueX')

displayX = () => {
    blueO.style.display = "none"
    blueX.style.display = "inline"
}

displayO = () => {
    blueO.style.display = "inline"
    blueX.style.display = "none"
}

let incrementImgTimer = setTimeout(() => {displayO()}, 500) 

incrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/skelliesNum", incrementValue)
        .then(function (response) {
            numDisplay.innerHTML = response.data
        })  
    
    displayX()
    clearTimeout(incrementImgTimer)
    incrementImgTimer = setTimeout(() => {displayO()}, 500) 
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



