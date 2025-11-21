/* Manejador de vistas */
export function showView(viewId) {
    let currentView = 'searchView';
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');
    currentView = viewId;
}
