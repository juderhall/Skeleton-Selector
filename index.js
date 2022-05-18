let incrementButton = document.querySelector("#incrementButton")

incrementValue = 1

incrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/skelliesNum", incrementValue)       
})

