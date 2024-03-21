// Obtener referencias a los elementos de enlaces de contacto
const emailLink = document.getElementById('email-link');
const whatsappLink = document.getElementById('whatsapp-link');
const telegramLink = document.getElementById('telegram-link');

// Agregar evento de clic a los enlaces de correo electrónico, WhatsApp y Telegram
emailLink.addEventListener('click', validateEmail);
whatsappLink.addEventListener('click', validatePhoneNumber);
telegramLink.addEventListener('click', validateTelegram);

// Función para validar el enlace de correo electrónico (Gmail)
function validateEmail(event) {
    const email = 'stefanocardinale@gmail.com'; // Dirección de correo electrónico válida
    const clickedEmail = event.target.href.substring(7); // Obtener la dirección de correo electrónico del enlace
    if (clickedEmail !== email) {
        event.preventDefault(); // Evitar que el enlace se abra
        alert('Dirección de correo electrónico no válida'); // Mostrar mensaje de error
    }
}

// Función para validar el enlace de WhatsApp (Número de teléfono)
function validatePhoneNumber(event) {
    const phoneNumber = '+5491144077263'; // Número de teléfono válido (formato internacional)
    const clickedPhoneNumber = event.target.href.substring(8); // Obtener el número de teléfono del enlace
    if (clickedPhoneNumber !== phoneNumber) {
        event.preventDefault(); // Evitar que el enlace se abra
        alert('Número de WhatsApp no válido'); // Mostrar mensaje de error
    }
}

// Función para validar el enlace de Telegram (Nombre de usuario)
function validateTelegram(event) {
    const telegramUsername = '+541144077263'; // Nombre de usuario de Telegram válido
    const clickedTelegramUsername = event.target.href.substring(9); // Obtener el nombre de usuario de Telegram del enlace
    if (clickedTelegramUsername !== telegramUsername) {
        event.preventDefault(); // Evitar que el enlace se abra
        alert('Nombre de usuario de Telegram no válido'); // Mostrar mensaje de error
    }
}