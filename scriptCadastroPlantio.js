document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formPlantio');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Capturar dados do formulário
        const quantiaArvores = parseInt(document.getElementById('quantaArvore').value);
        const tipoArvore = document.getElementById('tipoArvore').value;

        // Recuperar usuário do localStorage
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        
        // Atualizar árvores plantadas
        usuario.arvoresPlantadas += quantiaArvores;
        
        // Salvar usuário atualizado
        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Criar objeto de plantio
        const cadastroPlantio = {
            quantiaArvores: quantiaArvores,
            tipoArvore: tipoArvore,
            usuario: usuario.nome
        };

        // Salvar plantio (podemos armazenar múltiplos plantios em um array)
        let historicoPlantios = JSON.parse(localStorage.getItem('plantios')) || [];
        historicoPlantios.push(cadastroPlantio);
        localStorage.setItem('plantios', JSON.stringify(historicoPlantios));

        // Redirecionar ou mostrar confirmação (opcional)
        alert('Plantio registrado com sucesso!');
        form.reset(); // Limpa o formulário
    });
});