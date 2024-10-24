class Login {
  constructor() {}
  Registrar() {
    const email = document.querySelector(".correo");
    const password = document.querySelector(".contraseña");
    const button = document.querySelector(".btn-enviar");
    const resultado = document.querySelector(".resultado");

    button.addEventListener("click", (e) => {
      e.preventDefault();
      let error = Menu.ValidarUsuario();
      if (error[0]) {
        alert(error[1]);
        resultado.innerHTML = error[2];
        resultado.classList.add("red");
      } else {
        alert("Solicitud enviada correctamente");
      }
    });
  }
  ValidarUsuario() {
    const email = document.querySelector(".correo");
    const password = document.querySelector(".contraseña");
    const button = document.querySelector(".btn-enviar");
    const resultado = document.querySelector(".resultado");
    

    let error = [];

    if (
      (email.value.indexOf("@") == -1 )&&
      (email.value.indexOf(".") == -1) &&
      ((email.value.indexOf("com") == -1))
    ) {
      error[0] = true;
      error[1] =
        "Introduzca una dirreccion de correo que sea valida";

      error[2] = "Email invalido";

      return error;
    } else if (password.value.length < 8) {
      error[0] = true;
      error[1] = "La contraseña debe contar con mas de 8 caracteres";
      error[2] = "La contraseña debe de contar con los carateres requeridos ";
      return error;
    } else if (password.value.length > 16) {
      error[0] = true;
      error[1] = "El correo no puede tener mas de 16 carateres";
      error[2] = "La contraseña debe de contar con los carateres requeridos ";
      return error;
    }
    error[0] = false;
    return error;
  }
}
const Menu = new Login();

Menu.Registrar();
