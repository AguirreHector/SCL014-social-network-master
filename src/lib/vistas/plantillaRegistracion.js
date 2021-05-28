export const registro = () => {
    const registro = document.createElement('div');
    const formularioRegistro = `<div class="contenedor">
    <div class="encabezado">
        <h2 class="logo">petsitter</h2>
        <a href=""></a>
    </div>
    <div class="cuerpo">
        <h3 class="declaracion">Petsitter conecta a cuidadores con ese integrante no humano de la familia al que tanto queres</h3>
        <input id="nombreRegistro" type="nombre" placeholder="nombre">
        <input id="emailRegistro" type="email" placeholder="correo electrónico">
        <input id="contrasenaRegistro" type="password" placeholder="contraseña">
        <button id="entrar">Registrarme</button>

    </div>
</div>
    `

    registro.innerHTML = formularioRegistro;
    return registro;
}