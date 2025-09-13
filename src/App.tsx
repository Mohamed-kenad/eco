import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import LimitedOffers from './components/LimitedOffers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import Login from './components/Login';
import OrderTracking from './components/OrderTracking';
import Wishlist from './components/Wishlist';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ShippingPolicy from './components/ShippingPolicy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <Categories navigateTo={navigateTo} />
            <FeaturedProducts 
              addToCart={addToCart} 
              addToWishlist={addToWishlist} 
              wishlistItems={wishlistItems}
              showProductDetails={showProductDetails}
            />
            <LimitedOffers addToCart={addToCart} />
            <Contact />
          </>
        );
      case 'products':
        return <ProductList 
          addToCart={addToCart} 
          addToWishlist={addToWishlist} 
          wishlistItems={wishlistItems} 
          navigateTo={navigateTo}
          showProductDetails={showProductDetails}
        />;
      case 'product-details':
        return <ProductDetails 
          product={selectedProduct}
          addToCart={addToCart} 
          addToWishlist={addToWishlist} 
          wishlistItems={wishlistItems} 
          navigateTo={navigateTo}
          showProductDetails={showProductDetails}
        />;
      case 'cart':
        return <Cart cartItems={cartItems} setCartItems={setCartItems} navigateTo={navigateTo} />;
      case 'checkout':
        return <Checkout cartItems={cartItems} navigateTo={navigateTo} />;
      case 'profile':
        return <Profile navigateTo={navigateTo} />;
      case 'login':
        return <Login setIsLoggedIn={setIsLoggedIn} navigateTo={navigateTo} />;
      case 'tracking':
        return <OrderTracking navigateTo={navigateTo} />;
      case 'wishlist':
        return <Wishlist 
          wishlistItems={wishlistItems} 
          setWishlistItems={setWishlistItems} 
          addToCart={addToCart} 
          navigateTo={navigateTo}
          showProductDetails={showProductDetails}
        />;
      case 'faq':
        return <FAQ navigateTo={navigateTo} />;
      case 'blog':
        return <Blog navigateTo={navigateTo} />;
      case 'privacy':
        return <PrivacyPolicy navigateTo={navigateTo} />;
      case 'terms':
        return <TermsOfService navigateTo={navigateTo} />;
      case 'shipping':
        return <ShippingPolicy navigateTo={navigateTo} />;
      default:
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <Categories navigateTo={navigateTo} />
            <FeaturedProducts 
              addToCart={addToCart} 
              addToWishlist={addToWishlist} 
              wishlistItems={wishlistItems}
              showProductDetails={showProductDetails}
            />
            <LimitedOffers addToCart={addToCart} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden" dir="rtl">
      <Header 
        navigateTo={navigateTo} 
        cartItems={cartItems} 
        wishlistItems={wishlistItems}
        isLoggedIn={isLoggedIn}
        currentPage={currentPage}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;