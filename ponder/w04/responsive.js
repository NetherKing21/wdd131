const menuButton = document.getElementsByClassName("menu-btn")[0];

menuButton.addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick (event) {
    //grab nav
    const nav = document.querySelector("nav");
    //toggle .hide on nav
    nav.classList.toggle("hide");
    //profit
}