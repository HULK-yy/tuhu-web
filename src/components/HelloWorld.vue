<template>
  <div id="home">
    <product :sTimer="sTimer"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Product from '@/components/ProductDetail.vue';
@Component({
  components: {
    Product
  }
})
export default class HelloWorld extends Vue {
  @Prop() public sTimer?: number;
}
</script>
