import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <span className="new-badge">HOT</span>
            <span>Free Express Delivery on all orders over ₹499!</span>
          </div>
          <div>
            <span>Help & Support | Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar shop-navbar">
        <div className="container-fluid">
          {/* 1. Logo */}
          <Link to="/" className="shopKart-logo">
            ShopKart
          </Link>

          {/* 2. Category Dropdown */}
          <div className="dropdown">
            <select
              id="search-select"
              name="search-category"
              className="category-select"
              defaultValue=""
            >
              <option value="" disabled>
                All Categories
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Living</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>

          {/* 3. Search Bar */}
          <div className="nav-search">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
            />
            <button type="button" aria-label="Search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* 4. Nav Links */}
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          {/* 5. Wishlist Icon */}
          <Link to="/wishlist" className="nav-icon" title="Wishlist">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="Wishlist"
              className="nav-icon-img"
            />
          </Link>

          {/* 6. Cart Icon with Badge */}
          <Link to="/cart" className="nav-icon cart-icon" title="Cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Cart"
              className="nav-icon-img"
            />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
