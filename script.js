 const fields = document.querySelectorAll("[required]")


 function customValidation (event){
     const field = event.target



    //logica para verificar se existem erros
    function verifyErrors (){
        let foundError = false;

        for(error in field.validity){

            if(error != "customError" && field.validity[error]){
                foundError = error
            }
        }

        return foundError
    }

    const error = verifyErrors()



    //trocar mensagem
    field.setCustomValidity("Este campo é obrigatório")

    }


 for (field of fields){
     field.addEventListener("invalid", customValidation)
 }
 

 document.querySelector('form')

.addEventListener("submit", event =>{
    console.log("enviar o formulario")

})

