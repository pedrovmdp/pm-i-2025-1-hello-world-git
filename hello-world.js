const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }


if (event.key === 'Enter') {
    helloWorld();
    }
if (event.key === 'Escape') {
    nameInput.value = '';
    messageP.innerText = '';
    }

}


const helloWorld = () => {
    const name = nameInput.value.trim();
    if (name) {
    messageP.innerText = `Hello World, ${name}!`;
    } else {
        messageP.innerText = `Hello World!`;
    }


}

const clearButton = () => {
    nameInput.value = '';
    messageP.innerText = '';
};

