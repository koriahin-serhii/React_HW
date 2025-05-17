import Greeting from './Greeting'
import OrderStatus from './OrderStatus'
import ShoppingList from './ShoppingList'

function App() {
  const products = ['Яблоки', 'Бананы', 'Груши']
  const orders = [
    { orderId: 101, status: 'Выполнен' },
    { orderId: 102, status: 'В процессе' },
    { orderId: 103, status: 'Отменен' },
  ]
  return (
    <div className="App">
      <Greeting name="Василий" />
      <ShoppingList items={products} />
      <h2>Статус заказов</h2>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  )
}

export default App
