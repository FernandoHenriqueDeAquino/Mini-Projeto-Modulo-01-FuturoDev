document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastro');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura dos valores do formulário
        const cadastroUsuario = {
            nome: document.getElementById('nomeUsuario').value,
            senha: document.getElementById('senha').value,
            avatar: document.getElementById('avatar').value,
            arvoresPlantadas: 0
        };

        // Salva no localStorage (poderia usar sessionStorage também)
        localStorage.setItem('usuario', JSON.stringify(cadastroUsuario));

        // Redireciona para a próxima página
        window.location.href = 'cadastro-plantio.html';
    });
});