import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';

const Hero = ({ navigateTo }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 ml-2 fill-current" />
              منتجات طبيعية 100%
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                أجود أنواع
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  العسل والزيوت
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                اكتشف مجموعتنا المميزة من العسل الطبيعي والزيوت العضوية المستخرجة من أفضل المصادر الطبيعية
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:flex sm:justify-center lg:justify-start sm:space-x-8 sm:space-x-reverse max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">500+</div>
                <div className="text-sm sm:text-base text-gray-600">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">50+</div>
                <div className="text-sm sm:text-base text-gray-600">منتج طبيعي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">5</div>
                <div className="text-sm sm:text-base text-gray-600">سنوات خبرة</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigateTo('products')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                تسوق الآن
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('products')}
                className="border-2 border-amber-500 text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                تعرف على منتجاتنا
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-8">
              <div className="flex items-center space-x-1 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-gray-600 mr-2">4.9 من 5</span>
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="text-sm sm:text-base text-gray-600">شحن مجاني</div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="text-sm sm:text-base text-gray-600">ضمان الجودة</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="عسل طبيعي"
                className="w-full h-auto rounded-3xl shadow-2xl max-w-lg mx-auto"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    🍯
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">عسل السدر</div>
                    <div className="text-xs sm:text-sm text-gray-600">طبيعي 100%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    🫒
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">زيت الزيتون</div>
                    <div className="text-xs sm:text-sm text-gray-600">عضوي معصور على البارد</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-6 scale-105 opacity-20 max-w-lg mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;