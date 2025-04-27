// Some o preloader quando terminar de carregar
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Função para mostrar/esconder histórico
function toggleHistorico(element, alunoId) {
    const historico = document.getElementById('historico-' + alunoId);
    historico.classList.toggle('hidden');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}