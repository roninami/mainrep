let a = document.getElementById('5')
let user = {
    name: 'Alex',
    lastName: 'Erem'
}
let user2 = {
    name: 'Dian',
    lastName: 'Erem'
}
user2.name = 'Dmit'
let list = [user, user2]
console.log(list)
a.forEach((line) => {
    const newP1 = document.createElement('p');
    newP1.list = line.name;
    a.appendChild(newP1);
})

a.forEach((line) => {
    const newP2 = document.createElement('p');
    newP2.list = line.lastName;
    a.appendChild(newP1);
})
console.log(a)
