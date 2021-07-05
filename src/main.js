import { inicial } from './lib/vistas/plantillaInicial.js';
import { inicial2 } from './lib/vistas/plantillaInicial2.js';
import { registrar } from './lib/index.js';
import { registro } from './lib/vistas/plantillaRegistracion.js';
import { cambiarRuta } from './lib/enrutador.js';



const entrar = () => {
  const logueoFormulario = document.querySelector('#email');
  //const logueoConGoogle = document.querySelector('#entrarConGmail')

  if(logueoFormulario){

    //    logueoFormulario.addEventListener('submit', (evento) => {
      // evento.preventDefault();
      let email = document.getElementById('email').value;
      let contrasena = document.getElementById('contrasena').value;

      firebase.auth().signInWithEmailAndPassword(email, contrasena)
      .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("estas dentro");
      window.location.hash = ('#/muro');
      // ...
    })
      .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("hay bardo marido");
    });
  }
}








const inicio = () => {
  document.getElementById('raiz').innerHTML = inicial();

  window.addEventListener('hashchange', () => {
    if(window.location.hash==='#/muro'){
      entrar();
      cambiarRuta(window.location.hash);
      entrar();
    } else if (window.location.hash==='#/inicial2'){
      registrar();
      cambiarRuta(window.location.hash);
//      registrar();
    } else if (window.location.hash==='#/registroGmail'){
      registrarGmail();
      cambiarRuta(window.location.hash);
    } else {
      cambiarRuta(window.location.hash);
    }
  });
};


window.addEventListener('load', inicio)