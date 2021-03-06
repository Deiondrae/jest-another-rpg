class Potion {
    constructor(name) {
        this.types = ["strength", "agility", "health"];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === "health") {
            this.value = Math.floor(Math.random() * 10 + 30)
        } else {
            this.value = Math.floor(Math.random() * 5 + 7)
        }
    }
}
module.exports = Potion;

// ES5 WAY OF CONSTRUCTOR FUNCTION
// function Potion(name){
//     this.types = ["Strength", "Agility", "Health"]
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//     if (this.name === "health") {
//         this.value = Math.floor(Math.random()* 10 + 30)
//     } else {
//         this.value = Math.floor(Math.random() * 5 + 7)
//     }
// }

//ES6 using "Class" keyword
