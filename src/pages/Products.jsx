import "./Product.css"


const product = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "/images/product-1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "/images/product-2.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "/images/product-3.jpg",
    },
]



function Products() {
    return (
        <div>
  <section className="products-banner">
    <div className="banner-content">
      <h2>All products</h2>
      <p>
        <span className="thick-underline">Exp</span>lore our wide range of top quality product
      </p>
    </div>
  </section>


  <section className="product-content">
    <aside className="filter-sidebar">
        <div className="filter-title">
            <h3>FILTERS</h3>
            <button>Clear ALl</button>
        </div>

        <div>
            <div className="filter-group">
                <h4>Categories</h4>
               <label > <input type="checkbox" />Electronics</label>
               <label > <input type="checkbox" />Fashion</label>
               <label > <input type="checkbox" />Home & Kitchen</label>
               <label > <input type="checkbox" />Beauty & Personal Care</label>
               <label > <input type="checkbox" />Sports & Fitness</label>
               <label > <input type="checkbox" />Books & Stationery</label>
            </div>

            <div className="filter-group">
                <h4>Price Range</h4>
                <input type="range" min="199" max="20000"/>

                <div className="price-range">
                    <span>199</span>
                    <span>20000</span>
                </div>
                
            </div>

            <div className="filter-group">
                <h4>rating</h4>
                <label > <input type="checkbox" />⭐️⭐️⭐️⭐️⭐️ & above</label>
                <label > <input type="checkbox" />⭐️⭐️⭐️⭐️  & above</label>
                <label > <input type="checkbox" />⭐️⭐️ & above</label>
                <label > <input type="checkbox" />⭐️ & abov</label>
            </div>

            <div className="filter-group">
                <h4>Availability</h4>
                <label > <input type="checkbox" />In Stock</label>
                <label > <input type="checkbox" />Out of Stock</label>
            </div>


        </div>
    </aside>
  </section>
</div>


        
    );
}
export default Products;