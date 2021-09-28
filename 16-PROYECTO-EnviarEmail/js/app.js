//Variables

const enviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//Variables para formulario

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const c = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);


    //Campos del formulario
    email.addEventListener('blur',validar);
    asunto.addEventListener('blur',validar);
    mensaje.addEventListener('blur',validar);

    // enviar email

    formulario.addEventListener('submit',enviarcorreo);

}




//Funciones
  
function iniciarApp(){
    enviar.disabled = false;
    enviar.classList.remove('cursor-not-allowed','opacity-50');
 
  
 }

 function validar(){
    
    
    /*const error = document.querySelector('p.error') ;

    if(c.test(e.target.value)){
     if(error){
         error.remove();
    }

    e.target.classList.remove('border','border-red-500');
    e.target.classList.add('border','border-green-500');

}else{
    e.target.classList.remove('border','border-green-500');
    e.target.classList.add('border','border-red-500');

}*/
    
    
    if( c.test(email.value)&& asunto.value !==""&& mensaje.value !==""){
        enviar.disabled = true;
        enviar.classList.remove('cursor-not-allowed','opacity-50');
        
    
    
    }
}

    

    
        
        
   
 

 function mostrarError(m){
     const mensaje = document.createElement('p');

     mensaje.textContent = m;
     mensaje.classList.add('border','border-red-500','background-color-100','text-500','p-3', 'mt-5','text-center','error');
     
     const error = document.querySelectorAll('.error');
     
     if(error.length === 0){
     
     formulario.appendChild(mensaje); 
 }
 


} 

function enviarcorreo(e){
    e.preventDefault(); 
 
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

  
}  


 
   
 


