import { getHandler } from './handler.js';
import { showView } from '../utils/views.js';
import { randomColor, colorSchema } from '../utils/colorSchema.js';

const api = import.meta.env.VITE_API_ROUTE;

export const searchView = document.createElement('section');
searchView.className = 'row';
searchView.id = 'searchView';
searchView.innerHTML = `
    <div>
        <h2>Filtros de la busqueda</h2>
        <div class="row">
            <!-- Buscador -->
            <div class="mb-4">
                <label for="buscadorInput" class="form-label">Buscar por Nombre o Titulo de la Investigación</label>
                <input type="text" id="buscadorInput" placeholder="Ej: Aguilar, Biología, Sociales..." class="form-control">
            </div>
            <!-- Filtro principal -->
            <div class="col-4 mb-4">
                <label for="filterArea" class="form-label">Area de conocimiento</label>
                <select id="filterArea" class="form-select">
                    <option value="">-- Seleccione Area de Conocimiento --</option>
                    <option value="Guanajuato"> Campus Guanajuato </option>
                    <option value="Leon"> Campus León </option>
                </select>
            </div>
            <!-- Filtro secundario -->
            <div class="col-4 mb-4">
                <label for="filterDivision" class="form-label">División</label>
                <select id="filterDivision" class="form-select">
                    <option value="">-- Seleccione División --</option>
                </select>
            </div>
            <!-- Filtro terciario (Eliminar de aqui y ver su posible uso en los resultados)-->
            <div class="col-4 mb-4">
                <label for="filterDepartamento" class="form-label">Departamento</label>
                <select id="filterDepartamento" class="form-select">
                    <option value="">-- Seleccione Departamento --</option>
                </select>
            </div>
        </div>
        <!-- Button -->
        <div style="display: flex; justify-content: center;">
            <button id="buttonSearch" class="btn btn-primary">
            Buscar Investigadores
            </button>
        </div>
    </div>
`;

export function getAreasConocimiento() {
    const areaSelect = document.getElementById('filterArea');
    areaSelect.innerHTML = '<option value="">-- Seleccione Area de Conocimiento --</option>';
    getHandler(api, 'areas_conocimiento', (result) => {

        if(result) {
            result.forEach(area => {
            const option = document.createElement('option');
            option.value = area.id;
            option.textContent = area.area;
            areaSelect.appendChild(option);
        })
    }
    })
}

export function getDivision() {
    //const campus = document.getElementById('filterCampus').value;
    const divisionSelect = document.getElementById('filterDivision');
    divisionSelect.innerHTML = '<option value="">-- Seleccione División --</option>'

    getHandler(api, `divisiones`, (divisiones) => {

        if(divisiones.length > 0) {
            divisiones.forEach(division => {
                const option = document.createElement('option');
                option.value = division.id;
                option.textContent = division.division;
                divisionSelect.appendChild(option);
            })
        }
    })
}

export function updateDepartamento() {
    const division = document.getElementById('filterDivision').value;
    const departamentoSelect = document.getElementById('filterDepartamento');
    departamentoSelect.innerHTML = '<option value="">-- Seleccione Departamento --</option>'

    getHandler(api, `departamentos/division/${division}`, (departamentos) => {
        if(division && departamentos.length > 0) {
            departamentos.forEach(departamento => {
                const option = document.createElement('option');
                option.value = departamento.id;
                option.textContent = departamento.departamento;
                departamentoSelect.appendChild(option);
            })
        }
    })
    
}

export function search() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML= '';
    resultsContainer.className = 'row justify-content-around';

    const area = document.getElementById('filterArea').value;
    const division = document.getElementById('filterDivision').value;
    const departamento = document.getElementById('filterDepartamento').value;

    if(area && division && departamento) {
        console.log(`${area}, ${division}, ${departamento}`)
    }

    getHandler(api, `investigadores/area/${area}`, (researchersData) => {

        document.getElementById('resultCount').textContent = researchersData.length;
    
        researchersData.forEach(researcher => {
            const card = document.createElement('div');
            let colors = randomColor(colorSchema);
            
            card.className = 'card col-5 mt-2';
            card.innerHTML = `
            <div class="row card-body">
                <!-- Imagen/Avatar -->
                <img src="https://placehold.co/100x100/${colors.fondo}/${colors.texto}?text=${researcher.nombre.slice(0,2).toUpperCase()}" alt="Foto de ${researcher.nombre}" 
                class="col-2">
                
                <!-- Main Info -->
                <div class="col-10">
                    <h3 class="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer" onclick="viewProfile(${researcher.id})">
                    ${researcher.nombre}
                    </h3>
                    <p class="text-md text-blue-600 font-semibold mb-1">SNII ${researcher.snii}</p>
                    <p class="text-sm text-gray-500 mb-2">
                        <span class="font-medium">${researcher.departamento}</span> | 
                        <span class="font-light">${researcher.area}</span>
                    </p>
                    <!--<p class="text-sm text-gray-700 mt-2 line-clamp-2">${researcher.summary}</p>-->
                    <!-- Button FullProfile -->
                    <button onclick="viewProfile(${researcher.id})" 
                    class="mt-3 text-sm px-4 py-1 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition duration-150">
                    Ver Perfil Completo
                    </button>
                </div> 
            </div>
            `;
            resultsContainer.appendChild(card);
            showView('resultsView');
        })
    } )
    
}
