document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseElement = document.getElementById('formResponse');
    responseElement.textContent = `Obrigado, ${name}! Armazenamento de gmail em andamento...`;

    document.getElementById('contactForm').reset();
});
