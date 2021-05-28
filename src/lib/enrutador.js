import { iniciar } from './vistas/plantillaInicio.js';
import { entrar, registrar } from '../app.js';
import { registro } from './vistas/plantillaregistracion.js';

// import { feed } from './vistas/templateFeed.js';
// import { post } from './vistas/templatePost.js';
// import { detailsRcp } from './vistas/templateDetailsRcp.js';

const mostrarPlantilla = (direccion) => {
    const contenedorRaiz = document.getElementById('raiz');
    contenedorRaiz.innerHTML = '';

    switch (direccion) {
        case '#/entrar':
            contenedorRaiz.appendChild(entrar());
            break;
        case '#/registro':
            contenedorRaiz.appendChild(registro());
            break;
        case '#/muro':
            // contenedorRaiz.appendChild(registrar());
            break;
        // case '#/post':
        //     containerRoot.appendChild(post());
        //     break;
        // case '#/detailsRcp':
        // // containerRoot.appendChild(register());

        //     containerRoot.appendChild(detailsRcp());
        //     break;
        default:
            contenedorRaiz.appendChild(iniciar());
        }
};

export const cambiarRuta = (direccion) => {
    if (direccion === '#/') {
        return mostrarPlantilla(direccion);
    }
     if (direccion === '#/entrar') {
        return mostrarPlantilla(direccion);
    } if (direccion === '#/registro') {
        return mostrarPlantilla(direccion);
  } if (direccion === '#/muro') {
    return mostrarPlantilla(direccion);
  } if (direccion === '#/post') {
    return mostrarPlantilla(direccion);
  } if (direccion === '#/detailsRcp') {
    return mostrarPlantilla(direccion);
      } return mostrarPlantilla(direccion);
};
