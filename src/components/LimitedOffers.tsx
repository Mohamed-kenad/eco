import React, { useState, useEffect } from 'react';
import { Clock, Star, ShoppingCart, Flame } from 'lucide-react';

const LimitedOffers = ({ addToCart }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      name: 'باقة العسل الذهبية',
      description: 'مجموعة من أفضل أنواع العسل الطبيعي',
      originalPrice: 599,
      salePrice: 399,
      discount: 33,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 156,
      sold: 89,
      total: 150,
      features: ['عسل السدر الأصلي', 'عسل الزهور البرية', 'عسل المانوكا', 'شحن مجاني']
    },
    {
      id: 2,
      name: 'مجموعة الزيوت الطبيعية',
      description: 'تشكيلة متنوعة من الزيوت العضوية المعصورة على البارد',
      originalPrice: 449,
      salePrice: 299,
      discount: 33,
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 203,
      sold: 67,
      total: 100,
      features: ['زيت الزيتون البكر', 'زيت الأرغان', 'زيت جوز الهند', 'زيت اللوز الحلو']
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Flame className="w-4 h-4 ml-2" />
            عروض ساخنة
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            عروض محدودة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            استفد من عروضنا الحصرية لفترة محدودة واحصل على أفضل المنتجات بأسعار لا تُقاوم
          </p>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-red-500 ml-2" />
              <span className="text-lg font-semibold text-gray-900">ينتهي العرض خلال:</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'يوم', value: timeLeft.days },
                { label: 'ساعة', value: timeLeft.hours },
                { label: 'دقيقة', value: timeLeft.minutes },
                { label: 'ثانية', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl p-3 mb-2">
                    <div className="text-2xl font-bold">{item.value.toString().padStart(2, '0')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="lg:flex">
                {/* Image */}
                <div className="lg:w-1/2 relative">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{offer.discount}%
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">تم البيع: {offer.sold}</span>
                      <span className="text-gray-600">المتبقي: {offer.total - offer.sold}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(offer.sold / offer.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(offer.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 mr-2">
                      {offer.rating} ({offer.reviews} تقييم)
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {offer.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {offer.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">يشمل العرض:</h4>
                    <ul className="space-y-2">
                      {offer.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full ml-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-red-600 ml-3">
                      {offer.salePrice} ر.س
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      {offer.originalPrice} ر.س
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => addToCart(offer)}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 px-6 rounded-full font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 ml-2" />
                    اطلب الآن - وفر {offer.originalPrice - offer.salePrice} ر.س
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              لا تفوت هذه الفرصة الذهبية!
            </h3>
            <p className="text-gray-600 mb-6">
              عروض حصرية لفترة محدودة جداً. اطلب الآن واستفد من الخصومات الكبيرة والشحن المجاني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                تصفح جميع العروض
              </button>
              <button className="border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
                اشترك في التنبيهات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;