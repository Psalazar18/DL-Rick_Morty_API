import DetallesPersonajes from './detallesPersonajes.js'

const llamadoPersonajes = (() => {
	let URL = 'https://rickandmortyapi.com/api/character/';
	let character = document.getElementById('resultado');
	let response;

	 let getCharacter = async () => {
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

	let getId = async (id) => {
	    try {
	        let resultadoId = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
			let json2 = await resultadoId.json();
//			console.log(json2);
			return json2;
	    } catch (error) {
	        console.log("error en api");
	        if (error.code == "404"){
	            alert(error.message)
	        }
	        console.error(error);
	    }
	}

	return {
		mostrarPersonajes: async () => {
			const personajes = await getCharacter();
			const respuestaPersonajes = await personajes.results;
			respuestaPersonajes.forEach((e) => {
				getId(e.id)
				let detalle = new DetallesPersonajes(e.id, e.name, e.status, e.species, e.gender, e.created,
					e.origin, e.location, e.episode);		
				resultado.innerHTML += `
				<div>
					<img src="${e.image}"></img>
					${detalle.infoGeneral()};
				</div>
				`
//				console.log(e.id);
			});
			
		},
	};
})();

let cleanCount = () => {
	let spinner = document.querySelector(".spinner-border");
	let count = document.getElementById("cantidadPersonajes");
	setTimeout(()=>{
		spinner.classList.remove("spinner-border");
//		cantidadPersonajes.innerHTML = response.length;
		console.log(llamadoPersonajes.getCharacter)
	},2000);
};

llamadoPersonajes.mostrarPersonajes();
cleanCount();