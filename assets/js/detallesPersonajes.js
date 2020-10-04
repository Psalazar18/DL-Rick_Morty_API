import Personajes from './personajes.js'

export default class DetallesPersonajes extends Personajes{
	constructor(id, name, status, species, gender, created, origin, location, episode){
    super(id);
		let _name = name;
    let _status = status;
    let _species = species;
    let _gender = gender;
    this.getName = _name;
    this.getStatus = _status;
    this.getSpecies = _species;
    this.getGender = _gender;
    this.getCreated = created;
    this.getOrigin = origin;
    this.getLocation = location;
    this.getEpisode = episode;

    this.setName = (newName) => _name = newName;
    this.setStatus = (newStatus) => _status = newStatus;
    this.setSpecies = (newSpecies) => _species = newSpecies;
    this.setGender = (newGender) => _gender = newGender;
	}
	get name(){
    return this.getName;
  }
  get status(){
    return this.getStatus;
  }
  get species(){
    return this.getSpecies;
  }
  get gender(){
    return this.getGender;
  }
  get created(){
    return this.getCreated;
  }
  get origin(){
    return this.getOrigin;
  }
  get location(){
    return this.getLocation;
  }
  get episode(){
    return this.getEpisode;
  }
  set name(newName){
    return this.setName(newName);
  }
  set status(newStatus){
    return this.setStatus(newStatus);
  }
  set species(newSpecies){
    return this.setSpecies(newSpecies);
  }
  set gender(newGender){
    return this.setGender(newGender);
  }

  infoGeneral(){
    return `
    <ul>
      <li class="detallePersona"> ${this.getId}</li>
      <li class="detallePersona"> ${this.getSpecies}</li>
    </ul>
    `
  };
}