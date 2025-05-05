document.addEventListener('DOMContentLoaded', function() {
    // Função principal para atualizar classes
    function atualizarClassesPorAvatar() {
        // Obter valor do avatar (do localStorage ou elemento)
        const avatar = obterValorAvatar();
        
        // Selecionar todas as divs que precisam da classe
        const divsAlvo = document.querySelectorAll('[data-avatar-classe]');
        
        divsAlvo.forEach(div => {
            // Remover classes existentes
            div.classList.remove('paubrasil', 'castanheira', 'perobarosa');
            
            // Adicionar classe correspondente
            switch(avatar) {
                case 'paubrasil':
                    div.classList.add('paubrasil');
                    break;
                case 'castanheira':
                    div.classList.add('castanheira');
                    break;
                case 'perobarosa':
                    div.classList.add('perobarosa');
                    break;
            }
        });
    }

    // Obter valor do avatar (exemplo com localStorage)
    function obterValorAvatar() {
        // Supondo que o avatar está armazenado no localStorage
        const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
        return usuario.avatar || 'paubrasil'; // valor padrão
    }

    // Executar quando o DOM estiver pronto
    atualizarClassesPorAvatar();
    
    // Opcional: Observar mudanças no campo do avatar
    const campoAvatar = document.getElementById('avatar');
    if(campoAvatar) {
        campoAvatar.addEventListener('change', atualizarClassesPorAvatar);
    }
});