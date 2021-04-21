let menuBtn = document.querySelector('.menu-btn');
let homeBtn = document.querySelector('.home-btn');
let contactBtn = document.querySelector('.contact-btn');

class Content {
    constructor(name, func) {
        this.name = name;
        this.func = func;
    }
    onClick() {
        return function () {
            let buttons = document.querySelectorAll('.tabcontent');
            for (let content of buttons) {
                content.style.display = 'none';
            }
            let specBtn = document.querySelector(`#${this.name}`);
            specBtn.style.display = 'block';
            this.func();
        }
        
    }
}

let menu = new Content('Menu', () => {
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
});

let home = new Content('Home', () => {
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
});

let contact = new Content('Contact', () => {
    let parentNode = document.querySelector('#Contact');
    let title = document.createElement('h3');
    title.textContent = 'Leave a missed call at 8EF32-80WLP and we\'ll connect with you on WhatsApp!';
    let ps = document.createElement('p');
    ps.textContent = 'PS: SPAM GUARANTEED';
    parentNode.appendChild(title);
    parentNode.appendChild(ps);
});

homeBtn.addEventListener('click', home.onClick);
menuBtn.addEventListener('click', menu.onClick);
contactBtn.addEventListener('click', contact.onClick);