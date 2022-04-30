class User {
	constructor(id, name, image){
		this.id = id;
		this.name = name;
		this.image = image;
	}

	getUser(){
		return {
			id: this.id,
			name: this.name,
			image: this.image
		}
	}
}