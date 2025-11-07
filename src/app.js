import { getAreasConocimiento, getDivision, updateDepartamento, search } from './components/buscador.js';

//const api = import.meta.env.VITE_API_ROUTE;

//console.log(`API Route:, ${api}`);

let departamentosMap = {
    Guanajuato: ["DCEA", "DCNE", "DAAD", "DCSH", "DI", "DDPG"],
    Leon: ["DCS", "DCI", "DCSH"]
}

let areasMap = {
    DCEA: ["Contabilidad", "Sistemas de Información", "Gestión Organizacional"],
    DCNE: ["Química", "Biología"],
    DCSH: ["Ciencias Sociales"],
}

let researchersdata2 = [
    {
        id: 1,
        name: "Dra. Elara Ríos",
        title: "Investigadora Principal",
        department: "DCNE",
        area: "Química",
        summary: "Experta en el modelado de agujeros negros y la dinámica de galaxias distantes.",
        bio: "La Dra. Elara Ríos es una física teórica de renombre internacional con más de 20 años de experiencia, especializada en la comprensión de la materia oscura y la energía oscura. Su trabajo ha sido fundamental para la comunidad astronómica, publicando más de 50 artículos revisados por pares.",
        awards: ["Premio Nacional de Ciencias (2020)", "Medalla al Mérito Universitario (2018)", "Beca Guggenheim (2015)"],
        trajectory: ["Catedrática en MIT (2010-2015)", "Directora del Laboratorio de Astrofísica (2015-Actualidad)", "Postdoctorado en Caltech (2007-2010)"],
        publications: [
            { title: "Agujeros Negros y la Curvatura Espacio-Temporal", year: 2023, journal: "Revista de Astrofísica", doi: "doi:10.0001" },
            { title: "El Enigma de la Materia Oscura", year: 2021, journal: "Nature Astronomy", doi: "doi:10.0002" },
            { title: "Simulación de Estrellas de Neutrones", year: 2019, journal: "Physical Review D", doi: "doi:10.0003" }
        ],
        contact: { email: "elara.rios@ugto.mx", phone: "+52 55 1234 5678" },
        imageUrl: "https://placehold.co/100x100/1e3a8a/ffffff?text=ER"
    },
    {
        id: 2,
        name: "Ing. Marco León",
        title: "Profesor Adjunto",
        department: "DCEA",
        area: "Gestión Organizacional",
        summary: "Desarrollo de sistemas autónomos para la exploración ambiental en entornos hostiles.",
        bio: "El Ing. Marco León lidera proyectos de robótica aplicada, enfocándose en la inteligencia artificial y el aprendizaje automático para vehículos no tripulados. Es un innovador constante en el campo de la mecatrónica y la visión por computadora.",
        awards: ["Reconocimiento a la Innovación Tecnológica (2022)"],
        trajectory: ["Ingeniero de Software en Google (2018-2021)", "Profesor Adjunto en Robótica (2021-Actualidad)", "Maestría en Sistemas Autónomos (2018)"],
        publications: [
            { title: "Optimización de Ruta para Drones Autónomos", year: 2022, journal: "IEEE Transactions on Robotics", doi: "doi:10.0004" },
            { title: "Algoritmos de Visión por Computadora 3D", year: 2020, journal: "Journal of Intelligent & Robotic Systems", doi: "doi:10.0005" }
        ],
        contact: { email: "marco.leon@ugto.mx", phone: "+52 55 9876 5432" },
        imageUrl: "https://placehold.co/100x100/065f46/ffffff?text=ML"
            }
]


let currentView = 'searchView';



/* Manejador de vistas */
/*
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
    currentView = viewId;
}
*/
/* 
function getAreasConocimiento() {
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
 */
/*
function getDivision() {
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
*/
/*
function updateDepartamento() {
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
*/
/*
function search() {
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
*/


/* Detail Profile View */
/*
function viewProfile(researcherId) {
    const researcher = researchersdata.find(r => r.id === researcherId);
    const profileContent = document.getElementById('profileContent');

    if(!researcher){
        profileContent.innerHTML = '<p class="text-red-500">Investigador no encontrado.</p>';
        showView('profileView');
        return;
    }
    /* Contenido del profile */
    /*
    const publicationsHtml = researcher.publications.map(p => `
        <div class="mb-3 p-3 bg-gray-50 rounded-lg shadow-sm">
            <p class="text-gray-800 font-semibold">${p.title} (${p.year})</p>
            <p class="text-sm text-gray-600 italic">Publicado en: ${p.journal}</p>
            <p class="text-xs text-blue-500">${p.doi}</p>
        </div>
    `).join('');

    const awardsHtml = researcher.awards.map(a => `
        <li class="flex items-start mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H15V7a5 5 0 00-5-5zm0 2a3 3 0 013 3v2H7V7a3 3 0 013-3zm-3 8h6v4H7v-4z" />
            </svg>
            <span class="text-gray-700">${a}</span>
        </li>    
    `).join('');

    const trajectoryHtml = researcher.trajectory.map(t => `
        <li class="mb-3 text-gray-700 relative pl-6">
            <span class="absolute left-0 top-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            ${t}
        </li>
    `).join('');
*/
    //Estructura principal del perfil con dos columnas (Información principal y Contacto/General) 
    //Encabezado del Perfil 
/*
    profileContent.innerHTML = `
        <div class="flex flex-col md:flex-row items-center md:items-start pb-6 mb-8 border-b-2 border-blue-50">
            <img src="${researcher.imageUrl}" alt="Foto de ${researcher.name}" 
                class="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 border-4 border-blue-300 shadow-md">
            <div class="md:ml-6 text-center md:text-left">
                <h2 class="text-4xl font-extrabold text-gray-900">${researcher.name}</h2>
                <p class="text-xl font-semibold text-blue-700 mt-1">${researcher.title}</p>
                <p class="text-lg text-gray-500">${researcher.department} - ${researcher.area}</p>
            </div>
        </div>

        <!-- Columna Principal: Biografía, Trayectoria, Publicaciones, Premios -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-8">
                        
                <!-- Sección de Biografía -->
                <section class="profile-section pl-4">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Biografía y Enfoque de Investigación</h3>
                    <p class="text-gray-700 leading-relaxed">${researcher.bio}</p>
                </section>

                <!-- Sección de Trayectoria Académica -->
                <section class="profile-section pl-4">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Trayectoria Académica y Profesional</h3>
                    <ul class="space-y-2 list-none">
                        ${trajectoryHtml}
                    </ul>
                </section>
                        
                <!-- Sección de Publicaciones -->
                <section class="profile-section pl-4">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Publicaciones Destacadas</h3>
                    <div class="space-y-4">
                        ${publicationsHtml}
                    </div>
                </section>
            </div>
            <!-- Columna Lateral: Contacto y Premios -->
            <div class="lg:col-span-1 space-y-8">
                <!-- Sección de Contacto -->
                <section class="p-5 bg-blue-50 rounded-xl shadow-inner">
                    <h3 class="text-xl font-bold text-blue-800 mb-4">Datos de Contacto</h3>
                    <div class="space-y-2 text-gray-700">
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Correo: <a href="mailto:${researcher.contact.email}" class="ml-1 font-medium hover:underline">${researcher.contact.email}</a>
                        </p>
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.772-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Teléfono: ${researcher.contact.phone}
                        </p>
                    </div>
                </section>

                <!-- Sección de Premios -->
                <section class="p-5 bg-yellow-50 rounded-xl shadow-inner">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Premios y Distinciones</h3>
                    <ul class="list-none space-y-3">
                        ${awardsHtml}
                    </ul>
                </section>
            </div>
        </div>
    `;

    showView('profileView');
}
*/
/* API Conectivity */

/* Handlers */
/* function getHandler(api, endpoint, callback) {
    fetch(`${api}${endpoint}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then((response) => response.json())
    .then((ans) => { 
        //callback(ans.result)
        callback(ans.data)
    })
} */




// Inicializar el filtro
document.addEventListener('DOMContentLoaded', getAreasConocimiento)
document.addEventListener('DOMContentLoaded', getDivision)
//document.addEventListener('DOMContentLoaded', updateDivision);

document.getElementById('filterDivision').addEventListener('change', () => {
    updateDepartamento();
});

document.getElementById('buttonSearch').addEventListener('click', () => {
    search();
});
