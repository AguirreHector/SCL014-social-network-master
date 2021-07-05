import { iniciar } from './vistas/plantillaInicio.js';
import { registro } from './vistas/plantillaRegistracion.js';
import { muro } from './vistas/plantillaMuro.js';
// import { entrar, registrar } from '../app.js';
// import { feed } from './vistas/templateFeed.js';
// import { post } from './vistas/templatePost.js';
// import { detailsRcp } from './vistas/templateDetailsRcp.js';




export const selector = (direccion) => {

    switch (direccion) {
        case '#/entrar':
            contenedorRaiz.appendChild(iniciar());
            break;
        case '#/registro':
            contenedorRaiz.appendChild(registro());
            break;
        case '#/muro':
            contenedorRaiz.appendChild(muro());
            break;
        default:
            contenedorRaiz.appendChild(iniciar());
            break;
        }
    };

