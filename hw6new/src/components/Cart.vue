<template>
  <div>
    <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
    <div class="cart-block" v-show="showCart">
      <p v-if="!cartItems.length">Cart is empty</p>
      <CartItem
        v-for="product of cartItems"
        :key="product.id_product"
        :img="imgCart"
        :cartItem="product"
        :removeProduct="removeProduct"
      ></CartItem>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  name: "Cart",
  props: ["products", 'cartItems', 'removeProduct'],
  components: {
    CartItem
  },
  data() {
    return {
      imgCart: "https://placehold.it/50x100",
      showCart: false
    };
  }
};
</script>

<style>
.btn-cart {
  background-color: #fafafa;
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #2f2a2d;
  border-radius: 5px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
}
.btn-cart:hover {
  background-color: transparent;
  border-color: #fafafa;
  color: #fafafa;
}
.btn-cart {
  align-self: center;
}
.cart-block {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  right: 0;
  top: 130%;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
}
.cart-block:before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: -10px;
  right: 35px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
</style>


