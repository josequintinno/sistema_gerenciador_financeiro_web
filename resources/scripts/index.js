const menuReceitaLink = document.getElementById("open-modal-receita");
const modalReceita = document.getElementById("modal-receita");

const modalBotaoCancelar = document.getElementById("botao-cancelar");

menuReceitaLink.addEventListener("click", function() {
    modalReceita.classList.add("open");
});

modalBotaoCancelar.addEventListener("click", function() {
    modalReceita.classList.remove("open");
});