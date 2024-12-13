<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-[#1c1e22]">
    <h1 class="text-4xl font-bold text-red-600 mb-4">¡Página no encontrada!</h1>
    <p class="text-lg text-gray-300 mb-8">La página que estás buscando no existe.</p>
    <router-link
      to="/"
      class="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-xl"
    >
      Volver al inicio
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
/* Si necesitas agregar más estilos personalizados, puedes hacerlo aquí */
</style>
