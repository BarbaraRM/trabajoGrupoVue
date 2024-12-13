<template>
  <div class="flex flex-col lg:flex-row gap-6 p-6 text-white">
    <div class="flex flex-col gap-6 w-full lg:max-w-[300px] mx-10">
      <TotalCard title="Total Ingresos" :amount="totalIngresos" iconPath="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></TotalCard>
      <TotalCard title="Total Egresos" :amount="totalEgresos" iconPath="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></TotalCard>
      <TotalCard title="Saldo Disponible" :amount="saldoDisponible" iconPath="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"></TotalCard>
    </div>

    <TransactionTable :transactions="transactions" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { transactionService } from '../services/transaction.js'; // Importar el servicio
import TotalCard from '../components/TotalCard.vue'
import TransactionTable from '../components/TransactionTable.vue'

export default {
  name: 'TransactionsView',
  components: {
    TotalCard,
    TransactionTable
  },
  setup() {
    const transactions = ref([]);

    onMounted(() => {
      transactionService.getTransactions().then((data) => {
        transactions.value = data;
      });
    });

    const totalIngresos = computed(() => {
      return transactions.value
        .filter(t => t.type === 'Ingreso')
        .reduce((acc, curr) => acc + curr.amount, 0);
    });

    const totalEgresos = computed(() => {
      return transactions.value
        .filter(t => t.type === 'Gasto')
        .reduce((acc, curr) => acc + curr.amount, 0);
    });

    const saldoDisponible = computed(() => {
      return totalIngresos.value - totalEgresos.value;
    });

    return {
      transactions,
      totalIngresos,
      totalEgresos,
      saldoDisponible,
    };
  },
};
</script>

<style scoped>
</style>
