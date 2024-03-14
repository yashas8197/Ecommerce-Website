import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Products = () => {
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
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
  ];
  const productsData = products.map((product) => (
    <div key={product.id} className="container d-flex justify-content-evenly  my-3">
      <div style={{ width: "20rem" }}>
        <img
          className="card-img-left img-fluid"
          src={product.productImageUrl}
          alt="Card image cap"
        />
      </div>
      <div>
        <div className=" card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <small>Price: {product.price}</small> <br></br>
          <Link to={`/products/${product.id}`} className="my-4 btn btn-primary">View Product</Link>
        </div>
      </div>
    </div>
  ));

  const filteredAffordable = products.filter(product => product.price.slice(1) < 80)

  const affordableProduct = filteredAffordable.map((product) => {
    return (
      <div key={product.id} className="container">
        <hr></hr>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    )
  })
  
  return (
    <>
      <Header />
      {productsData}
      
      <h2 className="container display-2">Affordable Products</h2>
      {affordableProduct}
      <Footer />
      
    </>
  );
};

export default Products;
