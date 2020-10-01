import DetallesPersonajes from './detallesPersonajes.js'

const llamadoPersonajes = (()=>{
	let URL = 'https://rickandmortyapi.com/api/character/';
	let character = document.getElementById('resultado');
	let response;
	let miMetodoPrivado;

	getCharacter = async () => {
		console.log("test");
	    try {
	        let resultado = await fetch(URL);
	        let json = await resultado.json();
	        console.log(json);
	    } catch (error) {
	        console.log("error en api");
	        if (error.code == "404"){
	            alert(error.message)
	        }
	        console.error(error);
	    }
	}

	/*musicaPrivate = ( musica ) => {
		//console.log( musica );
		videoMusica.insertAdjacentHTML('afterBegin', musica);

	};

	peliculaPrivate = ( pelicula ) => {
		//console.log( pelicula );
		videoPelicula.insertAdjacentHTML('afterBegin', pelicula);

	};

	seriePrivate = ( serie ) => {
		//console.log( serie );
		videoSerie.insertAdjacentHTML('afterBegin', serie);
	};*/


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

llamadoPersonajes.getCharacter();