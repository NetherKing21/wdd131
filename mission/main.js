
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let elements = document.querySelectorAll("*:not(.exclude)");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-white.png");
        elements.forEach((element) => {
            element.classList.add("dark");
        });
    } else {
        // code for changes to colors and logo
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp");
        elements.forEach((element) => {
            element.classList.remove("dark");
        });
    }
}           
                    