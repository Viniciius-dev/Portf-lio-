function mostrarAba(aba) {
    const sobre = document.querySelector('.sobre');
    const projects = document.getElementById('Projects');
    const contact = document.getElementById('Contact');

    // Se clicar no botão da aba já aberta, volta pra aba principal (sobre)
    if ((aba === 'Projects' && projects.classList.contains('ativa')) ||
        (aba === 'Contact' && contact.classList.contains('ativa'))) {
        sobre.style.display = 'block';
        projects.classList.remove('ativa');
        contact.classList.remove('ativa');
        projects.style.display = 'none';
        contact.style.display = 'none';
    } else {
        // Esconde a aba principal
        sobre.style.display = 'none';

        // Mostra a aba clicada e esconde a outra
        if (aba === 'Projects') {
            projects.style.display = 'block';
            contact.style.display = 'none';
            projects.classList.add('ativa');
            contact.classList.remove('ativa');
        } else if (aba === 'Contact') {
            contact.style.display = 'block';
            projects.style.display = 'none';
            contact.classList.add('ativa');
            projects.classList.remove('ativa');
        }
    }
}
