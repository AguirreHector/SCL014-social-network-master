export const muro = () => {
    const muromuro = document.createElement('div');
    const mostrarMuro = `<div class="encabezado">
    <a href="#/inicial2" class="aLogo"><h2 class="logo">petsitter</h2></a>
    </div>
    <div class="contenedor">
        <p>acá iría el contenido del muro</p>
    </div>
        `

    muromuro.innerHTML = mostrarMuro;
    return muromuro;
}