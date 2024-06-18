class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    static MAX_HEALTH=100;
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
  }
const robin=new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
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
  console.log(Adventurer.roles);
  const adv= new Adventurer("lea","Wizard");
  console.log(adv);
  //console.log(adv.roleCheck());
 /* Adventurer.roles.forEach(element => {
    if("Wizard"==element){
        console.log("Found");
    }
    else{
        console.log("Not found");
    }
  });*/