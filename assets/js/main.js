import DetallesPersonajes from './detallesPersonajes.js'

const llamadoPersonajes = (() => {
	let URL = 'https://rickandmortyapi.com/api/character/';
	let character = document.getElementById('resultado');
	let response;
	let miMetodoPrivado;

	 let getCharacter = async () => {
		console.log("test");
	    try {
	        let resultado = await fetch(URL);
			let json = await resultado.json();
			response = json;
	        console.log(response);
	    } catch (error) {
	        console.log("error en api");
	        if (error.code == "404"){
	            alert(error.message)
	        }
	        console.error(error);
	    }
	}

	return {
		/*insertarMusica: ( musica ) => {
			musicaPrivate(musica);
		},

		insertarPelicula: ( pelicula ) => {
			peliculaPrivate(pelicula);
		},

		insertarSerie: ( serie ) => {
			seriePrivate(serie);
		}*/
	}

})();

llamadoPersonajes.getCharacter;