console.log('Project 5');

let isFirstPress = true;

const makeTable = function(){
  document.querySelector("#insert").innerHTML += 
  `<table>
  <tr>
    <th>Key</th>
    <th>Code</th>
    <th>KeyCode</th>
  </tr>
</table>`
}

window.addEventListener('keydown', function(e){
  if (isFirstPress){
    makeTable()
    isFirstPress = false
  }
  this.document.querySelector("table").innerHTML +=
  `<tr>
    <th>${e.key}</th>
    <th>${e.code}</th>
    <th>${e.keyCode}</th>
  </tr>`
})