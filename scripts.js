let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "ima/10.jpg") {
    miImage.setAttribute("src", "ima/20.png");
  } else {
    miImage.setAttribute("src", "ima/10.jpg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Gracias por ingresar, " + miNombre;
    }
  }
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Gracias por ingresar, " + nombreAlmacenado;
  }
miBoton.onclick = function () {
    estableceNombreUsuario();
  };