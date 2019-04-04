// 'use strict';

// const GOODS = [
//     { title: 'Shirt', price: "150$" },
//     { title: 'Socks', price: "50$" },
//     { title: 'Jacket', price: "350$" },
//     { title: 'Shoes', price: "250$" },
//     { title: 'Skirt', price: "120$" },
//     { title: 'Tie', price: "25$" },
//     { title: 'Coat', price: "330$" },
//     { title: 'Jacket', price: "350$" },
//     { title: 'Shoes', price: "250$" },
//     { title: 'Skirt', price: "120$" },
//     { title: 'Tie', price: "25$" },
//     { title: 'Coat', price: "330$" }

// ];

// const renderGoodsItem = (title = 'Umbrella', price = '300$') => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;


// const renderGoodsList = (list) => {
//     const goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(''); // возникновение запятой происходит из-за шаблонов литералов, тк они по умолчанию используют метод toString и присоединяют возвращенный массив с запятыми
//     document.querySelector('.goods-list').innerHTML = goodsList;
// };

// renderGoodsList(GOODS);


var goods = [
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

var renderGoodsItem = function(title = 'Umbrella', price = '300$') {
    return `<div class="goods-item"><h3>` + title + `</h3><p>` + price + `</p></div>`; 
}

var renderGoodsList = function(list) {
    var goodsList = list.map(function(item) {
        return renderGoodsItem(item.title, item.price);
    })
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);

