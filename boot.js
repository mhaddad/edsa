// Este arquivo não depende da biblioteca 3D: uma falha de carga também fica visível.
window.edsaSceneStatus = 'loading';
window.edsaShowSceneError = function (title, message) {
  window.edsaSceneStatus = 'error';
  document.getElementById('sceneLoading').hidden = true;
  document.getElementById('sceneErrorTitle').textContent = title;
  document.getElementById('sceneErrorMessage').textContent = message;
  document.getElementById('noWebGL').hidden = false;
};
window.addEventListener('error', function (event) {
  if (event.target && event.target.tagName === 'SCRIPT' && /factory\.bundle\.js/.test(event.target.src || '')) {
    window.edsaShowSceneError('A cena 3D não terminou de carregar.', 'Recarregue a página. Se estiver usando um visualizador embutido, abra o link no navegador do dispositivo.');
  }
}, true);
document.getElementById('retry3DBtn').addEventListener('click', function () {
  if (window.edsaRetry3D) window.edsaRetry3D();
  else window.location.reload();
});
setTimeout(function () {
  if (window.edsaSceneStatus === 'loading') window.edsaShowSceneError('O carregamento da cena está demorando.', 'Tente novamente. Se a página estiver em um visualizador embutido, abra no navegador do dispositivo.');
}, 15000);
