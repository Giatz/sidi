export const resultView = document.createElement('section');
resultView.className = 'view hidden';
resultView.id = 'resultsView';
resultView.innerHTML =`
    <div id="resultsView" class="view hidden">
        <button onclick="showView('searchView')" class="mb-4 text-blue-600 hover:text-blue-800 font-medium flex items-center transition duration-150">< Volver a la Búsqueda</button>

        <h2 class="text-2xl font-bold mb-4 text-gray-800">Resultados de la Búsqueda (<span id="resultCount">1</span>)</h2>
        <div id="resultsContainer" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Aqui se inyectan las tarjetas -->
        </div>
    </div>
`

