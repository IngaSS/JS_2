<template>
  <div class="products">
    <Product
      v-for="product of filtered"
      :key="product.id_product"
      :img="imgCatalog"
      :product="product"
      :addProduct="addProduct"
    ></Product>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductList",
  props: ["filtered", "addProduct"],
  components: {
    Product
  },
  data() {
    return {
      imgCatalog: "https://placehold.it/200x150"
    };
  }
};
</script>

<style>
.products{
    column-gap: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-template-rows: 1fr;
    padding: 40px 80px;
    justify-content: space-between;
}
</style>

