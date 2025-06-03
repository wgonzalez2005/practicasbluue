
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");


const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertSuccess = document.getElementById("alertSuccess");

const regexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const soloLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


const pintarAlerta = () => {
console.log("pintarAlerta");
 alertSuccess.classList.remove("d-none");
 alertSuccess.textContent = "Formulario enviado correctamente";

};


const pintarMensajeError = (errores) => {

errores.forEach((item) => {

    item.tipo.classList.remove("d-none");   
    item.tipo.textContent = item.msg;


});

};



formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const errores = [];


     alertSuccess.classList.add("d-none");

    // Validar nombre
    if (!userName.value.trim() || !soloLetras.test(userName.value)) {

        userName.classList.add("is-invalid", "alert-danger");

        errores.push({
            tipo:alertName,
            msg:'Formato no valido en el campo nombre, solo letras'
         });

    } else{
 
        
        
        userName.classList.add("is-valid");       
        userName.classList.remove("is-invalid", "alert-danger");
        alertName.classList.add("d-none")
        console.log(alertName);
    }

    // Validar email
    if (!userEmail.value.trim() || !regexEmail.test(userEmail.value)) {
       
       userEmail.classList.add("is-invalid", "alert-danger");

       errores.push({
            tipo:alertEmail,
            msg:'Escriba un correo valido'
         });

    }else{
        
        
        alertEmail.classList.add("d-none");
        userEmail.classList.add("is-valid");       
        userEmail.classList.remove("is-invalid", "alert-danger");
  
    }


    if(errores.length!==0){
            pintarMensajeError(errores);
            return

    }

    pintarAlerta();



   
});









