
const form = document.getElementById("myForm")

form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    
    let _data = {
        data :  { 
            "area":parseInt(document.getElementById("area").value),
            // "property-type":document.getElementsByName("proptype").value,
            "property-type":document.getElementById("proptype").value,
            "rooms-number":parseInt(document.getElementById("numrooms").value),
            "zip-code":parseInt(document.getElementById("zipcode").value)
        }
    }

    console.log(_data)

    fetch('https://roberta-eliza-cors.herokuapp.com/predict',{
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        alert(json.prediction.price)
    })
    .catch((err) => console.log(err));

})


