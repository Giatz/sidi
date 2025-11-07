import { getHandler } from './handler.js';
import { showView } from './views.js';
import { randomColor, colorSchema } from '../utils/colorSchema.js';

const api = import.meta.env.VITE_API_ROUTE || 'http://localhost:3000/';
/* 
export const search = `
    <div id="searchView" class="view">
            <div class="bg-white p-6 md:p-10 rounded-xl shadow-lg">
                <h2 class="text-2xl font-bold mb-6 text-blue-700">Filtros de la busqueda</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Buscador -->
                    <div class="md:col-span-12">
                        <label for="buscadorInput" class="block text-sm font-medium text-gray-700 mb-1">Buscar por Nombre o Titulo de la Investigación</label>
                        <input type="text" id="buscadorInput" placeholder="Ej: Aguilar, Biología, Sociales..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                    </div>
                    <!-- Filtro principal -->
                    <div>
                        <label for="filterArea" class="block text-sm font-medium text-gray-700 mb-1">Area de conocimiento</label>
                        <select id="filterArea" class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                            <option value="">-- Seleccione Area de Conocimiento --</option>
                            <option value="Guanajuato"> Campus Guanajuato </option>
                            <option value="Leon"> Campus León </option>
                        </select>
                     </div>
                    <!-- Filtro secundario -->
                     <div>
                        <label for="filterDivision" class="block text-sm font-medium text-gray-700 mb-1">División</label>
                        <select id="filterDivision" onchange="updateDepartamento()" class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                            <option value="">-- Seleccione División --</option>
                        </select>
                     </div>
                     <!-- Filtro terciario (Eliminar de aqui y ver su posible uso en los resultados)-->
                      <div>
                        <label for="filterDepartamento" class="block text-sm font-medium text-gray-700 mb-1">Departamento</label>
                        <select id="filterDepartamento" class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                            <option value="">-- Seleccione Departamento --</option>
                        </select>
                      </div>                      
                </div>
                <!-- Button -->
                <div class="mt-8 text-center">
                    <button onclick="search()" class="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 transform hover:scale-[1.01]">
                        Buscar Investigadores
                    </button>
                </div>
            </div>
        </div>
`; */  

export const searchView = document.createElement('section');
searchView.className = 'view';
searchView.id = 'searchView';
searchView.innerHTML = `
    <div class="bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6 text-blue-700">Filtros de la busqueda</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Buscador -->
            <div class="md:col-span-12">
                <label for="buscadorInput" class="block text-sm font-medium text-gray-700 mb-1">Buscar por Nombre o Titulo de la Investigación</label>
                <input type="text" id="buscadorInput" placeholder="Ej: Aguilar, Biología, Sociales..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150">
            </div>
            <!-- Filtro principal -->
            <div>
                <label for="filterArea" class="block text-sm font-medium text-gray-700 mb-1">Area de conocimiento</label>
                <select id="filterArea" class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                    <option value="">-- Seleccione Area de Conocimiento --</option>
                    <option value="Guanajuato"> Campus Guanajuato </option>
                    <option value="Leon"> Campus León </option>
                </select>
            </div>
            <!-- Filtro secundario -->
            <div>
                <label for="filterDivision" class="block text-sm font-medium text-gray-700 mb-1">División</label>
                <select id="filterDivision" class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                    <option value="">-- Seleccione División --</option>
                </select>
            </div>
            <!-- Filtro terciario (Eliminar de aqui y ver su posible uso en los resultados)-->
            <div>
                <label for="filterDepartamento" class="block text-sm font-medium text-gray-700 mb-1">Departamento</label>
                <select id="filterDepartamento" class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150">
                    <option value="">-- Seleccione Departamento --</option>
                </select>
            </div>
        </div>
        <!-- Button -->
        <div class="mt-8 text-center">
            <button id="buttonSearch" class="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 transform hover:scale-[1.01]">
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
            
            card.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden';
            card.innerHTML = `
            <div class="flex flex-col sm:flex-row p-5 items-start sm:items-center">
                <!-- Imagen/Avatar -->
                <img src="https://placehold.co/100x100/${colors.fondo}/${colors.texto}?text=${researcher.nombre.slice(0,2).toUpperCase()}" alt="Foto de ${researcher.nombre}" 
                class="w-24 h-24 rounded-full object-cover mr-4 mb-4 sm:mb-0 border-4 border-blue-100">
                
                <!-- Main Info -->
                <div class="flex-grow">
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