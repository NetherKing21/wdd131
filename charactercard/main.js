// DOM Elements
const attackedBtn = document.getElementById("attackedBtn");
const levelUpBtn = document.getElementById("levelUpBtn");
const stats = document.querySelector(".stats");

// Build object
const character = {
    //name, class, level, health, and image and methods: attacked and levelUp
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp",

    attacked: function () {
        this.health -= 20;
        populateCard();
    },
    levelUp: function () {
        this.level++;
        populateCard();
    }
}

//Eventlisteners
attackedBtn.addEventListener("click", () => character.attacked());
levelUpBtn.addEventListener("click", () => character.levelUp());

//Helper function
function populateCard() {
    let temp = `
    <p>Class: ${character.class}</p>
    <p>Level: ${character.level}</p>
    <p>Health: ${character.health}</p>
    `;
    stats.innerHTML = temp;
    if (character.health <= 0) {
        alert("Character Dead");
    }
}

populateCard(character);