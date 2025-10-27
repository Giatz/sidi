const searchBarModule = `
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
`;  // or any other value

export default searchBarModule;