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
			return json;
	    } catch (error) {
	        console.log("error en api");
	        if (error.code == "404"){
	            alert(error.message)
	        }
	        console.error(error);
	    }
	}

	return {
		mostrar: async () => {
			const personajes = await getCharacter();
			const respuestaPersonajes = await personajes.results;
			respuestaPersonajes.forEach((e) => {
				resultado.innerHTML += `
				<div>
					<img src="${e.image}"></img>
				</div>
				`;
			});
		},
	};

})();

llamadoPersonajes.mostrar();