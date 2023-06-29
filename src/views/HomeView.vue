<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped> 
  /* Importando Fonte */
  @font-face {
    font-family: "Flexo-Regular";
    src: url(../assets/fonts/Flexo/Flexo-Regular/Flexo-Regular.ttf) format('truetype');
}
  .home h1{
    font-family: "Flexo-Regular";
  }
</style>
