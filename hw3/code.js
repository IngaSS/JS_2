'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

function makeGETRequest(url) {
    return new Promise(function (resolve, reject) {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                xhr.status >= 200 && xhr.status < 300 ? resolve(xhr.responseText) : reject(`${xhr.statusText}, ${xhr.responseText}`);
            }
        };
        xhr.send();
    })
}

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h5>${this.product_name}</h5><p>${this.price} руб.</p><button class="addButton" data-name="${this.product_name}">Добавить</button><button class="removeButton" data-name="${this.product_name}">Удалить</button></div>`;
    }
}

class BasketItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    renderBasket() {
        return `<div class="basket-item"><h6>${this.product_name}</h6><p>${this.price} руб.</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.basket = [];
    }
    fetchGoods() {
        makeGETRequest(API_URL)
            .then(response => {
                this.goods = JSON.parse(response)
                return this.goods;
            })
            .then(() => this.render())
            .then(() => this.renderBasketList())
            .then(() => this.addButtonsClick())
            .then(() => this.removeButtonClick())
            .catch(error => { throw new Error(error) })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    renderBasketList() {
        let basketHTML = '';
        this.basket.forEach(item => {
            const basketItem = new BasketItem(item.product_name, item.price);
            basketHTML += basketItem.renderBasket();
        });
        document.querySelector('.basket').innerHTML = basketHTML;
    }

    addButtonsClick() {
        let addButtons = document.querySelectorAll('.addButton');
        addButtons.forEach(item => {
            item.addEventListener('click', (event) => this.addItem(event, this.goods));
        })
    }

    removeButtonClick() {
        let removeButtons = document.querySelectorAll('.removeButton');
        removeButtons.forEach(item => {
            item.addEventListener('click', (event) => this.removeItem(event, this.basket))
        })
    }

    addItem(event, goods) {
        let targetItem = goods.find(item => {
            return item.product_name === event.target.dataset.name;
        })
        this.basket.push(targetItem);
        this.renderBasketList();
    }

    removeItem(event, basket) {
        let targetItem = basket.find(item => {
            return item.product_name === event.target.dataset.name;
        })
        let i = this.basket.indexOf(targetItem);
        this.basket.splice(i, 1);
        this.renderBasketList();
    }

    // sumGoods() {
    //     let sum = 0;
    //     this.goods.forEach(item => {
    //         sum += parseInt(item.price);
    //     })
    //     return sum;
    // }
}

const list = new GoodsList();
list.fetchGoods()
