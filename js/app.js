
const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const footerTemplate = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

let carritoObjeto=[];


document.addEventListener("click", (e) => {
    console.log(e.target.matches(".card .btn-outline-primary"));
    if(e.target.matches(".card .btn-outline-primary")){
        agregarAlCarrito(e);
    }

    if(e.target.matches("#carrito .list-group-item .btn-success")){
        aumentarCarrito(e);
    }

    if(e.target.matches("#carrito .list-group-item .btn-danger")){
        disminuirCarrito(e);
    }
});


let agregarAlCarrito = (e)=>{
    
     console.log(e.target.dataset.fruta);

     const producto = {
         titulo: e.target.dataset.fruta,
             id: e.target.dataset.fruta,
             precio:e.target.dataset.precio,
            cantidad: 1,
      };

      console.log(carritoObjeto);

      const index = carritoObjeto.findIndex((item) => item.id === producto.id);

      console.log(index);     
      
      if(index===-1){
          carritoObjeto.push(producto);
          
        }else{
            carritoObjeto[index].cantidad++;
        }
        pintarCarrito();
};


const aumentarCarrito = (e) => {

    
    carritoObjeto.map((item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        return item;
    });    
    
    pintarCarrito();

};

const disminuirCarrito = (e) => {
  
    
    carritoObjeto = carritoObjeto.filter( item => {
        if(item.id === e.target.dataset.id){
            
            item.cantidad--;
            if(item.cantidad===0) return;
            return item;
        
        }else{

            return item;
        }        
    });
    


    pintarCarrito(carritoObjeto);
}


const pintarFooter = () => {

    footer.textContent = "";
    const total = carritoObjeto.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

    if(total === 0){
        footer.textContent = "";
    }else{
       const clone = footerTemplate.content.cloneNode(true);
       clone.querySelector(".lead span").textContent =total;
       fragment.appendChild(clone);
       footer.appendChild(fragment);
    }
   

};



const pintarCarrito = () => {
     carrito.textContent = "";
 
     carritoObjeto.forEach((item) => {
         const clone = template.content.cloneNode(true);
         clone.querySelector(".lead").textContent = item.titulo;
         clone.querySelector(".rounded-pill").textContent = item.cantidad;
         clone.querySelector("div .lead span").textContent = item.cantidad * item.precio;
         clone.querySelector(".btn-danger").dataset.id = item.id;
         clone.querySelector(".btn-success").dataset.id = item.id;

         fragment.appendChild(clone);
     });
     carrito.appendChild(fragment);

     pintarFooter();
 };