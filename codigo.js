function ValidarUsuario() {
  const button = document.getElementById("btn-enviar");
  const correo =document.getElementById("correo")
  const contraseña=document.getElementById("contraseña")
}
function Modal(){
  const codeHTML=`<div class='modal-background'>
  <div class='modal-menu '>
   <form class"form">
   <h1 class='text-center'>Registrate</h1>
   <input type='text'  class="form-input container input-1">
   <input type='email' class="form-input container input-2">
   <input type='submit' class="form-input container input-3">
   </form>
  </div>
  </div>`

  const body=document.getElementById("body").innerHTML+=codeHTML;
  const nombre=document.querySelector(".input-1").setAttribute("placeholder","Ingrese su nombre")
  const email=document.querySelector(".input-2").setAttribute("placeholder","Diga su correo electronico")
  const button=document.querySelector(".input-3").classList.add("btn-primary")

  const modal=document.querySelector(".modal-background")
  modal.style.animation="abrir 1s forwards"
  modal.classList.add("d-flex")
  

}
setTimeout(() => {
  Modal()
}, 6000);



