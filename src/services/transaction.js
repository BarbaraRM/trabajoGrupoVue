export const transactionService = {
  getTransactions() {
    // Obtener transacciones iniciales
    const staticTransactions = [
      { name: 'Venta de producto A', type: 'Ingreso', price: 1000.567, date: '2024-12-01' },
      { name: 'Compra de materiales', type: 'Gasto', price: 300.2, date: '2024-12-02' },
      { name: 'Venta de producto B', type: 'Ingreso', price: 500, date: '2024-12-03' },
      { name: 'Pago de servicios', type: 'Gasto', price: 200.759, date: '2024-12-04' },
    ];

    const localTransactions = JSON.parse(localStorage.getItem('myData')) || [];

    const allTransactions = [...staticTransactions, ...localTransactions].map(transaction => ({
      ...transaction,
      amount: parseFloat(transaction.price).toFixed(2),
    }));
    return Promise.resolve(allTransactions);
  },
  };