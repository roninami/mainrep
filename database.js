function RndmClr() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColour(i){
    listk[i].style.backgroundColor = `${RndmClr()}`;

}
function DltBut(i){
    listk[i].remove()
}
let editinput = document.createElement('input')
let editinput2 = document.createElement('input')
let buttonsave = document.createElement('button')
let buttoncancel = document.createElement('button')
buttonsave.textContent = 'Save'
buttoncancel.textContent = 'Cancel'
function dltinp(){
    editinput2.remove()
    editinput.remove()
    buttoncancel.remove()
    buttonsave.remove()
}
function saveEdit(i){
    list[i].name = editinput.value
    listnewp1[i].textContent = `${editinput.value}`
    list[i].lastName = editinput2.value
    listnewp2[i].textContent = `${editinput2.value}`
    editinput2.remove()
    editinput.remove()
    buttoncancel.remove()
    buttonsave.remove()

}

function edit(i) {
    editinput.value=list[i].name
    editinput2.value=list[i].lastName
    listk[i].appendChild(editinput)
    listk[i].appendChild(editinput2)
    listk[i].appendChild(buttonsave)
    buttonsave.addEventListener("click",() => saveEdit(i));
    listk[i].appendChild(buttoncancel)
    buttoncancel.addEventListener("click",dltinp);
}
let a = document.getElementById('5');

let user1 = {
    name: 'Alex ',
    lastName: 'Erem'
};
let user2 = {
    name: 'Dian',
    lastName: 'Erem'
};
let user3 = {
    name: 'Nikita',
    lastName: 'Grigoriev'
}
user2.name = 'Dmit';
let list = [user1, user2, user3];
console.log(list);


let inputDiv = document.createElement('div')
document.body.appendChild(inputDiv);


let inputName = document.createElement('input')
let inputLastName = document.createElement('input')
let sendBut = document.createElement('button')
let newUser = {
    name:undefined,
    lastName: undefined
}

function getInpName(){

    inputName.type = 'text'
    inputDiv.appendChild(inputName)

    inputLastName.type = "text";
    inputDiv.appendChild(inputLastName)

    sendBut.textContent = 'send info'
    inputDiv.appendChild(sendBut)
    sendBut.addEventListener("click",getInfo)

}

let listnewp1 = []
let listnewp2 = []

function getInfo(){
    newUser.name = inputName.value
    inputName.value = ''
    newUser.lastName = inputLastName.value
    inputLastName.value = ''
    list.push(newUser)

    inputName.remove()
    inputLastName.remove()
    sendBut.remove()
    addNewUsers()
}
function addNewUsers(){
    let newUserDiv = document.createElement('div')
    listk.push(newUserDiv)
    let i = listk.length - 1

    let changecolour = document.createElement('button')
    changecolour.addEventListener('click',RndmClr)
    changecolour.textContent = 'Change Colour'
    changecolour.addEventListener('click',() =>changeColour(i) )

    let button2 = document.createElement('button')
    button2.textContent = 'Edit'
    button2.addEventListener("click",() => edit(i));

    let button = document.createElement('button')
    button.textContent = 'Удалить'
    button.addEventListener("click", function() {
        DltBut(i);
    });

    let newP = document.createElement('p');
    newP.textContent = `${newUser.name}`;
    newP.style.fontWeight = 700
    listnewp1.push(newP)
    newUserDiv.appendChild(newP);

    let newP1 = document.createElement('p');
    newP1.textContent = `${newUser.lastName}`;
    newP1.style.fontWeight = 500
    listnewp2.push(newP1)
    newUserDiv.appendChild(newP1);

    newUserDiv.style.backgroundColor = `${RndmClr()}`;
    newUserDiv.appendChild(button)
    newObjDiv.appendChild(newUserDiv)
    newUserDiv.appendChild(button2)
    newUserDiv.appendChild(changecolour)
    a.appendChild(newObjDiv)
}



let inputButLN = document.createElement('button')
inputButLN.textContent = 'add new User'
inputButLN.addEventListener("click",getInpName)
inputDiv.appendChild(inputButLN)


let listk = [];


let newObjDiv = document.createElement('div')
for (let i = 0; i < list.length; i++) {
    let newUserDiv = document.createElement('div')
    listk.push(newUserDiv)

    let changecolour = document.createElement('button')
    changecolour.addEventListener('click',() =>changeColour(i) )
    changecolour.textContent = 'Change Colour'

    let button = document.createElement('button')
    button.textContent = 'Удалить'
    button.addEventListener("click",() => DltBut(i));

    let button2 = document.createElement('button')
    button2.textContent = 'Edit'
    button2.addEventListener("click",() => edit(i));

    let newP = document.createElement('p');
    newP.textContent = `${list[i].name}`;
    newP.style.fontWeight = 700
    newUserDiv.appendChild(newP);
    listnewp1.push(newP)

    let newP1 = document.createElement('p');
    newP1.textContent = `${list[i].lastName}`;
    newP1.style.fontWeight = 500
    newUserDiv.appendChild(newP1);
    listnewp2.push(newP1)


    newUserDiv.style.backgroundColor = `${RndmClr()}`;
    newUserDiv.appendChild(button)
    newUserDiv.appendChild(button2)
    newUserDiv.appendChild(changecolour)
    newObjDiv.appendChild(newUserDiv)
}
console.log(list);
a.appendChild(newObjDiv)





