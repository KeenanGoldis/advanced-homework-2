import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ImageSlider from "./components/ImageSlider.js";
import ProductDetail from "./components/ProductDetail.js";
import SubHeader from "./components/SubHeader.js"
import TopNav from "./components/TopNav.js"

function App(props) {
// use filter, then use map.

// this filters the category's products
  const productFiltered = props.state.products.filter((product) => {
    return product.category === props.currentCategory;
  })

// this maps the array that I just filtered.
  const ProductDivs = productFiltered.map((product, index) => {
    return <ProductDetail key={index} product={product} />
  });

  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <Header />
          <div className="clear"></div>
          <SubHeader />
		      <div className="clear"></div>
          <TopNav
            changeCategory={(catagory) => {return props.change(catagory);}}
          />
        </div>
        <ImageSlider />
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
              <div className="section group">
                {ProductDivs}
              </div>
            </div>

            <div className="products products-secondbox">
              <h5><span>Our</span> Specials</h5>
            </div>
          </div>
        </div>
        <div className="clear">

        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
