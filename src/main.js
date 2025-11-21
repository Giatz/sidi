
import 'bootstrap/dist/css/bootstrap.min.css';

import { getAreasConocimiento, getDivision, updateDepartamento, search } from './components/buscador.js';

//import './style.css'
//import { setupCounter } from './counter.js'


import { headerView } from './components/header.js'
import { searchView } from './components/buscador.js'
import { resultView, returnToSearch } from './components/resultsView.js'
import { detailView } from './components/detailView.js'
import { viewProfile } from './components/profile.js';

const app = document.querySelector('#app');

//let currentView = 'searchView';

// Agregar las vistas al DOM
app.appendChild(headerView);
app.appendChild(searchView);
app.appendChild(resultView);
app.appendChild(detailView);


// Inicializar el filtro
document.addEventListener('DOMContentLoaded', getAreasConocimiento)
document.addEventListener('DOMContentLoaded', getDivision)

// Configurar los event listeners
document.getElementById('filterDivision').addEventListener('change', () => {
    updateDepartamento();
});
document.getElementById('buttonSearch').addEventListener('click', () => {
    search();
});
document.getElementById('buttonBack').addEventListener('click', () => {
    returnToSearch();
});


