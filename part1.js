const { type } = require("os");

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }
console.log(adventurer.inventory[0]);  
//Using loop to log all items in inventory
console.log("Using Loop iterating through all the items");
adventurer.inventory.forEach(items=>{
    console.log(items);

    });
    adventurer.companion="Leo";
    
//adventurer.companion="Leo";
//adventurer.companion.type="Cat";
console.log(adventurer);
adventurer.companion={
    name: "Leo",
    type: "Cat"
}
console.log(adventurer);
console.log(adventurer.companion.name);


//console.log(adventurer.companion);
const adventurerFinal = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name:"Leo",
        companion :{
            name :"Frank",
            type:"Flea",
            belongings: ["smallhat","sunglassess"]
        },
        type: "Cat"
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }
console.log(adventurerFinal);
console.log(adventurerFinal.roll());
const adventurerFinal2 = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name :"Leo",
        companion:{
            name :"Frank",
            type:"Flea",
            belongings: ["smallhat","sunglassess"]  
        },
         type:"Cat"
    },
   
    
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }
console.log(adventurerFinal2);
console.log(adventurerFinal2.roll());


