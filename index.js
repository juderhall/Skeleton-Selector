
let numDisplay = document.querySelector("#numDisplay")
let incrementButton = document.querySelector("#incrementButton")

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

