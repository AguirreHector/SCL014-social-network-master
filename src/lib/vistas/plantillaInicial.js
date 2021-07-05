export const inicial = () => {
    const logueoInicial = document.createElement('div');
    const muestraLogueoInicial = `
    <div class="encabezado">
        <a href="#/inicial2" class="aLogo"><h2 class="logo">petsitter</h2></a>
    </div>
    <div class="contenedor">
        <div class="cuerpo">
            <h3 class="declaracion">Petsitter conecta a cuidadores con ese integrante no humano de la familia al que tanto queres</h3>
            <div class="ingresoPrimero">
                <input id="email" type="email" placeholder="correo electrónico">
                <input id="contrasena" type="password" placeholder="contraseña">
                <a href="#/muro"><button id="entrar" class="boton">ENTRAR</button></a>
                <p class="hasOlvidado">¿Has olvidado tu contraseña?</p>
            </div>
            <div class="ingresoSegundo">
                <a href="#/registro"><button id="crearCuenta" class="boton crearCuenta">CREAR CUENTA</button></a>
                <a href="#/registroGmail"><button id="entrarConGmail" class="boton entrarGmail">ENTRAR CON GMAIL</button></a>
            </div>
        </div>
    </div>
    `
    logueoInicial.innerHTML = muestraLogueoInicial;
    return muestraLogueoInicial;
}
