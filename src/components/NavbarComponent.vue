<template>
  <div class="navbar">
    <!-- Enlace a la página de inicio -->
    <router-link to="/home" class="nav-button">
      <i class="icon-home"></i>
      <span>Inicio</span>
    </router-link>

    <!-- Enlace a la página de transacciones -->
    <router-link to="/transactions" class="nav-button">
      <i class="icon-transactions"></i>
      <span>Transacciones</span>
    </router-link>

    <!-- Enlace a la página de presupuestos -->
    <router-link to="/budgets" class="nav-button">
      <i class="icon-budget"></i>
      <span>Presupuestos</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #292c31; /* Fondo oscuro */
  padding: 12px 0;
  border-top: 1px solid #444; /* Línea superior */
}

.nav-button {
  color: #ffffff; /* Texto blanco */
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  background: none; /* Sin fondo */
  border: none; /* Sin bordes */
  text-decoration: none; /* Eliminar subrayado en el enlace */
}

.nav-button i {
  display: block;
  font-size: 20px;
  margin-bottom: 4px; /* Espaciado entre el ícono y el texto */
}

.nav-button span {
  font-size: 14px; /* Tamaño del texto */
}
</style>
