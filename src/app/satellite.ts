export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if(this.type !== "Space Debris"){
		return false;
		}else{
		return true;
		}
   }
   
}

// TODO 3a: fix isSpaceDebris check

// let hotdog = new Satellite("foo", "bar", "baz", "lur", false);
// console.log(hotdog.isSpaceDebris());
// console.log(`This satellite's name is ${hotdog.name} and has a type: ${hotdog.type}. For isSpaceDebris value is ${hotdog.isSpaceDebris()}`);
// let junk = new Satellite("Poop", "Space Debris", "baztank", "lurcurl", false);
// console.log(junk.isSpaceDebris())
// console.log(`This satellite's name is ${junk.name} and has a type: ${junk.type}. For isSpaceDebris value is ${junk.isSpaceDebris()}`)