const URL_DATABASE = "http://127.0.0.1:5500/resources/databases/despesa.json";

let categoriaDespesaList = [];

function recuperarCategoriaDespesa() {
    fetch(URL_DATABASE)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o JSON');
            }
            return response.json();
        })
        .then(data => {
            categoriaDespesaList = data;
            popularDadosCategoriaDespesa(categoriaDespesaList);
        })
        .catch(error => {
            console.log('Erro:', error);
        });
}

function popularDadosCategoriaDespesa(categoriaDespesaList) {
    const categorySelect = document.querySelector('select[id="categoria-despesa-input"]');
    if (!categorySelect) {
        console.error('Elemento não encontrado');
        return;
    }
    categorySelect.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Selecione';
    defaultOption.value = '';
    categorySelect.appendChild(defaultOption);
    categoriaDespesaList.forEach(categoriaDespesa => {
        const option = document.createElement('option');
        option.textContent = categoriaDespesa.descricao;
        option.value = categoriaDespesa.codigo;
        categorySelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    recuperarCategoriaDespesa();
});
