<template>
  <div class="bg-[#1c1e22] min-h-screen">
    <NavbarComponent />
    <router-view></router-view> <!-- Aquí se renderizarán las vistas -->
    <FormInput />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FormInput from './components/FormInput.vue';

export default {
  name: "App",
  components: { NavbarComponent, FormInput },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
