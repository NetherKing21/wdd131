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
    this.rolls   = Array(diceAmount).fill(0);
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


// presets as examples
diceBag.createDiceSet(5,4);
diceBag.createDiceSet(5,6);
diceBag.createDiceSet(5,8);
diceBag.createDiceSet(5,10);
diceBag.createDiceSet(5,12);
diceBag.createDiceSet(5,20);

// Display Output -------------------------------------
 // DOM Elements
 const diceBagContainer = document.getElementById("diceBagContainer");
 const addDiceSetBtn    = document.getElementById("diceSetAddBtn");
 const rollAllSetsBtn   = document.getElementById("rollAllDiceSetsBtn");
 const clearAllSetsBtn  = document.getElementById("clearAllDiceSetsBtn");


// Functions
function createDiceCard(diceSet) {
    if (!diceSet) {
        diceSet = new DiceSet();
        diceBag.addDiceSet(diceSet);
    }

    // Create this element to be able to find other elements later
    const diceCard = document.createElement("div");
    diceCard.classList.add("diceCard");

    diceCard.innerHTML = `
        <button class="diceCardDeleteBtn closeBtn">X</button>
        <div class="diceInputSection">
            <input type="number" class="diceAmountInput" value="${diceSet.amount}">
            <p>D</p>
            <input type="number" class="diceSizeInput" value="${diceSet.size}">
        </div>
        <button class="rollSetBtn regBtn">Roll</button>
        <p class="rollDisplay">${diceSet.rolls.join("+")}= <span class="total">${diceSet.total}</span></p>
    `;

    // Get btns
    const rollSetBtn      = diceCard.getElementsByClassName("rollSetBtn")[0];
    const closeBtn        = diceCard.getElementsByClassName("diceCardDeleteBtn")[0];

    // Add event listeners
    rollSetBtn.addEventListener("click", () => {showRoll(diceCard, diceSet)});
    closeBtn.addEventListener("click", () => {removeDiceCard(diceCard, diceSet)});

    // Add it to the page
    diceBagContainer.appendChild(diceCard);
}

function displayDiceSets() {
    diceBag.diceSets.forEach(set => {
        createDiceCard(set);
    });
}

// Dicebag btn listeners
addDiceSetBtn.addEventListener("click", () => {createDiceCard()});
clearAllSetsBtn.addEventListener("click", () => {
    diceBagContainer.replaceChildren();
});
rollAllSetsBtn.addEventListener("click", () => {
    const allRollBtns = Array.from(document.getElementsByClassName("rollSetBtn"));
    allRollBtns.forEach(btn => btn.click());
});


// Helper functions
function showRoll(diceCard, diceSet) {
    // Update diceSet object
    diceSet.amount = diceCard.getElementsByClassName("diceAmountInput")[0].value;
    diceSet.size   = diceCard.getElementsByClassName("diceSizeInput")[0].value;

    // ROLL!
    diceSet.roll();

    //Update rollDisplay
    diceCard.getElementsByClassName("rollDisplay")[0].innerHTML = `${diceSet.rolls.join("+")}= <span class="total">${diceSet.total}</span>`;
}

function removeDiceCard(diceCard, diceSet) {
    diceBag.removeDiceSet(diceSet);
    diceCard.remove();
}


// Load Page
displayDiceSets();
rollAllSetsBtn.click();