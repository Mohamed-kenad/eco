import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Categories = ({ navigateTo }) => {
  const categories = [
    {
      id: 1,
      name: 'عسل السدر',
      description: 'عسل السدر الأصلي من أشجار السدر البرية',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: 12,
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 2,
      name: 'عسل الزهور',
      description: 'عسل طبيعي من رحيق الزهور المتنوعة',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: 8,
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 3,
      name: 'زيت الزيتون',
      description: 'زيت زيتون بكر ممتاز معصور على البارد',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
      products: 6,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      name: 'زيت الأرغان',
      description: 'زيت الأرغان المغربي الأصلي للعناية والطبخ',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: 4,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      name: 'زيت جوز الهند',
      description: 'زيت جوز الهند البكر للطبخ والعناية',
      image: 'https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: 5,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 6,
      name: 'زيوت عطرية',
      description: 'مجموعة متنوعة من الزيوت العطرية الطبيعية',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: 15,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            تصفح حسب الفئة
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            فئاتنا المميزة
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعتنا الواسعة من المنتجات الطبيعية المصنفة بعناية لتسهيل عملية التسوق
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => navigateTo('products')}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {category.products} منتج
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* CTA Button */}
                <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                  تصفح المنتجات
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigateTo('products')}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            عرض جميع الفئات
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;