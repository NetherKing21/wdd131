// Instructions -----------------------------------
const instructionCard     = document.getElementById("instructionCard");
const instructionCloseBtn = document.getElementById("instructionCloseBtn");
const instructionOpenBtn  = document.getElementById("instructionOpenBtn");

instructionCloseBtn.addEventListener("click", toggleInstructions);
instructionOpenBtn.addEventListener("click", toggleInstructions);

function toggleInstructions() {
    if (instructionCard.hidden) {
        instructionCard.hidden = false;
        instructionOpenBtn.hidden = true;
    } else {
        instructionCard.hidden = true;
        instructionOpenBtn.hidden = false;
    }
}

// Dice Rolling ----------------------------------
// dice are written by amount then size separated with the letter d e.g. 1d4 stands for one four sided dice
function DiceSet(diceAmount = 0, diceSize = 0) {
    this.amount  = diceAmount;
    this.size    = diceSize;
    this.rolls   = [];
    this.total   = 0;

    this.roll = function() {
        // Clear old rolls
        this.rolls = [];

        // Roll for in dice and store in rolls
        for (let i = 0; i < this.amount; i++) {
            this.rolls.push(Math.floor(Math.random() * this.size + 1));
            this.total = this.rolls.reduce((acc, current) => acc + current, 0);
        }
    };
}

const diceBag = {
    // Properties --------
     diceSets: [],

    // Methods --------
     // Adds existing Dice Set to the bag
     addDiceSet    : function (diceSet) { this.diceSets.push(diceSet) },

     // Creates a new Dice set and adds it to the bag
     createDiceSet : function (amount, size) {this.diceSets.push(new DiceSet(amount, size))},

     // Removes set
     removeDiceSet : function (set) { 
        const index = this.diceSets.indexOf(set);
        if (index != -1) {
            this.diceSets.splice(index, 1);
        } else {
            alert("Error: No dice set found");
        }
     },

    // Roll all dice sets
     rollAllSets   : function () {
        this.diceSets.forEach((set) => {set.roll()});
     },

    // Clear all sets
     clearDiceSets : function () { this.diceSets = [] } 
    }


// preset for testing
diceBag.createDiceSet(10,4);
diceBag.createDiceSet(10,6);
diceBag.createDiceSet(10,8);
diceBag.createDiceSet(10,10);
diceBag.createDiceSet(10,12);
diceBag.createDiceSet(10,20);

let testSet = diceBag.diceSets[2];


// Display Output -------------------------------------
 // DOM Elements
 const diceBagContainer = document.getElementById("diceBagContainer");

function displayDiceSets() {
    diceBag.diceSets.forEach((set) => {
        // Create this element to be able to find other elements later
        const diceCard = document.createElement("div");
        diceCard.classList.add("diceCard");

        diceCard.innerHTML = `
            <button class="diceCardDeleteBtn closeBtn">X</button>
            <div class="diceInputSection">
                <input type="number" class="diceAmountInput" value="${set.amount}">
                <p>D</p>
                <input type="number" class="diceSizeInput" value="${set.size}">
            </div>
            <button class="rollSetBtn regBtn">Roll</button>
            <p class="rollDisplay">4 + 5 + 6 = <span class="total">15</span> [Change Later]</p>
        `;

        // Get card elements
        const diceAmountInput = diceCard.getElementsByClassName("diceAmountInput")[0];
        const diceSizeInput   = diceCard.getElementsByClassName("diceSizeInput")[0];
        
        // TODO: Add event listeners


        // Add it to the page
        diceBagContainer.appendChild(diceCard);

    });
}


// Helper functions
function test() {

}


// Load Page
displayDiceSets();