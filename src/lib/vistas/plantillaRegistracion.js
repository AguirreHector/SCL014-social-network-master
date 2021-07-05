export const registro = () => {
    const registro = document.createElement('div');
    const formularioRegistro = `
    <div class="encabezado">
        <a href="#/inicial2" class="aLogo"><h2 class="logo">petsitter</h2></a>
    </div>
    <div class="contenedor">
        <div class="cuerpo">
            <h3 class="invitaRegistro">Este registro te llevará sólo unos segundos.</h3>
            <div class="contieneFormularioRegistro">
                <input id="nombreRegistro" type="text" placeholder="nombre">
                <input id="emailRegistro" type="email" placeholder="correo electrónico">
                <input id="contrasenaRegistro" type="password" placeholder="contraseña">
                <input id="repiteContrasenaRegistro" type="password" placeholder="repite tu contraseña">
                <a href="#/inicial2"><button id="registrarme" class="boton">Registrarme</button></a>
            </div>
        </div>
    </div>
    `

    registro.innerHTML = formularioRegistro;
    return registro;
}