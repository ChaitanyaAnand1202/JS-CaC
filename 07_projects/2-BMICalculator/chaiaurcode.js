const form = document.querySelector("form")
// result.innerText = "hello there"

const button = document.querySelector("#button")

const result2 = document.createElement('div')
form.querySelector("#weight-guide").appendChild(result2)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter proper height: ${height}`
    } else if(weight ===  '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter proper weight: ${weight}`
    } else {
        const bmi = (weight/(height*height)*10000).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        
        result2.innerText = `${( (bmi) => {
            if (bmi < 18.6) return "UnderWeight";
            else if(bmi < 24.9) return "NormalWeight";
            else return "OverWeight";
        } )(bmi)}`

    }

})