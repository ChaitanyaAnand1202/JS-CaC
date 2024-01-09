const clock = document.querySelector("#clock")
// clock.innerText = "Hello there"

setInterval(()=>{
    const time = new Date().toLocaleTimeString();
    clock.innerText = time
}, 1000)
