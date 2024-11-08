function cargaPersonajes(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=>{
        if(!response.ok){
            throw new Error("Error al cargar el archivo");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);

        imagenes(data.results);
    })
}

function imagenes(results) {
    results.forEach(personaje => {
        // Crear un elemento de imagen para cada personaje
        const img = document.createElement("img");
        img.src = personaje.image;
        img.alt = personaje.name;
        
        // Añadir la imagen al cuerpo del documento
        document.body.appendChild(img);
    });
}

cargaPersonajes();