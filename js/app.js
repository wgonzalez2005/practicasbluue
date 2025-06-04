
const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];



/*const findPostById = (id, callback) => {

    const post = posts.find((post) => post.id === id);  
    
    if (post) {
       callback(null,post);
    }else{
       callback("no se encontro el post con el id: " + id,null);
    }   
    
};*/

/*
findPostById(3, (err,post) => {
    if(err){
       return console.error(err);
    }
    console.log(post);
});*/

// const findPostById = (id)=>{

//     const post = posts.find((post) => post.id === id);
//     return new Promise((resolve, reject) => {
//         if (post) {
//             resolve(post);
//         } else {
//             reject("No se encontró el post con el id: " + id);
//         }
//     });
// }

///Promesas mas cortas
const findPostById = id => new Promise((resolve, reject) => {

    setTimeout(() => {
       
    const post = posts.find((post) => post.id === id);
    if (post) {
        resolve(post);
    } else {
        reject("No se encontró el post con el id: " + id);
    }
    }, 2000);
    
});



const buscar = async () => {
    try {
        const post = await Promise.all([
            findPostById(1),
            findPostById(2)    
        ]);
        console.log(post[0].title+" "+post[1].title);
    } catch (err) {
        console.error(err);
    } finally{
        
        console.log("Finalizando la busqueda");
    }
};

buscar();
// const buscar = async (id) => {
//     try {
//         const post = await findPostById(id);
//         console.log(post);
//     } catch (err) {
//         console.error(err);
//     } finally{
        
//         console.log("Finalizando la busqueda");
//     }
// };

// buscar(3);


// findPostById(1)
//     .then((post) =>console.log(post))
//     .catch((err) => console.error(err));


    console.log("Termionacion del programa");









