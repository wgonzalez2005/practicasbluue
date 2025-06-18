const formulario   = document.querySelector("#formulario");
const pintartodo   = document.querySelector("#pintartodo");
const templatetodo = document.querySelector("#templatetodo").content;
const mensaje      = document.querySelector("div.alert");


let elementos=[];
elementos=JSON.parse(localStorage.getItem("elementos"));


document.addEventListener("click",e=>{
    

    if(e.target.dataset.id){
        elementos=JSON.parse(localStorage.getItem("elementos"));
        
        const index = elementos.map((item)=>{
            return item.id;
        });

        const h = index.indexOf(e.target.dataset.id);
        elementos.splice(h,1) 
        
       localStorage.setItem("elementos",JSON.stringify(elementos));
       Datos.pintarElementos();

    }

})


formulario.addEventListener("submit", e =>{
    e.preventDefault(); 
        
    mensaje.classList.add("d-none");
    const data = new FormData(formulario);
    const [todo] = [...data.values()];

    if(!todo.trim()){
        mensaje.classList.remove("d-none");
        return;
    }
  
    elementos.push(new Datos(todo));

    localStorage.setItem("elementos",JSON.stringify(elementos));
    Datos.pintarElementos();

});



class Datos{
    constructor(todo){
        this.id=""+Date.now(),
        this.todo=todo
    }

    set setTodo(todo){
        this.todo=todo
    }
    get getTodo(){
        return this.todo
    }

    get getId(){
        return this.id
    }

    static pintarElementos(){
        pintartodo.textContent="";
        const ele = JSON.parse(localStorage.getItem("elementos"));
        const fragment = document.createDocumentFragment();
        
        ele.forEach(item => {
            console.log(item);
            const clone = templatetodo.cloneNode(true);          
            clone.querySelector(".lead").textContent = item.todo;
            clone.querySelector(".btn-danger").dataset.id = item.id; 
            fragment.appendChild(clone);

        });       

        pintartodo.appendChild(fragment);        

    }
}

Datos.pintarElementos();



