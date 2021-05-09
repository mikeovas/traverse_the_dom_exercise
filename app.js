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
    if (addItemInput != "") {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        let liTemplate = '<p>{TEXT}</p><div class="button-container"><button class="up">Up</button><button class="remove">Remove item</button></div>';

        liTemplate = liTemplate.replace('{TEXT}', addItemInput.value);

        ul.appendChild(li);
        li.innerHTML = liTemplate;

        addItemInput.value = "";
    }
});


listUl.addEventListener('click', (event) => {
    let li = event.target.parentNode.parentNode;
    let ul = li.parentNode;
    let prevLi = li.previousElementSibling;

    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            ul.removeChild(li);
        }
        if (event.target.className == 'up') {
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
    }
});