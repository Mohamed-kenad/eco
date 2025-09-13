import React, { useState } from 'react';
import { ShoppingCart, Menu, X, User, Heart } from 'lucide-react';

const Header = ({ navigateTo, cartItems = [], wishlistItems = [], isLoggedIn = false, currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page, e) => {
    e.preventDefault();
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
      {/* Main Header */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse flex-shrink-0">
            <button 
              onClick={(e) => handleNavigation('home', e)}
              className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="text-white font-bold text-xl">🍯</span>
            </button>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-amber-800 px-1">عسل الطبيعة</h1>
              <p className="text-sm text-gray-600 px-1">أجود أنواع العسل والزيوت</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <button onClick={(e) => handleNavigation('home', e)} className={`font-medium transition-colors px-3 ${currentPage === 'home' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>الرئيسية</button>
            <button onClick={(e) => handleNavigation('products', e)} className={`font-medium transition-colors px-3 ${currentPage === 'products' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>المنتجات</button>
            <button onClick={(e) => handleNavigation('blog', e)} className={`font-medium transition-colors px-3 ${currentPage === 'blog' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>المدونة</button>
            <button onClick={(e) => handleNavigation('faq', e)} className={`font-medium transition-colors px-3 ${currentPage === 'faq' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>الأسئلة الشائعة</button>
            <button onClick={(e) => handleNavigation('tracking', e)} className={`font-medium transition-colors px-3 ${currentPage === 'tracking' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>تتبع الطلب</button>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-3 space-x-reverse flex-shrink-0">
            <button 
              onClick={(e) => handleNavigation(isLoggedIn ? 'profile' : 'login', e)}
              className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              onClick={(e) => handleNavigation('wishlist', e)}
              className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Heart className="h-6 w-6 text-gray-700" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={(e) => handleNavigation('cart', e)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            {/* Mobile Navigation */}
            <nav className="p-4">
              <ul className="space-y-2">
                <li><button onClick={(e) => handleNavigation('home', e)} className="block py-2 text-gray-700 hover:text-amber-600 font-medium w-full text-right">الرئيسية</button></li>
                <li><button onClick={(e) => handleNavigation('products', e)} className="block py-2 text-gray-700 hover:text-amber-600 font-medium w-full text-right">المنتجات</button></li>
                <li><button onClick={(e) => handleNavigation('blog', e)} className="block py-2 text-gray-700 hover:text-amber-600 font-medium w-full text-right">المدونة</button></li>
                <li><button onClick={(e) => handleNavigation('faq', e)} className="block py-2 text-gray-700 hover:text-amber-600 font-medium w-full text-right">الأسئلة الشائعة</button></li>
                <li><button onClick={(e) => handleNavigation('tracking', e)} className="block py-2 text-gray-700 hover:text-amber-600 font-medium w-full text-right">تتبع الطلب</button></li>
              </ul>
              
              {/* Mobile Actions */}
              <div className="flex items-center justify-center space-x-4 space-x-reverse mt-4 pt-4 border-t border-gray-200 gap-5">
                <button 
                  onClick={(e) => handleNavigation(isLoggedIn ? 'profile' : 'login', e)}
                  className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-amber-600"
                >
                  <User className="h-5 w-5" />
                  <span>{isLoggedIn ? 'حسابي' : 'تسجيل الدخول'}</span>
                </button>
                <button 
                  onClick={(e) => handleNavigation('wishlist', e)}
                  className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-amber-600"
                >
                  <Heart className="h-5 w-5" />
                  <span>المفضلة</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;