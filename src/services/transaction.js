export const transactionService = {
    getTransactions() {
      const staticTransactions = [
        { name: 'Venta de producto A', type: 'Ingreso', price: 1000, date: '2024-12-01' },
        { name: 'Compra de materiales', type: 'Gasto', price: 300, date: '2024-12-02' },
        { name: 'Venta de producto B', type: 'Ingreso', price: 500, date: '2024-12-03' },
        { name: 'Pago de servicios', type: 'Gasto', price: 200, date: '2024-12-04' },
      ];
  
      const localTransactions = JSON.parse(localStorage.getItem('myData')) || [];
  
      const allTransactions = [...staticTransactions, ...localTransactions];
  
      return Promise.resolve(allTransactions);
    }
  };