document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('containerDestaques');
    
    // Recupera todos os usuários e plantios
    const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
    const todosPlantios = JSON.parse(localStorage.getItem('plantios')) || [];

    // Calcula o total de árvores plantadas por usuário
    const ranking = calcularRankingUsuarios(todosPlantios);

    // Exibe os 3 primeiros colocados
    ranking.slice(0, 3).forEach(usuario => {
        const cardUsuario = criarCardUsuario(usuario);
        container.appendChild(cardUsuario);
    });

    function calcularRankingUsuarios(plantios) {
        const usuariosMap = new Map();

        // Agrupa plantios por usuário
        plantios.forEach(plantio => {
            if (!usuariosMap.has(plantio.usuario)) {
                usuariosMap.set(plantio.usuario, {
                    nome: plantio.usuario,
                    total: 0,
                    avatar: usuarioAtual.avatar // Assume que o avatar está no usuário atual
                });
            }
            usuariosMap.get(plantio.usuario).total += plantio.quantiaArvores;
        });

        // Converte para array e ordena
        return Array.from(usuariosMap.values()).sort((a, b) => b.total - a.total);
    }

    function criarCardUsuario(usuario) {
        const div = document.createElement('div');
        div.className = 'usuario-destaque';

        const img = document.createElement('img');
        img.className = 'avatar-img';
        img.src = determinarImagemAvatar(usuario.avatar, usuario.total);
        img.alt = img.src.split('/').pop();

        const nome = document.createElement('span');
        nome.textContent = usuario.nome;

        div.appendChild(img);
        div.appendChild(nome);
        return div;
    }

    function determinarImagemAvatar(avatar, quantidade) {
        if (quantidade <= 100) return 'images/plantada.png';
        if (quantidade >= 1500) return `images/${avatar}-madura.png`;
        if (quantidade >= 700) return `images/${avatar}-jovem.png`;
        if (quantidade >= 300) return `images/${avatar}-broto.png`;
        return `images/${avatar}-plantada.png`;
    }
});