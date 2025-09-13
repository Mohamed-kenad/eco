import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = ({ addToCart, addToWishlist, wishlistItems = [], showProductDetails }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'عسل السدر الجبلي الفاخر',
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'الأكثر مبيعاً',
      badgeColor: 'bg-red-500',
      discount: 15,
      description: 'عسل السدر الجبلي الفاخر من أشجار السدر البرية في المناطق الجبلية، يتميز بطعمه الفريد وفوائده الصحية العديدة.'
    },
    {
      id: 2,
      name: 'زيت الزيتون البكر الممتاز',
      price: 89,
      originalPrice: 109,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      badge: 'عضوي',
      badgeColor: 'bg-green-500',
      discount: 18,
      description: 'زيت زيتون بكر ممتاز معصور على البارد من أجود الزيتون المختار بعناية.'
    },
    {
      id: 3,
      name: 'عسل الزهور البرية الطبيعي',
      price: 159,
      originalPrice: 189,
      rating: 4.7,
      reviews: 64,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'جديد',
      badgeColor: 'bg-blue-500',
      discount: 16,
      description: 'عسل طبيعي من رحيق الزهور البرية المتنوعة، غني بالفيتامينات والمعادن.'
    },
    {
      id: 4,
      name: 'زيت الأرغان المغربي الأصلي',
      price: 199,
      originalPrice: 239,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'مميز',
      badgeColor: 'bg-purple-500',
      discount: 17,
      description: 'زيت الأرغان المغربي الأصلي للعناية والطبخ، مستخرج من أشجار الأرغان النادرة.'
    },
    {
      id: 5,
      name: 'عسل المانوكا النيوزيلندي',
      price: 449,
      originalPrice: 529,
      rating: 5.0,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'حصري',
      badgeColor: 'bg-amber-500',
      discount: 15,
      description: 'عسل المانوكا النيوزيلندي الأصلي بخصائص علاجية فريدة ومعتمد عالمياً.'
    },
    {
      id: 6,
      name: 'زيت جوز الهند البكر',
      price: 79,
      originalPrice: 99,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'طبيعي',
      badgeColor: 'bg-teal-500',
      discount: 20,
      description: 'زيت جوز الهند البكر للطبخ والعناية الطبيعية، مستخرج بطريقة طبيعية.'
    }
  ];

  const toggleFavorite = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Show success message or animation here
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="containerw-full max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            منتجات مختارة بعناية
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة مختارة من أفضل منتجاتنا الطبيعية عالية الجودة والمفضلة لدى عملائنا
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => showProductDetails(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.badge}
                  </span>
                  {product.discount && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(product.id)}
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
                      showProductDetails(product);
                    }}
                    className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="w-full bg-amber-500 text-white py-2 px-4 rounded-full font-medium hover:bg-amber-600 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 ml-2" />
                    إضافة للسلة
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => showProductDetails(product)}
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
                  <span className="text-sm text-gray-600 mr-2">
                    {product.rating} ({product.reviews} تقييم)
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-2xl font-bold text-amber-600">
                      {product.price} ر.س
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice} ر.س
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;