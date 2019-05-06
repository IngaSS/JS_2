<template>
  <header>
    <div class="logo">E-shop</div>
    <div class="cart">
      <SearchFilter :filterProducts="filterProducts"/>
      <Cart :products="this.products" :cartItems="cartItems" :removeProduct="removeProduct" />
    </div>
  </header>
</template>
<script>
import SearchFilter from './SearchFilter'
import Cart from './Cart'

export default {
  name: "Header",
  props: ["products", "filterProducts", 'cartItems', 'removeProduct'],
  components: {
    SearchFilter,
    Cart
  },
};
</script>

<style scoped>
header {
  display: flex;
  background-color: #2f2a2d;
  justify-content: space-between;
  color: #fafafa;
  padding: 30px 80px;
}

.logo {
  text-transform: uppercase;
  font-weight: bold;
  align-self: center;
}

.cart{
    display: flex;
    position: relative;
}
</style>

