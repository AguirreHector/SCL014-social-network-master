export const iniciar = () => {
    const logueos = document.createElement('div');
    const mostrarLogueos = `<div class="contenedor">
    <div class="encabezado">
        <h2 class="logo">petsitter</h2>
        <a href=""></a>
    </div>
    <div class="cuerpo">
        <h3 class="declaracion">Petsitter conecta a cuidadores con ese integrante no humano de la familia al que tanto queres</h3>
        <input id="email" type="email" placeholder="correo electrónico">
        <input id="contrasena" type="password" placeholder="contraseña">
        <a href="#/muro"><button id="entrar">Entrar</button></a>
        <p>¿Has olvidado tu contraseña?</p>
        <a href="#/registro"><button id="crearCuenta">Crear cuenta</button></a>
        <button id="entrarConGmail">Entrar con Gmail</button>

    </div>
</div>
    `

    logueos.innerHTML = mostrarLogueos;
    
    return mostrarLogueos;
}