
import { Link } from "react-router-dom"
import "./Home.css"
const products = [
 {
   id: 1,
    name: "boAt Rockerz 450",
    category: "Electronics",
    price: 1599,
    rating: 4.5,
    reviews: 1200,
    image: "/images/products/headphones.png"
  },
  {
    id: 2,
    name: "Noise ColorFit Pro 4",
    category: "Electronics",
    price: 2999,
    rating: 4.6,
    reviews: 2300,
    image: "/images/products/noisefit.png"
  },
    {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/sneakers.png"
  },   
  {
    
  id: 4,
  name: "Levi's Jeans",
  category: "Fashion",
  price: 2099,
  rating: 4.5,
  reviews: 890,
  image: "/images/products/jeans.png",
},
{
  
  id: 5,
  name: "boAt Airdopes 141",
  category: "Electronics",
  price: 1299,
  rating: 4.4,
  reviews: 3400,
  image: "/images/products/airdopes.png",
},
{
  id: 6,
  name: "Iphone 17 pro max",
  category: "Electronics",
  price: 124000,
  rating: 4.9,
  reviews: 2100,
  image: "/images/products/iphone.png",
},
{
  id: 7,
  name: "Men's Casual Shirt",
  category: "Fashion",
  price: 899,
  rating: 4.3,
  reviews: 760,
  image: "/images/products/ferrari.png",
},

{
  id: 8,
  name: "Minimalist Table Lamp",
  category: "Home & Kitchen",
  price: 1199,
  rating: 4.5,
  reviews: 540,
  image: "/images/products/lamp.png",
},
];

function Home() {
  return (
    <>
    <section className="hero-section">
      <div className="hero-content">
        <h1>Good Choices. <br/> <span>Great Prices.</span></h1>
        <p>Everything you need, <br/> delivered to your door.</p>
        <div className="hero-buttons">
          <button className='shop-btn'>Shop Now →</button>

          <button className="deal-btn">Explore Deals</button>
        </div>


<div className="hero-benefits">
  <div className="benefits-item">
    <img src="/icons/secure.png" alt="" />
    <p>100% Secure Payments</p>
  </div>
  
  <div className="benefits-item">
    <img src="/icons/clock.png" alt="" />
    <p>7 Days Easy Returns</p>
  </div>

  <div className="benefits-item">
    <img src="/icons/express-delivery.png" alt="" />
    <p>Fast & Free Delivery</p>
  </div>
</div>

      </div>
    </section>


   
<section className="category-section">
  <div className="section-heading">
    <h2>Shop by Category</h2>

    <a href="#">View All Categories →</a>
  </div>


  <div className="category-list">
    <div className="category-card electronics">
      <img src="/images/category-electronics.png" alt="Electronics" />
      <h3>Electronics</h3>
      <p>1200+ Products</p>
    </div>


    <div className="category-card fashion">
      <img src="/images/category-fashion.png" alt="Fashion" />
      <h3>Fashion</h3>
      <p>1800+ Products</p>
    </div>

    <div className="category-card home-kitchen">
      <img src="/images/category-home.png" alt="Home & Kitchen" />
      <h3>Home & Kitchen</h3>
      <p>950+ Products</p>
    </div>

    <div className="category-card beauty">
      <img src="/images/category-beauty.png" alt="Beauty & Personal Care" />
      <h3>Beauty & Personal Care</h3>
      <p>750+ Products</p>
    </div>

    <div className="category-card sports">
      <img src="/images/category-fitness.png" alt="Sports & Fitness" />
      <h3>Sports & Fitness</h3>
      <p>600+ Products</p>
    </div>
    <div className="category-card books">
      <img src="/images/category-books.png" alt="Books & Stationery" />
      <h3>Books & Stationery</h3>
      <p>500+ Products</p>
    </div>
  </div>
</section>

{/* shop by category end here */}

{/* Trending now section heading start here */}
<section className="products-section" id='trending'>
  <div className="section-heading">

    <div className="trending-heading">
      <h2 className="trending-title">
        <img src="/icons/trending.png" alt="trending" />
        Trending <strong>Now</strong>
      </h2>
      <p className="trending-subtitle">
        Most Popular Choices This Week
      </p>
    </div>
    <Link to="/products" className='view-products'>
    View All Products →
    </Link>
  </div>


  <div className="trending-product-grid">
    {products.map((item) => (
      <div key={item.id} className="product-card">
        <div className="product-img-wrapper">
          <img src={item.image} alt={item.name} />
        </div>
        <span className="product-category">{item.category}</span>
        <h3 className="product-title">{item.name}</h3>
        <div className="product-meta">
          <span className="product-price">₹{item.price.toLocaleString()}</span>
        </div>
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    ))}
  </div>


</section>



    </>
  )
}

export default Home