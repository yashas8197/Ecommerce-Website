import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

export default function App() {
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  const productData = products.map((product) => (
    <div key={product.id} className="col-md-4">
      <div className="card" style={{ maxWidth: "25rem" }}>
        <img
          className="card-img-top"
          src={product.productImageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <Link to={`products/${product.id}`} className="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-3">Featured Products</h1>
        <div className="row">{productData}</div>
      </main>
      <Footer />
    </>
  );
}
