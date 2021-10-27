'use strict';

//select elements
const h1Elem = document.querySelector('h1');

//modify elements
h1Elem.innerHTML = "This is <em>new</em> content";

const imgElem = document.querySelector('img');
//imgElem.src = "img/husky.jpg";

h1Elem.classList.add('text-light');
h1Elem.classList.toggle('bg-dark');

h1Elem.style.fontSize = '3rem';

const linkSet = document.querySelectorAll('a');
// linkSet.forEach(function(linkElem){
//     console.log(linkElem);
// })

//new items
const newParagraphElem = document.createElement('p');
newParagraphElem.textContent = "I'm a new paragraph!";

const firstSectionElem = document.querySelector('main section');
firstSectionElem.appendChild(newParagraphElem);

// renderTheAnchor(linkText) {}

// renderTheListOfLInks(linkArray) {
//     foreach link {
//         renderTheAchor
//     }
// }

// renderTheNav(logo, linkArray) {
//     renderTheLogo()
//     renderTheListOfLinks()
//     renderTheHamburgerDropdown();
// }

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function(event) {
    console.log("clicky clicky!");

})

document.querySelector('#dark-button').addEventListener('click', function(e) {
    h1Elem.classList.toggle('bg-dark');
})

//the current situation!
const state = {
    showingPuppy: true
}

function renderDog() {
    const newImgElem = document.createElement('img');
    if(state.showingPuppy){
        newImgElem.src = "img/puppy.jpg";
    } else {
        newImgElem.src = "img/husky.jpg";
    }

    newImgElem.addEventListener('click', function(event){
        console.log(event.target);
        state.showingPuppy = !state.showingPuppy; //boolean toggle - changed state
        renderDog(); //refresh the dog!
    })

    document.querySelector('section').innerHTML = ""; //delete all content
    document.querySelector('section').appendChild(newImgElem);
}
renderDog();


imgElem.addEventListener('click', function(){
    if(state.showingPuppy){
        state.showingPuppy = false;
        imgElem.src = "img/husky.jpg";
    } else {
        state.showingPuppy = true;
        imgElem.src = "img/puppy.jpg";
    }
})


const faceImg = document.querySelector('#face-img');
faceImg.addEventListener('mouseenter', function(){
    faceImg.src = "img/surprised.png"
});


faceImg.addEventListener('mouseleave', function(){
    faceImg.src = "img/happy.png";
})