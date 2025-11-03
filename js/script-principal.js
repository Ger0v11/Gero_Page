function copyEmail(event) {
    // Prevenimos la acción por defecto del enlace (abrir el cliente de correo)
    // Esta función ya no se usa en el HTML actual, pero la mantenemos por si la necesitas en la página de contacto.
    event.preventDefault();

    const email = 'ggeronimov992@gmail.com';
    const feedbackElement = event.currentTarget.querySelector('.copy-feedback');

    // Usamos la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(email).then(() => {
        // Mostramos el mensaje de confirmación
        feedbackElement.classList.add('visible');

        // Ocultamos el mensaje después de 2 segundos
        setTimeout(() => {
            feedbackElement.classList.remove('visible');
        }, 2000);
    });
}