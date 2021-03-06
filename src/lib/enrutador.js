import { inicial } from './vistas/plantillaInicial.js';
// import { entrar, registrar } from '../app.js';
import { registro } from './vistas/plantillaRegistracion.js';
import { muro } from './vistas/plantillaMuro.js';
import { inicial2 } from './vistas/plantillaInicial2.js';
// import { feed } from './vistas/templateFeed.js';
// import { post } from './vistas/templatePost.js';
// import { detailsRcp } from './vistas/templateDetailsRcp.js';

const mostrarPlantilla = (direccion) => {
    const contenedorRaiz = document.getElementById('raiz');
    contenedorRaiz.innerHTML = '';

    switch (direccion) {
        case '#/entrar':
            contenedorRaiz.appendChild(inicial());
            break;
        case '#/registro':
            contenedorRaiz.appendChild(registro());
            break;
        case '#/muro':
            contenedorRaiz.appendChild(muro());
            break;
        case '#/inicial2':
            contenedorRaiz.appendChild(inicial2());
        default:
            inicial2();
            break;
        }
    };


export const cambiarRuta = (direccion) => {
    return mostrarPlantilla(direccion);
};
