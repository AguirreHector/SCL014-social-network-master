
export const entrar = () => {
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;

    firebase.auth().signInWithEmailAndPassword(email, contrasena)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("estas dentro");
    // ...
})
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("hay bardo maru");
    console.log("hay bardo marido");

});

}


export const registrar = () => {

    let emailRegistro = document.getElementById('emailRegistro').value;
    let contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
  
    console.log("sí entró acá");
    firebase.auth().createUserWithEmailAndPassword(emailRegistro, contrasenaRegistro)
    .then((userCredential) => {
      // Signed in
        var user = userCredential.user;
        console.log("TU USUARIO fue creado");
      // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("cagaste maru");
      // ..
    });
}





function observador(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

observador();