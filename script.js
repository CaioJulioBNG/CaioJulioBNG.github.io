// Função para abrir o modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex"; // ou "block"
  }
}

// Função para fechar o modal
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Fechar modal clicando fora do conteúdo
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
