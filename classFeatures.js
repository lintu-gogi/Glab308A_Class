class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
  }
const robin=new Character("Robin");
//console.log(robin);
//console.log(robin.roll());
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin);
console.log(robin.roll());
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

const adv= new Adventurer("Anu","Baseball player")
console.log(adv);
console.log(adv.scout());
class Companion extends Character{
    //inventFetures=[];
    constructor(name,type){
        super();
       this.name=name;
       this.type=type;
       this.inFeat=["small hat", "sunglasses"];
       
    }
    inventoryFeatures(){
        //this.inventFetures=["small hat", "sunglasses"];
    
        console.log("Companions inventory features: "+this.inFeat);
    }
}
const comp= new Companion("Frank","Flea");
console.log(comp);
console.log(comp.inventoryFeatures());
class Adventurer2 {
    constructor (name, role) {
      this.name=name;
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory=["bedroll", "50 gold coins"];
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      
    }
  }
  class Companion2{
    //inventFetures=[];
    constructor(name,type){
       this.name=name;
       this.type=type;
       this.inFeat=["small hat", "sunglasses"];
       
    }
    inventoryFeatures(){
        //this.inventFetures=["small hat", "sunglasses"];
    
        console.log("Companions inventory features: "+this.inFeat);
    }
}
// Creating new Robin2 object and making use of new classsess
const robin2= new Character("Robin2");
robin2.inventory = ["sword", "potion", "artifact"];
robin2.advent = new Adventurer2("Leo","new adventure roll");
robin2.advent.type = "Cat";
robin2.advent.companion = new Companion2("Frank","Flea");
console.log(robin2);
console.log(robin2.roll());