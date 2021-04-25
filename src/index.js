const { hidden } = require("chalk");

let menuBtn = document.querySelector('.menu-btn');
let homeBtn = document.querySelector('.home-btn');
let contactBtn = document.querySelector('.contact-btn');
let btns = [menuBtn, homeBtn, contactBtn];

function setBtnActive(id) {
    for (let i = 0; i < 3; i++) {
        if (btns[i].classList.contains("active")) {
            btns[i].classList.remove("active");
        } else {
            btns[i].classList.remove("hidden");
        }
        btns[i].classList.add("hidden");
    }
    document.querySelector(`#${id}`).classList.add("active");
}

function createHome() {
    let parentNode = document.querySelector('#Home');
    let title = document.createElement('h3');
    title.textContent = 'Welcome to our Restaurant Page!';
    title.style.textAlign = 'center';
    let desc = document.createElement('p');
    desc.textContent = 'We provide pizzas to those who long for them. Do not hesitate to order a pizza in LESS THAN TWO MINUTES!';
    desc.style.textAlign = 'center';
    let image = document.createElement('img');
    image.src = 'pizza.jpg';
    image.alt = 'Our pizzas';
    image.classList.add('center');
    parentNode.appendChild(title);
    parentNode.appendChild(desc);
    parentNode.appendChild(image);
}

function createMenu() {
    let parentNode = document.querySelector('#Menu');
    let menuContent = [
        {
            name: 'Bacon & pepperoni with cheese combo',
            price: 699.99
        },
        {
            name: 'Indian cottage cheese & chilli crunch',
            price: 489.99
        },
        {
            name: 'Sausage & salami barbeque supreme',
            price: 849.99
        }
    ]
    let title = document.createElement('h3');
    title.textContent = 'Given below are our most bought, most popular, or in other words, bestselling pizzas!';
    title.style.textAlign = 'center';
    parentNode.appendChild(title);
    for (let menuItem of menuContent) {
        let item = document.createElement('div');
        item.classList.add('food');
        item.textContent = `${menuItem['name']} - ${menuItem['price']}`;
        parentNode.appendChild(item);
    }
}

function createContact() {
    let parentNode = document.querySelector('#Contact');
    let title = document.createElement('h3');
    title.textContent = 'Leave a missed call at 8EF32-80WLP and we\'ll connect with you on WhatsApp!';
    let ps = document.createElement('p');
    ps.textContent = 'PS: SPAM GUARANTEED';
    parentNode.appendChild(title);
    parentNode.appendChild(ps);
}

function setupTabs() {
    createHome();
    createMenu();
    createContact();
}

homeBtn.addEventListener('click', setBtnActive('Home'));
menuBtn.addEventListener('click', setBtnActive('Menu'));
contactBtn.addEventListener('click', setBtnActive('Contact'));

window.addEventListener('load', setupTabs);