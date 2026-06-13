// DOM Elements
const dieImages = document.querySelectorAll("#gameboard img");

document.getElementById("rollButton").addEventListener("click", (event) => {
    
    dieImages.forEach((image) => {
        if (isDieUnlocked(image)) {
            // Make die roll
            image.src = "assets/die_rolling.gif"

            // Wait and then change the images
            setTimeout(() => {
                
                const randomNumber = Math.floor(Math.random() * 6 + 1);
                image.src = `assets/white_dice_${randomNumber}.gif`;
                
            }, 1000);     
        }  
    });
})

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input")
    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);
}