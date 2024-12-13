<template>
  <div class="home">
  <!-- Navbar -->
    <!-- Header -->
    <div class="header">
      <h1 class="t1">Juan Iglesias</h1>
      <div class="header-icons">
        <span>22:21</span>
        <i class="icon-whatsapp"></i>
        <i class="icon-cloud"></i>
      </div>
    </div>

    <!-- Balance Card -->
    <div class="balance-card">
      <p class="t2">Banco</p>
      <h2 class="negative">- $552.81 USD</h2>
      <span>36 transacciones</span>
    </div>

    <!-- Budget Card -->
    <div class="budget-card">
      <h2 class="t2">Presupuesto</h2>
      <h3>$856.21 restante de $856.21</h3>
      <div class="progress-bar">
        <span>Hoy</span>
        <div class="progress">
          <div class="progress-fill" style="width: 0%;"></div>
        </div>
        <span>31 dic</span>
      </div>
      <p>Puede gastar $27.62/día para 31 más días</p>
    </div>

    <!-- Chart Card -->
    <div class="chart-card">
      <canvas id="chart"></canvas>
      <div class="filters">
        <button
          v-for="filter in filters"
          :key="filter"
          :class="{ active: activeFilter === filter }"
          @click="changeFilter(filter)"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "HomeView",
  setup() {
    const filters = ["Todo", "Gasto", "Ingreso"];
    const activeFilter = reactive({ value: "Todo" });
    const chartData = reactive({
      Todo: [500, 300, 200, 400, 100],
      Gasto: [300, 200, 100, 400, 50],
      Ingreso: [200, 100, 100, 0, 50],
    });

    let chart = null;

    const renderChart = () => {
      if (chart) chart.destroy();
      const ctx = document.getElementById("chart").getContext("2d");
      chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["1 nov", "9 nov", "16 nov", "24 nov", "1 dic"],
          datasets: [
            {
              label: "Historial",
              data: chartData[activeFilter.value],
              borderColor: "#4caf50",
              backgroundColor: "rgba(76, 175, 80, 0.2)",
              borderWidth: 2,
              fill: true,
            },
          ],
        },
      });
    };

    onMounted(() => {
      renderChart();
    });

    const changeFilter = (filter) => {
      activeFilter.value = filter;
      renderChart();
    };

    return { filters, activeFilter, changeFilter };
  },
};
</script>

<style scoped>
/* Estilos principales */
.home {
  min-height: 100vh;
  background-color: #1c1e22;
  color: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
}
.t1 {
  font-size: 70px;
  font-weight: bold;
}
.header-icons span {
  font-size: 14px;
  color: #cccccc;
}

/* Tarjetas */
.balance-card,
.budget-card,
.chart-card {
  background-color: #292c31;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.t2 {
  font-size: 24px;
  font-weight: 600;
  color: #4caf50;
}
.negative {
  color: #ff4d4d;
}

/* Progreso */
.progress-bar {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.progress {
  flex: 1;
  height: 8px;
  background-color: #444;
  border-radius: 4px;
}
.progress-fill {
  height: 100%;
  background-color: #4caf50;
  border-radius: 4px;
}

/* Gráfico */
.chart-card canvas {
  width: 100%;
  height: auto;
}
.filters {
  display: flex;
  gap: 8px;
}
.filters button {
  flex: 1;
  padding: 8px;
  cursor: pointer;
  background-color: #33363b;
  border-radius: 8px;
  color: #ffffff;
}

.filters button:hover,
.filters button:focus {
  background-color: #4caf50; /* Fondo verde al hacer hover o focus */
  color: #ffffff; /* Texto blanco */
  outline: none; /* Elimina el contorno predeterminado */
}
.filters button.active {
  background-color: #4caf50; /* Verde para el botón activo */
}


.filters button.active {
  background-color: #4caf50;
}
</style>
