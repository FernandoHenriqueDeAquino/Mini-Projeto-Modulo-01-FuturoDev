document.addEventListener('DOMContentLoaded', function() {
    // Cria a navbar
    const nav = document.createElement('nav');
    nav.style.backgroundColor = '#000';
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.zIndex = '1000';

    // Cria a lista de links
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.margin = '0';
    ul.style.padding = '15px';
    ul.style.display = 'flex';
    ul.style.gap = '20px';
    ul.style.justifyContent = 'center';

    // Links das páginas
    const paginas = [
        { nome: 'Cadastro de Plantio', link: 'cadastro-plantio.html' },
        { nome: 'Perfil', link: 'perfil.html' },
        { nome: 'Relatórios', link: 'buscador-relatorio.html' },
        { nome: 'Destaques', link: 'destaques.html' }
    ];

    // Adiciona cada link à lista
    paginas.forEach(pagina => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = pagina.link;
        a.textContent = pagina.nome;
        a.style.color = '#fff';
        a.style.textDecoration = 'none';
        a.style.fontFamily = 'Arial, sans-serif';
        a.style.padding = '10px';
        a.style.borderRadius = '5px';
        
        // Efeito hover
        a.addEventListener('mouseover', function() {
            a.style.backgroundColor = '#333';
        });
        
        a.addEventListener('mouseout', function() {
            a.style.backgroundColor = 'transparent';
        });

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    
    // Adiciona a navbar no início do body
    document.body.insertBefore(nav, document.body.firstChild);

    // Adiciona margem ao conteúdo para não ficar atrás da navbar
    document.body.style.marginTop = '60px';
});