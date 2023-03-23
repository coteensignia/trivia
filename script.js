const register = document.getElementById("register") // llamar id register y trivia, revisando en todo el html, y se almacena en la constante y luego se llama abajo
const trivia = document.getElementById("trivia")

trivia.style.display = "none";
//metodo style escribe en el html

function start() {
  let nombre = document.getElementById("name").value
  register.style.display = "none";
  trivia.style.display = "block";
  alert("Hola"+ " " + nombre + " " + "Para jugar, debes escoger las dos alternativas correctas que se mostraran a continuacion");
}
// al hacer click le pegamos los estilos para que se vea o no, llamando a las constantes de arriba
//v:excelente :) cote

let boton = document.getElementById("send")
boton.addEventListener("click",send)
function send() {
  if (document.getElementById("correct").checked)
    alert('Felicidades! Arepa y Papa son las respuestas correcta');  
  else 
    alert ("Tu respuesta es incorrecta, intentalo nuevamente");
}

function reset() {
  location.reload();
  
}

// erfectooo lo entendi ....tenemos que meter esta funcion que la haga un bton....lo unico que cuandoncargas como que aparece entero yo creo que deberiamos hacerlo con el inner que dojeron ellos ademas por que... ese hace un recorrido por todo el html
//V: falta crear otro boton para reiniciar el juego donde se vuelve a la pantalla donde se escribe el nombre LISTO!

//v:cote, ahora estoy trabajando en el read.md  para documentar el proceso, lo agregue a file
