const menuReceitaLink = document.getElementById("open-modal-receita");
const modalReceita = document.getElementById("modal-receita");
const modalBotaoCancelar = document.getElementById("botao-cancelar");

menuReceitaLink.addEventListener("click", function() {
    modalReceita.classList.add("open");
});

modalBotaoCancelar.addEventListener("click", function() {
    modalReceita.classList.remove("open");
});

// Controles de Janelas
const menuDespesaLink = document.getElementById("open-modal-despesa");

let janelaCadastroDespesaVariavel = null;

menuDespesaLink.addEventListener("click", function() {
    try {
        if (!janelaCadastroDespesaVariavel || janelaCadastroDespesaVariavel.closed) {
            janelaCadastroDespesaVariavel = window.open("../pages/despesa-cadastro.html", "_blank", "width=1200,height=600");
        } else {
            janelaCadastroDespesaVariavel.focus();
        }
    } catch (error) {
        console.error("Erro ao abrir a janela: ", error);
    }
});