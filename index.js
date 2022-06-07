//Basic Interface Code
let numDisplay = document.querySelector("#numDisplay")
let userNameInput = document.getElementById("userNameInput")
let submitButton = document.querySelector("#submitButton")
let incrementButton = document.querySelector("#incrementButton")
let necromancerName = document.querySelector("#necromancerName")
let userNamePopup = document.querySelector('#userNamePopup')
let hidingLayer = document.querySelector('#hidingLayer')
let arena = document.querySelector("#arena")

submitButton.addEventListener('click', () => {
    let user = userNameInput.value
    axios.post("http://localhost:4000/api/user", {user})
        .then(function (response) {
            console.log(response)
            necromancerName.innerHTML = response.data.user
        })
    userNamePopup.classList.add("hidden")
    hidingLayer.classList.add("hidden")
    setInterval(decrement, 5000)
    setInterval(unhideButton, 3000)
    incrementButton.disabled = false;
})

//Basic Increment Code 
incrementValue = 1

let necromancer = document.querySelector('#necromancer')
let activatedNecromancer = document.querySelector('#activatedNecromancer')

displayX = () => {
    necromancer.style.display = "none"
    activatedNecromancer.style.display = "inline"
}

displayO = () => {
    necromancer.style.display = "inline"
    activatedNecromancer.style.display = "none"
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
let paladin = document.querySelector('#paladin')
let attackingPaladin = document.querySelector('#attackingPaladin')
let deadPaladin = document.querySelector('#deadPaladin')

decrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/decrementMode", {decrementMode:false})
    paladin.style.display = "none"
    deadPaladin.style.display = "inline"
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
        if (deadPaladin.style.display != "inline") {
            paladin.style.display = "none"
            attackingPaladin.style.display = "inline"
            setTimeout(() => {
                paladin.style.display = "inline",
                attackingPaladin.style.display = "none"
            }, 500)
        } 
}    
    
function unhideButton() {
    if (decrementButton.style.display === "none") {
        paladin.style.display = "inline"
        deadPaladin.style.display = "none"
        decrementButton.style.position = "absolute"
        decrementButton.style.display = "inline"
        decrementButton.style.top = Math.floor((Math.random() * window.innerHeight)) - 150 + 'px'
        decrementButton.style.left = Math.floor((Math.random() * window.innerWidth)) - 150 + 'px'
        axios.put("http://localhost:4000/api/decrementMode", {decrementMode:true})
    }
}

 



