export const transactionService = {
    getTransactions() {
      return Promise.resolve([
        { name: 'Venta de producto A', type: 'Ingreso', amount: 1000, date: '2024-12-01' },
        { name: 'Compra de materiales', type: 'Gasto', amount: 300, date: '2024-12-02' },
        { name: 'Venta de producto B', type: 'Ingreso', amount: 500, date: '2024-12-03' },
        { name: 'Pago de servicios', type: 'Gasto', amount: 200, date: '2024-12-04' },
      ]);
    }
  };