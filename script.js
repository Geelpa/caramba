function changeColor () {
  let color = document.getElementById('cor').value;
  document.body.style.backgroundColor = color;
}

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
  
  button.addEventListener("click", function(){
    var dice20 = document.getElementById("placeholder")
    var d20 = Math.floor(Math.random () * 20) +1;
    dice20.innerHTML = d20
    
    var newMessage = document.createElement("ul");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = (d20);
    var resultado = (newMessage )
    resultado.innerText = (d20)
    
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play()
      } else {
        audio.currentTime = 0
      } 
});

function del () {
  const seletor = document.querySelector(".myMessages")
  seletor.removeChild(messages.lastElementChild);
}
function delAll () {
  const select = document.querySelector(".myMessages")
  while (select.firstChild) {
    select.removeChild(select.firstChild)
}}
