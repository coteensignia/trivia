function start() {
  let nombre = document.getElementById("name").value
  alert(nombre + " " + "elige las dos alternativas correctas para ganar");
}
let boton = document.getElementById("send")
boton.addEventListener("click",send)
function send() {
  if (document.getElementById("correct").checked)
    alert('Felicidades! Arepa y Papa son las respuestas correcta');
  
  else 
    alert ("Tu respuesta es incorrecta, intentalo nuevamente");
}

// erfectooo lo entendi ....tenemos que meter esta funcion que la haga un bton....lo unico que cuandoncargas como que aparece entero yo creo que deberiamos hacerlo con el inner que dojeron ellos ademas por que... ese hace un recorrido por todo el html

//document.getElementById("flag").style.display = "none"