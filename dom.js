//initialize some variables
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorius text-content';

//add redP to the document
const redP = document.createElement('p');
redP.classList.add('redP');
redP.style.color = 'red';
redP.textContent = "Hey I'm red";

//add blueH to the document
const blueH = document.createElement('h3');
blueH.classList.add('blueH');
blueH.style.color = 'blue';
blueH.textContent = "I'm a blue h3!"

//add sDiv to the document
const sDiv = document.createElement('div');
sDiv.classList.add('sDiv');
sDiv.style.border = '1px solid black';
sDiv.style.backgroundColor = 'pink';

//add dH1 to the sDiv
const dH1 = document.createElement('h1');
dH1.classList.add('dH1');
dH1.textContent = "I'm in a Div"
sDiv.appendChild(dH1);

//add p to the sDiv
const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'ME TOO!';
sDiv.appendChild(p)


container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH);
container.appendChild(sDiv);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        alert(button.id);
    });
});