document.addEventListener('DOMContentLoaded', function() {


    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const areaMensaje = document.querySelector('#mensaje');
    const form = document.querySelector('#formulario');


// Asignar Eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur',validar);
    areaMensaje.addEventListener('blur',validar);

    function validar(event){
        const valor = event.target.value;
        if(valor.trim() === ''){
            mostrarAlerta(`El campo ${event.target.id} es obligatorio`, event.target.parentElement);
            return;
        }

        if(event.target.id === 'email' && !validarEmail(event.target.value)){
            mostrarAlerta('El email no es valido', event.target.parentElement);
            return;
        }

        limpiarAlerta(event.target.parentElement);
        
    }


    function mostrarAlerta(mensaje, referencia){

        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }

        // Generar alerta con HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2');

        // Inyectar el error al formulario
        referencia.appendChild(error);

    }



    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

        const resultado = regex.test(email);

        return resultado;
    }
});

