
const formularios = document.getElementById('formularios');

const pintarestudiantes   = document.getElementById('tarjetas-estudiantes');
const pintarprofesores   = document.getElementById('tarjetas-profesores');

const templateEstudiante = document.getElementById('templateEstudiante').content;
const templateProfesor   = document.getElementById('templateProfesor').content;



const estudiantes = [];
const profesores = [];

formularios.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const [nombre,edad,opcion] = [...formData.values()];
    
   if(opcion==="Estudiante"){

    const estudiante = new Estudiante(nombre,edad);
    estudiantes.push(estudiante);
    Persona.pintaPersonaUI(estudiantes,opcion);

   }else{

    const profesor = new Profesor(nombre,edad);
    profesores.push(profesor);
    Persona.pintaPersonaUI(profesores,opcion);

   }

});


// document.addEventListener("click,e =>{

// })




class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    static pintaPersonaUI(persona,tipo) {

        if (tipo === 'Estudiante') {

            pintarestudiantes.textContent = '';
            const fragment = document.createDocumentFragment();
            
            persona.forEach(item=>{
                fragment.appendChild(item.obtenerCloneEstudiante())
            })
                
            pintarestudiantes.appendChild(fragment);

        } else if (tipo === 'Profesor') {
            pintarprofesores.textContent = '';
            const fragment = document.createDocumentFragment();
            
            persona.forEach(item=>{
                fragment.appendChild(item.obtenerCloneProfesor())
            })
                
            pintarprofesores.appendChild(fragment);
        }        
    }
}

class Estudiante extends Persona {
    #estado = false
    #estudiante="Estudiante"

    set setEstado(estado) {
        this.#estado = estado;
    }
    get getEstado() {
        return this.#estado;
    }
    set setEstudiante(Estudiante) {
        this.#estudiante=estudiante;
    }
    get getEstudiante() {
        return this.#estudiante;
    }

    obtenerCloneEstudiante(){
       const clone = templateEstudiante.cloneNode(true);
       clone.querySelector('h5 .text-primary').textContent = this.nombre;
       clone.querySelector('p.text-secondary').textContent = "Edad: " +this.edad; 
       clone.querySelector('h6').textContent = this.getEstudiante; 

       if(this.#estado){
        clone.querySelector('.badge').className = "badge bg-success"
        clone.querySelector('.btn-success').disabled = true
        clone.querySelector('.btn-danger').disabled = true

       }else{

        clone.querySelector('.badge').className = "badge bg-danger"
        clone.querySelector('.btn-danger').disabled = true
        clone.querySelector('.btn-success').disabled = false

       }

       clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Reprobado"

           

       return clone
    }
}

class Profesor extends Persona {

    obtenerCloneProfesor(){
       const clone = templateProfesor.cloneNode(true);
       clone.querySelector('h5 .text-white').textContent = this.nombre;
       clone.querySelector('p.text-white').textContent = "Edad: " +this.edad;      

       return clone
    }

}