let validoUsuario = document.getElementById('formulario__input__usuario')
let validoContraseña = document.getElementById('formulario__input__clave')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  if (validoUsuario.value === '' || validoUsuario.value == null){
    messages.push("Falta el nombre y/o el arroba. Por favor, introduzcalo")
  }
  if (validoContraseña.value.length <= 3) {
    messages.push("la contraseña debe tener más de 3 caracteres")
  } 
  if (!validoUsuario.value.includes("@")){
    messages.push("falta arroba")
  } 
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join("" + "\n"+ "y/o ")
  }
})



