console.log("Hello");
function getColor(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for (let index = 0; index < 6;index++) {
    color += hex[Math.floor(Math.random()*16)]    
  }
  return color;
}

let intervalId;

document.querySelector("#start").addEventListener("click", function(){
  intervalId = setInterval(function(){
    document.querySelector('body').style.backgroundColor = getColor()
  }, 1000)
})

document.querySelector("#stop").addEventListener("click", function(){
  clearInterval(intervalId)
  document.querySelector("body").style.backgroundColor = "#212121"
  console.log("stopped");
})