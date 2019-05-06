<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="img" alt="Some image">
      <div class="product-desc">
        <p class="product-title">{{cartItem.product_name}}</p>
        <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
        <p class="product-single-price">$ {{cartItem.price}} each</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
      <button class="del-btn" @click="removeProduct(cartItem)">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItem", "img", "removeProduct"]
};
</script>

<style>
.cart-item {
  display: flex;
  justify-content: space-between;
}
.cart-item:not(:last-child) {
  margin-bottom: 20px;
}
.product-bio {
  display: flex;
}
.cart-item img {
  align-self: flex-start;
  margin-right: 15px;
}

.product-single-price {
  color: #474747;
  font-size: 0.5em;
}
.product-price {
  margin-left: 30px;
}
.product-desc {
  max-width: 150px;
}
.product-quantity {
  margin-top: 15px;
  font-size: 0.75em;
}
.right-block {
  text-align: right;
}

.del-btn {
  margin-top: 5px;
  background-color: #2f2a2d;
  padding: 5px 15px;
  border: 1px solid transparent;
  color: #fafafa;
  border-radius: 5px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
}
.del-btn:hover {
  background-color: #fafafa;
  color: #2f2a2d;
  border: 1px solid #2f2a2d;
}
</style>


