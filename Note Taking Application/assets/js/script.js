'use strict'

// Declarations
const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// Show Notes
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

// Call Show Notes
showNotes();

// Update Storage
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// Create Notes
createButton.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = './assets/images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Delete Notes
notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});