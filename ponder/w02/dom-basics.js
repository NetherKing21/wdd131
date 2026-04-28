//Query Selector
let firstList = document.querySelector('.list');
firstList.style.backgroundColor = "red";


//Gets element by ID
let content = document.getElementById('content');
content.style.backgroundColor = "blue";

let selectElem = document.getElementById('webdevlist');


document.querySelector('img').setAttribute("src", "portrait.webp");
document.querySelector('img').setAttribute("alt", "Broken Picture");

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                