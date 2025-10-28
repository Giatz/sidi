const detailView = `
    <div id="profileView" class="view hidden">
        <button onclick="showView('resultsView')" class="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center transition duration-150">< Volver a los Resultados</button>

        <div id="profileContent" class="bg-white p-6 md:p-10 rounded-xl shadow-2xl">
            <!-- Aqui se inyecta la tarjeta detallada -->
        </div>
    </div>
`

export default detailView;