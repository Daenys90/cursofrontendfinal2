// Aquí para cambiar el color a darkss o normal
$('#themeBtn').on('click', function () {
$('body').toggleClass('dark-theme');
});




// Validación correo
$('#email').on('input', function () {
const email = $(this).val();
if (email.includes('@')) {
$('#emailHelp').text('Email válido').css('color', 'green');
} else {
$('#emailHelp').text('Email inválido').css('color', 'red');
}
});