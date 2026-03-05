document.addEventListener("DOMContentLoaded", () => {
  // Fecha o drawer (nav esquerda) ao carregar a página
  const drawer = document.querySelector('input.md-toggle[data-md-toggle="drawer"]');
  if (drawer) drawer.checked = false;

  // Fecha o toc (nav direita), se existir toggle
  const toc = document.querySelector('input.md-toggle[data-md-toggle="toc"]');
  if (toc) toc.checked = false;
});
