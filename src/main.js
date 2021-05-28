import { iniciar } from './lib/vistas/plantillaInicio.js';
import { entrar } from './app.js';
import { registro } from './lib/vistas/plantillaRegistracion.js';
import { cambiarRuta } from './lib/enrutador.js';


// function registrar(){
//     let email = document.getElementById('email').value;
//     let contrasena = document.getElementById('contrasena').value;

//     firebase.auth().createUserWithEmailAndPassword(email, contrasena)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       console.log("your user is created");
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorMessage);
//       // ..
//     });
  
// }


const inicio = () => {
  document.getElementById('raiz').innerHTML = iniciar();
  const paraEntrar = document.getElementById("entrar");
  paraEntrar.addEventListener('click', entrar);
  window.addEventListener('hashchange', () => {
    document.getElementById('raiz').innerHTML = registro();
    // myFunction();
    cambiarRuta(window.location.hash);
    // generateRegisterListener();
  });
};

window.addEventListener('load', inicio);