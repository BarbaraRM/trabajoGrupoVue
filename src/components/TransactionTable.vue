<template>
  <div class="w-full lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold mb-4">Transacciones</h2>
    <table class="min-w-full table-auto">
      <thead>
        <tr class="border-b border-gray-700">
          <th class="text-left py-2 px-4">Nombre</th>
          <th class="text-left py-2 px-4">Tipo</th>
          <th class="text-left py-2 px-4">Monto</th>
          <th class="text-left py-2 px-4">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="index" class="border-b border-gray-700">
          <td class="py-2 px-4">{{ transaction.name }}</td>
          <td class="py-2 px-4">{{ transaction.type }}</td>
          <td class="py-2 px-4">{{ transaction.price }}</td>
          <td class="py-2 px-4">{{ transaction.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TransactionTable',
  props: {
    transactions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
