'use strict';

//reference
const headingElement = document.querySelector('h1');
// console.log(headingElement);

const links = document.querySelectorAll('a');
// console.log(links);

//modify content
headingElement.textContent = "A brand new title!";

//modify attributes
const doggyImage = document.querySelector('#puppySection img');
// doggyImage.src = "img/husky.jpg";
// doggyImage.alt = "a grown up puppy";

//modify appearance
headingElement.classList.add('bg-dark', 'text-light');
headingElement.classList.toggle('p-2') //add if wasn't there, remove if it was

headingElement.style.fontSize = '3rem';
//section.style.backgroundImage = someUrlVariable;

///Make new content
const newParagraphElem = document.createElement('p');
newParagraphElem.textContent = "I'm new!";
// console.log(newParagraphElem);

const headerElement = document.querySelector('header');
headerElement.appendChild(newParagraphElem);

//the data
const linkArray = [
    {url: 'https://info340.github.io/', title: 'Course Textbook'}, 
    {url: 'https://ischool.uw.edu/', title: 'iSchool'}, 
    {url: 'https://www.google.com/search?q=puppies&tbm=isch', title: 'Puppies'},
    {url: 'https://canvas.uw.edu/courses/1516756/assignments/6873106', title: 'Project Draft 1'},
    {url: 'https://google.com', title: 'Google'}
];

//takes in an {}, and then returns <a>
function renderLinkElement(linkDataObj) {
    const aElem = document.createElement('a');
    aElem.textContent = linkDataObj.title;
    aElem.href = linkDataObj.url;
    return aElem;
}

function renderLinkArray(linkArray) {
    const unorderedListElem = document.createElement('ul');

    for(const linkObj of linkArray) {
        const theAElem = renderLinkElement(linkObj)
        const listItemElem = document.createElement('li');
        listItemElem.appendChild(theAElem);
        unorderedListElem.appendChild(listItemElem);
    }
    return unorderedListElem;
}

//get rid of old content
const dynamicLinkDiv = document.querySelector('#linkSection div');
dynamicLinkDiv.innerHTML = ''; //delete all previous content

//add in the new content
dynamicLinkDiv.appendChild(renderLinkArray(linkArray))

////////// Interactive!

const headerButton = document.querySelector('#header-button');
//console.log(headerButton);

//A function!
headerButton.addEventListener('click', function(event) {
    headingElement.classList.toggle('p-2') //add if wasn't there, remove if it was
    console.log(event.target);
});

const STATE = {
    puppyIsGrownUp: false,
}

function renderPuppy() {
    if(STATE.puppyIsGrownUp) {
        doggyImage.src = "img/husky.jpg";
        doggyImage.alt = "a grown up puppy";
    } else {
        doggyImage.src = "img/puppy.jpg";
        doggyImage.alt = "a cute puppy";
    }
}

doggyImage.addEventListener('click', function(event) {
    console.log(STATE.puppyIsGrownUp);
    
    STATE.puppyIsGrownUp = !STATE.puppyIsGrownUp; //toggle

    renderPuppy();
})

const faceElem = document.querySelector('#face-pic');
faceElem.addEventListener('mouseenter', function(event) {
    console.log("changing")
    faceElem.src = "img/surprised.png";
})
faceElem.addEventListener('mouseleave', function(event) {
    faceElem.src = "img/happy.png";
})
