const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');

listUl.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'P') {
        event.target.textContent = event.target.textContent.toUpperCase();
    };
});

listUl.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'P') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = "Hide list";
        listDiv.style.display = 'block';
    } else {
        listDiv.style.display = 'none';
        toggleList.textContent = 'Show list';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = "";
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = "";
});

listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }

});