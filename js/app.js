//Variables 
const carrito = document.querySelector('#carrito');
const contendorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListener();
 function cargarEventListener(){  listaCursos.addEventListner('click', agregarCurso);
   }
//Funciones 
function agregarCurso(e){
   if (e.target.classList.conteins("agregar-carrito")) {
       console.log(e.target.parentElement.parentElement)
   }
   
}

//Extraer la información del curso
   
function extraerInformacionCurs(){
   
}
