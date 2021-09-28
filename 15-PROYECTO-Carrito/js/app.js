const carrito = document.querySelector('#carrito');
const contenedorcarrito = document.querySelector('#lista-carrito tbody');
const vaciarcarrito = document.querySelector('#vaciar-carrito');
const listadocursos = document.querySelector('#lista-cursos');
let articuloCarrito = [];
cargar();

function cargar (){
  
    listadocursos.addEventListener('click',agregarCurso);
// Elimina cursos del carrito
carrito.addEventListener('click',eliminarCurso);

// Vaciar el carrito

vaciarcarrito.addEventListener('click',()=> {
     articuloCarrito = []; // Reiniciar arreglo dejandolo vacio
     limpiarhtml(); // Eliminamos todo el html
})
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    const selecurso = e.target.parentElement.parentElement;
    console.log(selecurso);
    leer(selecurso);
    }
}

//Elimina un curso del carrito

function eliminarCurso(e){
    console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
        const idcurso = e.target.getAttribute('data-id');

    // Elimina del arreglo articuloCarrito por el id 

    articuloCarrito = articuloCarrito.filter(curso => curso.id !== idcurso);
    carritoHtml(); // iterar sobre el carrito
    }
}

// leer contenido al html y extrae informacion

function leer(curso){
     console.log(curso);


//Crear un objeto con el contenido del curso actual
   
const info = {  

    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id:     curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

 // Verifica si el elemento ya existe para no volverlo a agregar 
 const existe = articuloCarrito.some(curso => curso.id === info.id);
 if(existe){
     //Actualizamos la cantidad
     const cursos = articuloCarrito.map(curso =>{
         if(curso.id === info.id){
             curso.cantidad++;
             return curso;
     }else{
         return curso;
 }
});
    articuloCarrito = [...cursos];
 }else{
     //Agregamos al carrito
     articuloCarrito = [...articuloCarrito,info];
 }
  

  



  
  
  console.log(articuloCarrito);
  
  carritoHtml(); 
} 

// Mostrar el carrito de compras en html

function carritoHtml(){

    // limpiar el html 
     limpiarhtml();
    // Recorre y genera el carrito
    
    articuloCarrito.forEach(curso =>{ 
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML =` 
        <td>
         <img src = "${imagen}" width = "89">

        </td>
         <td>${titulo}</td>
         <td>${precio}</td>
         <td>${cantidad}</td>
         <td>
            <a href= "#" class = "borrar-curso" data-id="${id}"> x </a>
           </td>    
        `;

        //Agrega el html en el carrito
          contenedorcarrito.appendChild(row);
    })
}

function limpiarhtml(){
   // forma lenta
    //contenedorcarrito.innerHTML = '';

    while(contenedorcarrito.firstChild){
        contenedorcarrito.removeChild(contenedorcarrito.firstChild);
    }
}
