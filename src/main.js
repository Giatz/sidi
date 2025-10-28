//import './style.css'
//import { setupCounter } from './counter.js'

import headerModule from './components/header.js'
import searchBarModule from './components/buscador.js'
import resultView from './components/resultaView.js'
import detailView from './components/detailView.js'

document.querySelector('#app').innerHTML = `
${headerModule}  
${searchBarModule}
${resultView}
${detailView}
`



//setupCounter(document.querySelector('#counter'))

//document.getElementById('filterDivision').addEventListener('change', updateDepartamento('filterDivision'));
