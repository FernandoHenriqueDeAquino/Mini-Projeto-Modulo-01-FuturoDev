document.addEventListener('DOMContentLoaded', function() {
    // Carrega dados do usuário
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const arvoresPlantadas = usuario.arvoresPlantadas;
    
    // Elementos DOM
    const avatarImage = document.getElementById('avatarImage');
    const userName = document.getElementById('userName');
    const bioText = document.getElementById('bioText');
    const bioTextarea = document.getElementById('bioTextarea');
    const editBioBtn = document.getElementById('editBioBtn');

    // Função para determinar a imagem do avatar
    function getAvatarImage(avatar, quantidade) {
        let imageName = 'plantada.png';
        
        if(quantidade >= 1500) {
            imageName = `${avatar}-madura.png`;
        } else if(quantidade >= 700) {
            imageName = `${avatar}-jovem.png`;
        } else if(quantidade >= 300) {
            imageName = `${avatar}-broto.png`;
        } else if(quantidade >= 101) {
            imageName = `${avatar}-plantada.png`;
        }
        
        return `images/${imageName}`;
    }

    // Atualiza a imagem do avatar
    avatarImage.src = getAvatarImage(usuario.avatar, arvoresPlantadas);
    avatarImage.alt = getAvatarImage(usuario.avatar, arvoresPlantadas).split('/').pop();

    // Exibe nome do usuário
    userName.textContent = usuario.nome;

    // Carrega biografia salva
    let userBio = JSON.parse(localStorage.getItem('userBio')) || {usuario: usuario.nome, bio: ''};
    bioText.textContent = userBio.bio;

    // Lógica de edição da biografia
    editBioBtn.addEventListener('click', function() {
        if(this.textContent === 'Editar Biografia') {
            bioText.style.display = 'none';
            bioTextarea.style.display = 'block';
            bioTextarea.value = userBio.bio;
            this.textContent = 'Salvar Biografia';
        } else {
            userBio.bio = bioTextarea.value;
            localStorage.setItem('userBio', JSON.stringify(userBio));
            bioText.textContent = userBio.bio;
            bioText.style.display = 'block';
            bioTextarea.style.display = 'none';
            this.textContent = 'Editar Biografia';
        }
    });
});