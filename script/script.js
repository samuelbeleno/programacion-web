/* */

var button_open_modal = document.getElementById('sign-in')
var forms = document.getElementById('sign-in-registrer-forms');
var button_sign_in = document.getElementById('btn-log-in');
var button_sign_up = document.getElementById('btn-registrer');
var button_close_modal = document.getElementById('close-modal');

//Abrir la ventana emergentes de inicio de sesión o registro
button_open_modal.addEventListener('click', () => {
    forms.showModal();
});

//Cerrar la ventana emergente
button_close_modal.addEventListener('click', () => {
    forms.close();
});


button_sign_up.addEventListener('click', () => {
    document.querySelector('.container-form-sign-in').style.display = 'none';    //Buscar por clases
    document.querySelector('.container-form-registrer').style.display = 'block';
});

button_sign_in.addEventListener('click', () => {
    document.querySelector('.container-form-sign-in').style.display = 'block';  
    document.querySelector('.container-form-registrer').style.display = 'none';
});