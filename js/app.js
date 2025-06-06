const cars = document.getElementById('card-dinamicas');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
   
    
   fetchData();


});

const fetchData = async () => {
    //  console.log('Fetching data...');
    try {
       
        loadingData(true);

        const res = await fetch('https://rickandmortyapi.com/api/character');
        const resultado = await res.json();
        
        resultado.results.forEach(element => {
            // console.log(element);
            console.log(element.name);
            const clone = templateCard.cloneNode(true);
            clone.querySelector('.card-title').textContent = element.name;  
            clone.querySelector('.card-text').textContent = element.species;
            clone.querySelector('.lead').textContent = element.origin.name;
            clone.querySelector('.card-img-top').setAttribute('src', element.image);            
            fragment.appendChild(clone);
       
        });
        cars.appendChild(fragment);
          
    } catch (error) {
        console.error('Error fetching data:', error);
    }finally {
        console.log('Fetch completed');
        loadingData(false);
    }
}


const loadingData = (estado) => {

    const loading = document.getElementById('loading');
    if(estado){

        loading.classList.remove('d-none');       

    }else{

       loading.classList.add('d-none');
       
    }


}
