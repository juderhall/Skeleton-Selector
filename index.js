let numDisplay = document.querySelector("#numDisplay")
let incrementButton = document.querySelector("#incrementButton")
let decrementButton = document.querySelector("#decrementButton")

incrementValue = 1

incrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/skelliesNum", incrementValue) 
    axios.get("http://localhost:4000/api/skelliesNum")
        .then(function (response) {
            const {skelliesNum} = response.data
            console.log(skelliesNum)
            numDisplay.innerHTML = skelliesNum
        })      
})

//setInterval(setDecrementMode, 30000)

/*
function setDecrementMode() {
    axios.get("http://localhost:4000/api/decrementMode")
        .then(function (response) {
            const {decrementMode} = response.data
            console.log(decrementMode)
            if (decrementMode === false) {
                axios.put("http://localhost:4000/api/decrementMode", true)
                decrementButton.innerHTML = "Decrement Mode is On"
            }
        })
}
*/

decrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/decrementMode", false)
    decrementButton.innerHTML = "Decrement Mode is off"
    axios.get("http://localhost:4000/api/decrementMode")
        .then(function (response) {
            const {decrementMode} = response.data
            console.log(decrementMode)
        })
    })