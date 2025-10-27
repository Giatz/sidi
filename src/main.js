import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import headerModule from './components/header.js'
import searchBarModule from './components/buscador.js'

document.querySelector('#app').innerHTML = `
${headerModule}  
${searchBarModule}

`

setupCounter(document.querySelector('#counter'))
