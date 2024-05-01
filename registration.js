let divdiv = document.getElementById('divdiv')
let regError = document.createElement('div')
regError.id = 'errorDiv'

let regSuc = document.createElement('div')
regSuc.id = 'sucDiv'
let sucText = document.createElement('label')
sucText.classList.add('sucText')
sucText.textContent = 'Successful!'
regSuc.appendChild(sucText)

let img = document.createElement('img')
img.addEventListener("click", fun )
img.src = '11694621.png'
img.id = 'img'

let loginDiv = document.createElement('div')
loginDiv.classList.add('logindiv')
let loginText = document.createElement('h1')
loginText.textContent = 'Login'
loginDiv.appendChild(loginText)
let logininputdiv = document.createElement('div')
logininputdiv.classList.add('div-pass1')
let loginInput = document.createElement('input')
loginInput.addEventListener("click", deleteErrorDiv)
loginInput.placeholder = 'example@domain.com'
loginInput.classList.add('input')
logininputdiv.appendChild(loginInput)
loginDiv.appendChild(logininputdiv)
let passwdlogindiv = document.createElement('div')
passwdlogindiv.classList.add('div-pass')
let passwdInput = document.createElement('input') //это логин
passwdlogindiv.appendChild(passwdInput)
passwdInput.addEventListener("click", deleteErrorDiv)
passwdInput.classList.add('input')
passwdInput.placeholder = 'Password'
passwdInput.type = 'password'
let visBut = document.createElement('button')
visBut.addEventListener("click", visiblePasswd1)
visBut.classList.add('passwdbut')
passwdlogindiv.appendChild(visBut)
loginDiv.appendChild(passwdlogindiv)
let loginBut = document.createElement('button')
loginDiv.appendChild(loginBut)
loginBut.id = 'but'
loginBut.textContent = 'Log in'
loginBut.addEventListener("click", login)

let loginList = {
    email: undefined,
    password: undefined
}

let divdivdiv = document.getElementById('mainDiv')

let contentDiv = document.getElementById('div')

let errorText = document.createElement('label')
errorText.classList.add('errorText')
errorText.textContent = 'Check entered data'
regError.appendChild(errorText)

let inputtags = document.getElementsByTagName('input');

function fun(){
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
function galochka(){
    let button227 = document.getElementsByTagName("button")[2];
    if (button227.disabled) {
        button227.removeAttribute('disabled');
    } else {
        button227.setAttribute('disabled', 'disabled');
    }
}

function sendinfo() {
    let splitTags = inputtags[0].value.split(/@|\./)
    console.log(splitTags[0].length)
    console.log(inputtags);
    if (inputtags[1].value != 0 && inputtags[1].value === inputtags[2].value && splitTags[0].length > 0 && splitTags[1].length > 0 && splitTags[2].length > 1 && splitTags[2].length < 5 ){
        divdiv.append(regSuc)
        loginList.email = inputtags[0].value
        loginList.password = inputtags[1].value
        console.log(loginList)
    }else divdiv.append(regError)
}

function deleteErrorDiv(){
    if (regError){
        regError.remove();
    }
    if (regSuc){
        regSuc.remove();
    }
}


function visiblePasswd1(){
    if (inputtags[1].type === 'password') {
        inputtags[1].type = 'text'
    } else{
        inputtags[1].type = 'password'
    }
}

function visiblePasswd2(){
    if (inputtags[2].type === 'password') {
        inputtags[2].type = 'text'
    } else{
        inputtags[2].type = 'password'
    }
}

function loginWin(){
    regSuc.remove();
    contentDiv.remove()
    divdivdiv.appendChild(loginDiv)
}

function hui(){
    alert('click')
}

function login(){
    if (inputtags[0].value === loginList.email && inputtags[1].value === loginList.password){
        divdivdiv.appendChild(img)
        loginDiv.remove()
        deleteErrorDiv()
    }else divdiv.append(regError)
}
