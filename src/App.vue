<template>
<div class="bg-[#1c1e22] min-h-screen">
   <NavbarComponent />
    <router-view></router-view> <!-- Aquí se renderizarán las vistas -->
</div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: "App",
  components: { NavbarComponent  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
