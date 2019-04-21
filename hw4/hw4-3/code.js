'use strict';

class Form {
    constructor(name, className, type) {
        this.name = name;
        this.className = className;
        this.type = type;
    }

    render() {
        return `<label for="name">${this.name}</label><input class="${this.className}" type="${this.type}" name="${this.className}" required">`;
    }
}

class FormItems {
    constructor() {
        this.elements = [];
        this.requirements = [];
    }

    fetchElements() {
        this.elements = [
            { name: 'Имя', className: 'name', type: 'text' },
            { name: 'Номер телефона', className: 'phone', type: 'tel' },
            { name: 'E-mail', className: 'mail', type: 'e-mail' }
        ]
    }

    addTextArea() {
        let textArea = document.createElement('textarea');
        let textLabel = document.createElement('label');
        textLabel.className = 'textLabel';
        textLabel.innerText = 'Ваш текст';
        textArea.className = 'text';
        textArea.name = 'text';
        document.getElementById('fields').append(textLabel, textArea);
    }

    renderElements() {
        let formHTML = '';
        this.elements.forEach(elem => {
            const item = new Form(elem.name, elem.className, elem.type);
            formHTML += item.render();
        });
        document.getElementById('fields').innerHTML = formHTML;
    }

    addEventlistener() {
        let form = document.getElementById('myForm').addEventListener('submit', (event) => this.submitForm(event));
    }

    submitForm(event) {
        event.preventDefault();

        let name = document.querySelector('.name');
        let phone = document.querySelector('.phone');
        let mail = document.querySelector('.mail');
        let li = document.querySelectorAll('.error');

        if (this.validateName(name.value) && this.validatePhoneNumber(phone.value) && this.validateMail(mail.value)) {
            alert('Ваш запрос отвправлен!');
            if (li !== []) {
                li.forEach(elem => {
                    elem.remove();
                })
            }
        } else {
            if (!this.validateName(name.value)) {
                let err = document.createElement('li');
                err.className = 'error';
                err.innerText = 'Введеное Вами имя не соответствует требованиям.';
                document.querySelector('.errors').appendChild(err);
            }
            if (!this.validatePhoneNumber(phone.value)) {
                let err = document.createElement('li');
                err.className = 'error';
                err.innerText = 'Номер Вашего телефона не совпадает с требуемыми критериями.';
                document.querySelector('.errors').appendChild(err);
            }
            if (!this.validateMail(mail.value)) {
                let err = document.createElement('li');
                err.className = 'error';
                err.innerText = 'Не правильно введен адрес электронной почты.';
                document.querySelector('.errors').appendChild(err);
            }
            if (li !== []) {
                li.forEach(elem => {
                    elem.remove();
                })
            }
        }
    }

    validateForm() {
        let inputs = document.querySelectorAll('input');
        inputs.forEach(elem => {
            if (elem.name === 'name') {
                elem.onblur = () => {
                    this.validateName(elem.value);
                }
            };
            if (elem.name === 'phone') {
                elem.onblur = () => {
                    this.validatePhoneNumber(elem.value);
                }
            };
            if (elem.name === 'mail') {
                elem.onblur = () => {
                    this.validateMail(elem.value);
                }
            };
        })
    }

    validateName(name) {
        let regexp = /[a-zA-ZА-яа-я]/;
        let input = document.querySelector('.name');
        if (regexp.test(name)) {
            input.style.border = '.5px solid green';
            input.style.background = '#76B276';
            return { valid: true };
        } else {
            input.style.border = '.5px solid red';
            input.style.background = '#FFA3A3';
        }
    }

    validatePhoneNumber(phone) {
        let input = document.querySelector('.phone');
        let regexp = /((\+7))?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8}$/;
        if (regexp.test(phone)) {
            input.style.border = '.5px solid green';
            input.style.background = '#76B276';
            return { valid: true };
        } else {
            input.style.border = '.5px solid red';
            input.style.background = '#FFA3A3';
        }
    }

    validateMail(mail) {
        let input = document.querySelector('.mail');
        let regexp = /^([^\W])([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
        if (regexp.test(mail)) {
            input.style.border = '.5px solid green';
            input.style.background = '#76B276';
            return { valid: true };
        } else {
            input.style.border = '.5px solid red';
            input.style.background = '#FFA3A3';
        }
    }
}

let myForm = new FormItems();
myForm.fetchElements();
myForm.renderElements();
myForm.addTextArea();
myForm.validateForm();
myForm.addEventlistener();
