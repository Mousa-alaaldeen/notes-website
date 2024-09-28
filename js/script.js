// const addBox=document.getElementById("add-box");
// const popupBox=document.getElementById('popup-box');
const noteTitle=document.getElementById('noteTitel');
const textArea = document.getElementById('text-area');

const boldBton=document.getElementById('bold-btn');
const italicBut =document.getElementById('italic-btn');
const textLeft=document.getElementById('text-left');
const textCenter= document.getElementById('text-center');
const textRight=document.getElementById('text-right');
const upperCase=document.getElementById('Upper-Case');
const lowerCase=document.getElementById('Lower-Case');
const capitalize=document.getElementById('capitalize');
const clearText=document.getElementById('Clear-Text');
const textColor=document.getElementById('text-color');
const color=document.getElementById('color');
const  backgroundColor=document.getElementById('background-color');
const backgroundColorWord=document.getElementById('background-color-word');
const sizeButton = document.getElementById('size');
const fontSizeInput = document.getElementById('font-size');
const fontDropdownItems = document.querySelectorAll('.dropdown-item[data-font-family]');
const addNoteForm = document.getElementById('add-note-form');
const notesList = document.querySelector('section.container ul');



// ============================

boldBton.addEventListener('click', () => {
    textArea.style.fontWeight = textArea.style.fontWeight === 'bold' ? 'normal' : 'bold';
    boldBton.classList.toggle('btn-secondary');
    boldBton.classList.toggle('btn-outline-secondary');
    
});
italicBut.addEventListener('click',()=>{
    textArea.style.fontStyle=textArea.style.fontStyle ==='italic'? 'normal' :'italic';
    italicBut.classList.toggle('btn-success');
    italicBut.classList.toggle('btn-outline-success');
    

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
    textLeft.classList.toggle('btn-primary', align === 'left');
    textLeft.classList.toggle('btn-outline-primary', align !== 'left');
    textCenter.classList.toggle('btn-secondary', align === 'center');
    textCenter.classList.toggle('btn-outline-secondary', align !== 'center');
    textRight.classList.toggle('btn-primary', align === 'right');
    textRight.classList.toggle('btn-outline-primary', align !== 'right');
}
upperCase.addEventListener('click',()=>{
textArea.value=textArea.value.toUpperCase();
    
});
lowerCase.addEventListener('click',()=>{
    textArea.value=textArea.value.toLowerCase();
        
    });
 capitalize.addEventListener('click',()=>{
    // console.log(textArea);
    let sentence = textArea.value;
    let words =  sentence.split(" ");
    console.log(words);
    let capitalizedSentence = "";
    for(let i=0;i<sentence.length;i++){
        let capitalizedWord = "";
     let word=words[i];
     for(let j=0 ; j<word.length;j++){
        if(j==0){
            capitalizedWord+=word[j].toUpperCase();

        }
        else{
            capitalizedWord+=word[j];;
        }

     }
     capitalizedSentence+=capitalizedWord+" ";
     textArea.value=capitalizedSentence;
     console.log(capitalizedSentence);
     
    }
    
 });
 clearText.addEventListener("click",()=>{
    textArea.value='';
 });
//  textColor.addEventListener("click",()=>{
//     //  textArea.style.color = 'red';
//     let x =textColor.value;
//     textArea.style.color=x ;
//  });
textColorBtn.addEventListener("click", () => {
    const color = textColorInput.value;
    textArea.style.color = color;
});
 backgroundColor.addEventListener('click',()=>{
    let selectedColor =backgroundColorWord.value;
    textArea.style.backgroundColor=selectedColor ;
 });
 sizeButton.addEventListener('click', () => {
    let fontSizeValue = fontSizeInput.value; // استخدم اسم مختلف
    textArea.style.fontSize = `${fontSizeValue}px`;
});
fontDropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        const fontFamily = this.getAttribute('data-font-family');
        textArea.style.fontFamily = fontFamily;
    });
});
document.getElementById('add-note-btn').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('noteModal'));
    modal.show();
});

//================
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let noteTite = noteTitle.value;   // Get the value from noteTitle input
    let not = textArea.value;         // Get the value from textArea input
    console.log("lmkn");
    
    console.log(noteTite);
    console.log(not);
});