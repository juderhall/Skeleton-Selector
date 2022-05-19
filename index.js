

let incrementButton = document.querySelector("#incrementButton")

incrementValue = 1

incrementButton.addEventListener('click', () => {
    axios.put("http://localhost:4000/api/skelliesNum", incrementValue) 
    axios.get("http://localhost:4000/api/skelliesNum")
        .then(function (response) {
            
        })      
})

