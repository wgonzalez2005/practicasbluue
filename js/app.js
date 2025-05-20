
const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const footerTemplate = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

const carritoObjeto=[];


document.addEventListener("click", (e) => {
    console.log(e.target.matches(".card button"));
});


const agregarAlCarrito = (e)=>{
    
     console.log(e.target.dataset.fruta);

     const producto = {
      titulo: e.target.dataset.fruta,
          id: e.target.dataset.fruta,
          cantidad: 1,
      };

      const index = carritoObjeto.findIndex((item) => item.id === producto.id);

      console.log(index);     
      
      if(index===-1){
          carritoObjeto.push(producto);
          
      }else{
         carritoObjeto[index].cantidad++;
      }
    pintarCarrito(carritoObjeto);
};


const pintarCarrito = (array) => {
     carrito.textContent = "";
 
     array.forEach((item) => {
         const clone = template.content.cloneNode(true);
         clone.querySelector(".lead").textContent = item.titulo;
         clone.querySelector(".rounded-pill").textContent = item.cantidad;
         fragment.appendChild(clone);
     });
     carrito.appendChild(fragment);
 };