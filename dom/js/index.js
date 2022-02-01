'use strict';

//selecting elements
const h1Elem = document.querySelector('h1');

//changing content
h1Elem.textContent = "A *New* Title";

//change attributes
// const imgElem = document.querySelector('#puppySection img');
// imgElem.src = "img/husky.jpg";
// imgElem.alt = "a grown up puppy";

//change CSS classes
h1Elem.classList.add('bg-dark', 'text-light');
h1Elem.classList.toggle('p-2');

//change style properties
h1Elem.style.fontSize = '3rem';

//create new elements
const newParagraphElem = document.createElement('p');
newParagraphElem.textContent = "I'm a new paragraph";
console.log(newParagraphElem);

const headerElem = document.querySelector('header');
headerElem.appendChild(newParagraphElem);

//my data
const linkArray = [
    {url: 'https://info340.github.io/', title: 'Course Textbook'}, 
    {url: 'https://ischool.uw.edu/', title: 'iSchool'}, 
    {url: 'https://www.google.com/search?q=puppies&tbm=isch', title: 'Puppies'},
    {url: 'http://example.com', title: 'example'}

];

function renderNavLink(text, url) {
    const aElem = document.createElement('a');
    aElem.href = url;
    aElem.textContent = text;
    aElem.classList.add('nav-link');

    const liElem = document.createElement('li');
    liElem.classList.add('nav-item');
    liElem.appendChild(aElem);

    return liElem;
}

//make HTML based on some data
function renderNavList(linkArray) {
    const ulElem = document.createElement('ul');
    ulElem.classList.add('nav', 'nav-pills');
    for(const linkObj of linkArray) {
        const navLink = renderNavLink(linkObj.title, linkObj.text);
        ulElem.appendChild(navLink);
    }
    return ulElem;
}

document.querySelector('nav').appendChild(renderNavList(linkArray));


const headerButton = document.querySelector('#header-button');
headerButton.addEventListener('click', function() {
    console.log("clicky clicky");
});

const state = {
    isPuppy: true,
    isSurprised: true,
    linksDisplayed: []
}

function renderPuppyPicture(){
    const newImgElem = document.createElement('img');
    if(state.isPuppy){
        newImgElem.src = "img/puppy.jpg";
        newImgElem.alt = "a little puppy";    
    } else {
        newImgElem.src = "img/husky.jpg";
        newImgElem.alt = "a grown up puppy";    
    }

    newImgElem.addEventListener('click', function() {
        //updated state
        state.isPuppy = !state.isPuppy; //boolean toggle

        //refresh the puppy!
        document.querySelector('#puppySection').innerHTML = "";  //delete its content
        document.querySelector('#puppySection').appendChild(renderPuppyPicture())
    })

    return newImgElem;   
}

document.querySelector('#puppySection')
    .appendChild(renderPuppyPicture())



// imgElem.addEventListener('click', function() {
//     if(state.isPuppy){
//         imgElem.src = "img/husky.jpg";
//         imgElem.alt = "a grown up puppy";    
//         state.isPuppy = false;
//     } else {
//         imgElem.src = "img/puppy.jpg";
//         imgElem.alt = "a little puppy";    
//         state.isPuppy = true;
//     }
// })




const faceImg = document.querySelector('#face-pic')
faceImg.addEventListener('mouseenter', function() {
    faceImg.src = "img/surprised.png";
})
faceImg.addEventListener('mouseleave', function() {
    faceImg.src = "img/happy.png";
})
