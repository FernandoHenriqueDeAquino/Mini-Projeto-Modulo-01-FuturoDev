document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formBusca');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores dos campos
        const usuarioBusca = document.getElementById('usuario').value.trim();
        const arvoreBusca = document.getElementById('arvore').value;
        
        // Obter dados do localStorage
        const plantios = JSON.parse(localStorage.getItem('plantios')) || [];
        const usuarios = JSON.parse(localStorage.getItem('usuario')) ? [JSON.parse(localStorage.getItem('usuario'))] : [];

        // Filtrar plantios
        let plantiosFiltrados = plantios;
        
        if(usuarioBusca) {
            plantiosFiltrados = plantiosFiltrados.filter(p => p.usuario.toLowerCase() === usuarioBusca.toLowerCase());
        }
        
        if(arvoreBusca) {
            plantiosFiltrados = plantiosFiltrados.filter(p => p.tipoArvore === arvoreBusca);
        }

        // Calcular totais
        const totalArvores = plantiosFiltrados.reduce((acc, curr) => acc + curr.quantiaArvores, 0);
        
        // Gerar mensagem
        let mensagem = '';
        
        if(usuarioBusca && arvoreBusca) {
            mensagem = `${totalArvores} árvores ${arvoreBusca} plantadas pelo usuário ${usuarioBusca}`;
        }
        else if(usuarioBusca) {
            mensagem = `O usuário ${usuarioBusca} plantou ${totalArvores} árvores no total`;
        }
        else if(arvoreBusca) {
            mensagem = `${totalArvores} árvores ${arvoreBusca} plantadas por nossos usuários`;
        }
        else {
            mensagem = "Por favor, preencha pelo menos um campo de busca";
        }

        // Exibir resultado
        resultadoDiv.innerHTML = mensagem || "Nenhum resultado encontrado";
    });
});