import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, Filter, Grid, List } from 'lucide-react';

const ProductList = ({ addToCart, addToWishlist, wishlistItems = [], navigateTo, showProductDetails }) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: 'عسل السدر الجبلي الفاخر',
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'honey',
      badge: 'الأكثر مبيعاً',
      badgeColor: 'bg-red-500',
      description: 'عسل السدر الأصلي من أشجار السدر البرية في المناطق الجبلية'
    },
    {
      id: 2,
      name: 'زيت الزيتون البكر الممتاز',
      price: 89,
      originalPrice: 109,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      category: 'oil',
      badge: 'عضوي',
      badgeColor: 'bg-green-500',
      description: 'زيت زيتون بكر ممتاز معصور على البارد من أجود الزيتون'
    },
    {
      id: 3,
      name: 'عسل الزهور البرية الطبيعي',
      price: 159,
      originalPrice: 189,
      rating: 4.7,
      reviews: 64,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'honey',
      badge: 'جديد',
      badgeColor: 'bg-blue-500',
      description: 'عسل طبيعي من رحيق الزهور البرية المتنوعة'
    },
    {
      id: 4,
      name: 'زيت الأرغان المغربي الأصلي',
      price: 199,
      originalPrice: 239,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'oil',
      badge: 'مميز',
      badgeColor: 'bg-purple-500',
      description: 'زيت الأرغان المغربي الأصلي للعناية والطبخ'
    },
    {
      id: 5,
      name: 'عسل المانوكا النيوزيلندي',
      price: 449,
      originalPrice: 529,
      rating: 5.0,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'honey',
      badge: 'حصري',
      badgeColor: 'bg-amber-500',
      description: 'عسل المانوكا النيوزيلندي الأصلي بخصائص علاجية فريدة'
    },
    {
      id: 6,
      name: 'زيت جوز الهند البكر',
      price: 79,
      originalPrice: 99,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'oil',
      badge: 'طبيعي',
      badgeColor: 'bg-teal-500',
      description: 'زيت جوز الهند البكر للطبخ والعناية الطبيعية'
    },
    {
      id: 7,
      name: 'عسل الأكاسيا الذهبي',
      price: 199,
      originalPrice: 239,
      rating: 4.8,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'honey',
      badge: 'مميز',
      badgeColor: 'bg-yellow-500',
      description: 'عسل الأكاسيا الذهبي بطعمه الرقيق ولونه الفاتح'
    },
    {
      id: 8,
      name: 'زيت الخروع الطبيعي',
      price: 45,
      originalPrice: 59,
      rating: 4.5,
      reviews: 67,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'oil',
      badge: 'طبيعي',
      badgeColor: 'bg-green-500',
      description: 'زيت الخروع الطبيعي للعناية بالشعر والبشرة'
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع المنتجات' },
    { id: 'honey', name: 'العسل' },
    { id: 'oil', name: 'الزيوت' }
  ];

  const toggleFavorite = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToWishlist(product);
    }
  };

  const filteredProducts = products.filter(product => {
    if (filterCategory !== 'all' && product.category !== filterCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">جميع المنتجات</h1>
          <p className="text-gray-600">اكتشف مجموعتنا الكاملة من المنتجات الطبيعية</p>
        </div>

        {/* Main Content Grid - Fixed grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar - Responsive width */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-4 lg:p-6 shadow-lg lg:sticky lg:top-8">
              <div className="flex items-center lg:block">
                <Filter className="w-5 h-5 ml-2 lg:hidden" />
                <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">تصفية المنتجات</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-4 lg:mb-6">
                <h3 className="font-semibold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base">الفئة</h3>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-0 lg:space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center text-sm lg:text-base">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={filterCategory === category.id}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="ml-2 w-3 h-3 lg:w-4 lg:h-4"
                      />
                      <span className="text-gray-700 truncate">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-4 lg:mb-6">
                <h3 className="font-semibold text-gray-900 mb-2 lg:mb-3 text-sm lg:text-base">نطاق السعر</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${(priceRange[1] / 1000) * 100}%, #e5e7eb ${(priceRange[1] / 1000) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs lg:text-sm text-gray-600">
                    <span>{priceRange[0]} ر.س</span>
                    <span>{priceRange[1]} ر.س</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setFilterCategory('all');
                  setPriceRange([0, 1000]);
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-3 lg:px-4 rounded-xl hover:bg-gray-200 transition-colors text-sm lg:text-base"
              >
                مسح الفلاتر
              </button>
            </div>
          </div>

          {/* Products Section - Fixed grid structure */}
          <div className="lg:col-span-3 order-2">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <span className="text-gray-700 text-sm lg:text-base">عرض:</span>
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <span className="text-gray-700 text-sm lg:text-base whitespace-nowrap">ترتيب حسب:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm lg:text-base min-w-0"
                  >
                    <option value="featured">المميزة</option>
                    <option value="price-low">السعر: من الأقل للأعلى</option>
                    <option value="price-high">السعر: من الأعلى للأقل</option>
                    <option value="rating">التقييم</option>
                    <option value="newest">الأحدث</option>
                  </select>
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  عرض {filteredProducts.length} من {products.length} منتج
                </p>
              </div>
            </div>

            {/* Products Grid/List - Responsive grid */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-6' 
              : 'space-y-6'
            }>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'sm:w-48 sm:h-48 h-64 flex-shrink-0' : 'h-48 lg:h-64'
                  } cursor-pointer`}
                  onClick={() => showProductDetails?.(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 lg:top-4 right-3 lg:right-4 flex flex-col gap-2">
                      <span className={`${product.badgeColor} text-white px-2 lg:px-3 py-1 rounded-full text-xs font-medium`}>
                        {product.badge}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 lg:top-4 left-3 lg:left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                          wishlistItems.some(item => item.id === product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${wishlistItems.some(item => item.id === product.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          showProductDetails?.(product);
                        }}
                        className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-amber-500 hover:text-white transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quick Add to Cart - Grid View Only */}
                    {viewMode === 'grid' && (
                      <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart?.(product);
                          }}
                          className="w-full bg-amber-500 text-white py-2 px-4 rounded-full font-medium hover:bg-amber-600 transition-colors flex items-center justify-center text-sm lg:text-base"
                        >
                          <ShoppingCart className="w-4 h-4 ml-2" />
                          إضافة للسلة
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div 
                    className={`p-4 lg:p-6 ${viewMode === 'list' ? 'flex-1' : ''} cursor-pointer`}
                    onClick={() => showProductDetails?.(product)}
                  >
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs lg:text-sm text-gray-600 mr-2">
                        {product.rating} ({product.reviews} تقييم)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description - List View Only */}
                    {viewMode === 'list' && (
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm lg:text-base">
                        {product.description}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="text-xl lg:text-2xl font-bold text-amber-600">
                          {product.price} ر.س
                        </span>
                        {product.originalPrice && (
                          <span className="text-base lg:text-lg text-gray-400 line-through">
                            {product.originalPrice} ر.س
                          </span>
                        )}
                      </div>
                      
                      {/* Add to Cart - List View */}
                      {viewMode === 'list' && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart?.(product);
                          }}
                          className="bg-amber-500 text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors flex items-center text-sm lg:text-base whitespace-nowrap"
                        >
                          <ShoppingCart className="w-4 h-4 ml-2" />
                          إضافة للسلة
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No products message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد منتجات</h3>
                <p className="text-gray-600 mb-4">لم يتم العثور على منتجات تطابق الفلاتر المحددة</p>
                <button
                  onClick={() => {
                    setFilterCategory('all');
                    setPriceRange([0, 1000]);
                  }}
                  className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors"
                >
                  مسح جميع الفلاتر
                </button>
              </div>
            )}

            {/* Pagination - Only show if there are products */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <button className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base">
                    السابق
                  </button>
                  <button className="px-3 lg:px-4 py-2 bg-amber-500 text-white rounded-lg text-sm lg:text-base">1</button>
                  <button className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base">2</button>
                  <button className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base">3</button>
                  <button className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base">
                    التالي
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
