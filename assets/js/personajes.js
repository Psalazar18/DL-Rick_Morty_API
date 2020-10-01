export default class Personajes{
	constructor(id){
		let _id = id;
    this.getId = _id;
    this.setId = (newId) => _id = newId;
	}
	get id(){
    return this.getId;
  }
  set id(newId){
    return this.setId(newId);
  }
}