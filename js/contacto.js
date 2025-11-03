document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.querySelector('.form-success-message');

    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.querySelector('.form-success-message');
        const data = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = "¡Gracias por tu mensaje! Ha sido enviado.";
                status.classList.add('visible');
                form.reset(); // Limpia el formulario
            } else {
                status.innerHTML = "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.";
                status.classList.add('visible', 'error');
            }
        } catch (error) {
            status.innerHTML = "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.";
            status.classList.add('visible', 'error');
        }
    }
    form.addEventListener("submit", handleSubmit);
});