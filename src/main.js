//import './style.css'
//import { setupCounter } from './counter.js'


import { headerView } from './components/header.js'
import { searchView } from './components/buscador.js'
import { resultView } from './components/resultaView.js'
import { detailView } from './components/detailView.js'

const app = document.querySelector('#app');

app.appendChild(headerView);
app.appendChild(searchView);
/* .innerHTML = `  
${searchView}
${resultView}
${detailView}
` */



//setupCounter(document.querySelector('#counter'))

//document.getElementById('filterDivision').addEventListener('change', updateDepartamento('filterDivision'));
