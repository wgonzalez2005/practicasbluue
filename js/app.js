const url = 'https://jsonplaceholder.typicode.com/posts/';


// const data =  fetch(url)
//   .then((res)=>res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error('Error:', err))
//   .finally(() => console.log('Fetch completed'));

const FindPostById = async (id)=> {

    try{

    const post = await fetch(url+id);
    const data = await post.json();
    
    console.log(data);


    }catch (error) {
        console.error('Error fetching post:', error);
        return;
    }   

    
    
   

}

FindPostById(75);


