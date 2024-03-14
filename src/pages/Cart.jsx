import Header from "../component/Header";
import Footer from "../component/Footer";

const Cart = () => {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const totalCost = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  const cartsData = cart.map((product) => {
    const totalPriceOfEach = product.price * product.quantity;
    return (
      <div key={product.id} className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <h5>{product.name}</h5>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p className="float-end">Total: {totalPriceOfEach.toFixed(2)}</p>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Shopping Cart</h1>
        {cartsData}
        <p className="fs-3">Total Price: ${totalCost}</p>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
