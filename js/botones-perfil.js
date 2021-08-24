var correo = "betancurbarrerasimon@gmail.com";
var telefono = "3023003612";


function funcioncorreo() {
    navigator.clipboard.writeText(correo);
    alert("Copied the text: " + correo);
  }

  function funciontelefono() {
    navigator.clipboard.writeText(telefono);
    alert("Copied the text: " + telefono);
  }