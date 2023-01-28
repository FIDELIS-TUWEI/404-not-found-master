// Header
const header = document.createElement('header');
header.className = `logo`;
document.body.append(header);

// h4
const h5 = document.createElement('h5');
h5.className = `logo--title`
h5.innerHTML = `404 NOT FOUND`;
header.appendChild(h5);

// container
const container = document.createElement('main');
container.className = `container`;
document.body.append(container);

// Hero Image
const image = document.createElement('img');
image.setAttribute('src', 'Scarecrow.png');
image.className = `Hero--Image`;
container.appendChild(image);

// Text container
const textDiv = document.createElement('div');
textDiv.className = `Text--div`;
container.appendChild(textDiv);


// Title
const title = document.createElement('h3');
title.className = `container--title`
title.textContent = `I have bad news for you`;
textDiv.appendChild(title);

// Paragraph
const paragraph = document.createElement('p');
paragraph.className = `error--message`;
paragraph.textContent = `The page you are looking for might be removed or is temporarily unavailable.`
textDiv.appendChild(paragraph);

// Button
const button = document.createElement('button');
button.textContent = `BACK TO HOMEPAGE`;
button.className = `backBtn`
textDiv.appendChild(button);