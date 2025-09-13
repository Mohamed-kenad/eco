import React, { useState } from 'react';
import { Heart, ShoppingCart, X, Star } from 'lucide-react';

const Wishlist = ({ wishlistItems, setWishlistItems, addToCart, navigateTo, showProductDetails }) => {

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قائمة المفضلة فارغة</h2>
            <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى قائمة المفضلة بعد</p>
            <button 
              onClick={() => navigateTo('products')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              تصفح المنتجات
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">قائمة المفضلة</h1>
          <p className="text-gray-600">لديك {wishlistItems.length} منتج في قائمة المفضلة</p>
        </div>

        {/* Wishlist Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => showProductDetails(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(item.id);
                  }}
                  className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Stock Status */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    (item.inStock !== false)
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {(item.inStock !== false) ? 'متوفر' : 'غير متوفر'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => showProductDetails(item)}
              >
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 mr-2">
                    {item.rating} ({item.reviews || 0})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-amber-600 ml-2">
                    {item.price} ر.س
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {item.originalPrice} ر.س
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    disabled={item.inStock === false}
                    className={`flex-1 py-2 px-4 rounded-xl font-medium transition-colors flex items-center justify-center ${
                      (item.inStock !== false)
                        ? 'bg-amber-500 text-white hover:bg-amber-600'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 ml-2" />
                    {(item.inStock !== false) ? 'إضافة للسلة' : 'غير متوفر'}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(item.id);
                    }}
                    className="p-2 border border-red-300 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigateTo('products')}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
          >
            متابعة التسوق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;