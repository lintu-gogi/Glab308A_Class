class Adventurer {
    constructor (name,role) {
        let r=0;
      this.name=name;
      //this.role=role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory=["bedroll", "50 gold coins"];
      Adventurer.roles.forEach(element => {
        if(role==element){
            console.log(`${role} is in the static roles array`);
            this.role=role;
            r=1;
        }
        
        });
        if(r==0){
            console.log("Please enter a role in static array");
        }
    
    }
    static roles=["Fighter", "Healer", "Wizard"];
    // Adventurers have the ability to scout ahead of them.
    roleCheck () {
      Adventurer.roles.forEach(element => {
        if(this.role==element){
            console.log(`${this.role} is in the static roles array`);
        }
      });
      
    }
  }
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  console.log(healers);
  console.log(robin);