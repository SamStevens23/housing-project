const form = document.getElementById("myForm")

form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    
    let _data = {
        data :  { 
            "area":parseInt(document.getElementById("area").value),
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
        console.log(json.prediction.price)
        document.getElementById("prediction").innerHTML = "This would cost you about € " + json.prediction.price
        //check api doc for the architecture of objects
    })
    .catch((err) => console.log(err));
})


