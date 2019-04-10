'use strict';

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: "150$" },
            { title: 'Socks', price: "50$" },
            { title: 'Jacket', price: "350$" },
            { title: 'Shoes', price: "250$" },
            { title: 'Skirt', price: "120$" },
            { title: 'Tie', price: "25$" },
            { title: 'Coat', price: "330$" },
            { title: 'Jacket', price: "350$" },
            { title: 'Shoes', price: "250$" },
            { title: 'Skirt', price: "120$" },
            { title: 'Tie', price: "25$" },
            { title: 'Coat', price: "330$" }
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    sumGoods() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += parseInt(item.price);
        })
        return sum;
    }
}

class Basket {
    constructor() {
        this.desiredProducts = [];
    }

    fetchDesiredProducts() {
        // здесь будут генерироваться в новый массив (который в конструкторе) желаемые товары при нажатии кнопки "купить" (ну в идеале)
    }

    renderDesiredProducts() {
        //здесь они должны выводиться
    }
}

class BasketItem {
    constructor() {
        
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.sumGoods());
