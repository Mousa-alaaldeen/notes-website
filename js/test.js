
const noteTitle = document.getElementById('noteTitle');
const textArea = document.getElementById('text-area');
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const textLeft = document.getElementById('text-left');
const textCenter = document.getElementById('text-center');
const textRight = document.getElementById('text-right');
const upperCaseBtn = document.getElementById('Upper-Case');
const lowerCaseBtn = document.getElementById('Lower-Case');
const capitalizeBtn = document.getElementById('capitalize');
const textColorInput = document.getElementById('text-color-input');
const textColorBtn = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('background-color-word');
const backgroundColorBtn = document.getElementById('background-color');
const sizeBtn = document.getElementById('size');
const fontSizeInput = document.getElementById('font-size');
const clearTextBtn = document.getElementById('clear-text');
const addNoteForm = document.getElementById('add-note-form');
const notesList = document.getElementById('notes-list');


boldBtn.addEventListener('click', () => {
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
        boldBtn.classList.remove('btn-secondary');
        boldBtn.classList.add('btn-outline-secondary');
    } else {
        textArea.style.fontWeight = 'bold';
        boldBtn.classList.remove('btn-outline-secondary');
        boldBtn.classList.add('btn-secondary');
    }
});


italicBtn.addEventListener('click', () => {
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
        italicBtn.classList.remove('btn-success');
        italicBtn.classList.add('btn-outline-success');
    } else {
        textArea.style.fontStyle = 'italic';
        italicBtn.classList.remove('btn-outline-success');
        italicBtn.classList.add('btn-success');
    }
});

textLeft.addEventListener('click', () => {
    textArea.style.textAlign = 'left';
    updateAlignButtons('left');
});

textCenter.addEventListener('click', () => {
    textArea.style.textAlign = 'center';
    updateAlignButtons('center');
});

textRight.addEventListener('click', () => {
    textArea.style.textAlign = 'right';
    updateAlignButtons('right');
});

function updateAlignButtons(align) {
    
    textLeft.classList.remove('btn-primary', 'btn-outline-primary');
    textCenter.classList.remove('btn-secondary', 'btn-outline-secondary');
    textRight.classList.remove('btn-primary', 'btn-outline-primary');


    if (align === 'left') {
        textLeft.classList.add('btn-primary');
    } else {
        textLeft.classList.add('btn-outline-primary');
    }

    if (align === 'center') {
        textCenter.classList.add('btn-secondary');
    } else {
        textCenter.classList.add('btn-outline-secondary');
    }

    if (align === 'right') {
        textRight.classList.add('btn-primary');
    } else {
        textRight.classList.add('btn-outline-primary');
    }
}


upperCaseBtn.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
});


lowerCaseBtn.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
});


capitalizeBtn.addEventListener('click', () => {
    const sentence = textArea.value;
    const words = sentence.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    textArea.value = capitalizedWords.join(" ");
});


clearTextBtn.addEventListener("click", () => {
    textArea.value = '';
    textArea.style.fontWeight = 'normal';
    textArea.style.fontStyle = 'normal';
    textArea.style.textAlign = 'left';
    textArea.style.color = '#000000';
    textArea.style.backgroundColor = '#ffffff';
    textArea.style.fontSize = '16px';

    boldBtn.classList.remove('btn-secondary');
    boldBtn.classList.add('btn-outline-secondary');
    italicBtn.classList.remove('btn-success');
    italicBtn.classList.add('btn-outline-success');
    updateAlignButtons('left');
    
    textColorInput.value = '#000000';
    backgroundColorInput.value = '#ffffff';

    fontSizeInput.value = '';
});


textColorBtn.addEventListener("click", () => {
    const color = textColorInput.value;
    textArea.style.color = color;
});


backgroundColorBtn.addEventListener('click', () => {
    const selectedColor = backgroundColorInput.value;
    textArea.style.backgroundColor = selectedColor;
});


sizeBtn.addEventListener('click', () => {
    const fontSizeValue = fontSizeInput.value;
    if (fontSizeValue >= 10 && fontSizeValue <= 100) {
        textArea.style.fontSize = `${fontSizeValue}px`;
    } else {
        alert('Please enter a font size between 10 and 100');
    }
});


addNoteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = noteTitle.value.trim();
    const description = textArea.value.trim();
    const date = new Date().toLocaleDateString('en-jo', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const backgroundColor = textArea.style.backgroundColor || '#ffffff';
    const fontSize = textArea.style.fontSize || '16px';
    const fontColor = textArea.style.color || '#000000';
    const fontFamily = textArea.style.fontFamily || "'Arial', sans-serif";
    const fontWeight = textArea.style.fontWeight || 'normal';
    const fontStyle = textArea.style.fontStyle || 'normal';
    const textAlign = textArea.style.textAlign || 'left';

    if (title === '' || description === '') {
        alert('Please fill out all fields');
        return;
    }


    const note = {
        id: Date.now(),
        title: title,
        description: description,
        date: date,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        fontColor: fontColor,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        textAlign: textAlign
    };

  
    saveNoteToLocalStorage(note);

 
    appendNoteToDOM(note);

   
    addNoteForm.reset();
    clearTextBtn.click();
});

function appendNoteToDOM(note) {
    const noteItem = document.createElement('li');
    noteItem.classList.add( 'm-1',  'p-3', 'rounded','col' ,'hover-effect');
    noteItem.setAttribute('data-id', note.id);
    noteItem.style.backgroundColor = note.backgroundColor;
    
    noteItem.innerHTML = `
    <div class="d-flex justify-content-center mt-2  ">
        <i class="bi bi-pin-angle-fill text-danger fs-3"></i>
    </div>
    <div class="details">
        <p class="fs-4 fw-bold">${note.title}</p>
        <span style="
            color: ${note.fontColor}; 
            font-size: ${note.fontSize}; 
            font-family: ${note.fontFamily}; 
            font-weight: ${note.fontWeight}; 
            font-style: ${note.fontStyle}; 
            text-align: ${note.textAlign};
        ">${note.description}</span>
    </div>
    <div class="bottom-content d-flex justify-content-between align-items-center">
        <span>${note.date}</span>
        <div class="settings">
            <div class="dropdown ">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item edit-note" href="#">Edit</a></li>
                    <li><a class="dropdown-item delete-note" href="#">Delete</a></li>
                </ul>
            </div>
        </div>
    </div>
`;



    const deleteBtn = noteItem.querySelector('.delete-note');
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this note?')) {
            deleteNoteFromLocalStorage(note.id);
            noteItem.remove();
        }
    });

  
    const editBtn = noteItem.querySelector('.edit-note');
    editBtn.addEventListener('click', () => {
   
        noteTitle.value = note.title;
        textArea.value = note.description;
        textArea.style.backgroundColor = note.backgroundColor;
        textArea.style.fontSize = note.fontSize;
        textArea.style.color = note.fontColor;
        textArea.style.fontFamily = note.fontFamily;
        textArea.style.fontWeight = note.fontWeight;
        textArea.style.fontStyle = note.fontStyle;
        textArea.style.textAlign = note.textAlign;
        addNoteForm.dataset.editingId = note.id; 
    });

    notesList.appendChild(noteItem);
}


function saveNoteToLocalStorage(note) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}


function deleteNoteFromLocalStorage(noteId) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== noteId);
    localStorage.setItem('notes', JSON.stringify(notes));
}


window.onload = function() {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    storedNotes.forEach(note => appendNoteToDOM(note));
};
