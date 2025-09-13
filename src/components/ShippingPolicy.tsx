import React from 'react';
import { Truck, MapPin, Clock, Package, CreditCard, Phone } from 'lucide-react';

const ShippingPolicy = () => {
  const shippingZones = [
    {
      zone: 'المنطقة الأولى',
      cities: ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة'],
      deliveryTime: '24-48 ساعة',
      cost: 'مجاني للطلبات فوق 200 ر.س',
      regularCost: '25 ر.س'
    },
    {
      zone: 'المنطقة الثانية',
      cities: ['الطائف', 'الخبر', 'القطيف', 'الأحساء', 'بريدة'],
      deliveryTime: '2-3 أيام عمل',
      cost: 'مجاني للطلبات فوق 300 ر.س',
      regularCost: '35 ر.س'
    },
    {
      zone: 'المنطقة الثالثة',
      cities: ['تبوك', 'أبها', 'جازان', 'نجران', 'الباحة'],
      deliveryTime: '3-5 أيام عمل',
      cost: 'مجاني للطلبات فوق 400 ر.س',
      regularCost: '45 ر.س'
    }
  ];

  const shippingOptions = [
    {
      type: 'الشحن العادي',
      description: 'خدمة التوصيل المعتادة بأسعار مناسبة',
      timeframe: '2-5 أيام عمل',
      cost: 'حسب المنطقة',
      features: ['تتبع الطلب', 'تأمين الشحنة', 'خدمة عملاء']
    },
    {
      type: 'الشحن السريع',
      description: 'توصيل سريع للطلبات العاجلة',
      timeframe: '24-48 ساعة',
      cost: '+20 ر.س إضافية',
      features: ['أولوية في التوصيل', 'تتبع مباشر', 'ضمان الوقت']
    },
    {
      type: 'الشحن المجدول',
      description: 'اختر الوقت المناسب لاستلام طلبك',
      timeframe: 'حسب الاختيار',
      cost: '+15 ر.س إضافية',
      features: ['اختيار الوقت', 'تأكيد مسبق', 'مرونة في التوقيت']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Truck className="w-4 h-4 ml-2" />
            الشحن والتوصيل
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            سياسة الشحن
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نوفر خدمة توصيل سريعة وآمنة لجميع أنحاء المملكة العربية السعودية
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {shippingOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.type}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">مدة التوصيل</span>
                  <span className="font-semibold text-gray-900">{option.timeframe}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">التكلفة</span>
                  <span className="font-semibold text-green-600">{option.cost}</span>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">المميزات:</h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Zones */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">مناطق التوصيل</h2>
          
          <div className="space-y-8">
            {shippingZones.map((zone, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 lg:mb-0">{zone.zone}</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center text-green-600">
                      <Clock className="w-4 h-4 ml-2" />
                      <span className="font-medium">{zone.deliveryTime}</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <CreditCard className="w-4 h-4 ml-2" />
                      <span className="font-medium">{zone.cost}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {zone.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center bg-gray-50 rounded-lg p-3">
                      <MapPin className="w-4 h-4 text-gray-500 ml-2" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-medium">الشحن العادي:</span> {zone.regularCost}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Process */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">عملية الشحن</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'تأكيد الطلب',
                description: 'بعد إتمام الدفع، سيتم تأكيد طلبك خلال ساعة',
                icon: Package
              },
              {
                step: '2',
                title: 'تحضير الطلب',
                description: 'نقوم بتحضير وتغليف منتجاتك بعناية فائقة',
                icon: Package
              },
              {
                step: '3',
                title: 'الشحن',
                description: 'يتم شحن طلبك مع شركة الشحن المختارة',
                icon: Truck
              },
              {
                step: '4',
                title: 'التسليم',
                description: 'استلم طلبك في الوقت المحدد مع إمكانية التتبع',
                icon: MapPin
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ملاحظات مهمة</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 ml-3"></div>
                يجب تقديم عنوان صحيح ومفصل لضمان التوصيل السليم
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 ml-3"></div>
                في حالة عدم وجود أحد لاستلام الطلب، سيتم إعادة المحاولة
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 ml-3"></div>
                رسوم إضافية قد تطبق على المناطق النائية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 ml-3"></div>
                يمكن تتبع الطلب من خلال رقم التتبع المرسل
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 ml-3"></div>
                التوصيل متاح من السبت إلى الخميس
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">شروط التوصيل</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></div>
                فحص المنتجات عند الاستلام للتأكد من سلامتها
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></div>
                في حالة وجود تلف، يرجى رفض الاستلام فوراً
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></div>
                الدفع عند الاستلام متاح مع رسوم إضافية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></div>
                يجب إبراز هوية شخصية عند الاستلام
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></div>
                لا نتحمل مسؤولية التأخير بسبب ظروف جوية
              </li>
            </ul>
          </div>
        </div>

        {/* Contact for Shipping */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
          <div className="text-center">
            <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              أسئلة حول الشحن؟
            </h3>
            <p className="text-gray-600 mb-6">
              فريق خدمة العملاء جاهز لمساعدتك في أي استفسارات حول الشحن والتوصيل
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966501234567"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                اتصل بنا
              </a>
              <a
                href="mailto:shipping@honeynature.sa"
                className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                راسلنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;