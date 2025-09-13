import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderData, setOrderData] = useState(null);

  // Sample order data
  const sampleOrder = {
    id: '#12345',
    status: 'shipped',
    estimatedDelivery: '2024-01-20',
    items: [
      {
        id: 1,
        name: 'عسل السدر الجبلي الفاخر',
        quantity: 2,
        price: 299,
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 2,
        name: 'زيت الزيتون البكر الممتاز',
        quantity: 1,
        price: 89,
        image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300'
      }
    ],
    timeline: [
      {
        status: 'confirmed',
        title: 'تم تأكيد الطلب',
        description: 'تم استلام طلبك وتأكيده بنجاح',
        date: '2024-01-15 10:30',
        completed: true
      },
      {
        status: 'processing',
        title: 'قيد التحضير',
        description: 'جاري تحضير طلبك وتجهيزه للشحن',
        date: '2024-01-16 14:20',
        completed: true
      },
      {
        status: 'shipped',
        title: 'تم الشحن',
        description: 'تم شحن طلبك وهو في الطريق إليك',
        date: '2024-01-17 09:15',
        completed: true
      },
      {
        status: 'out_for_delivery',
        title: 'خرج للتوصيل',
        description: 'طلبك مع مندوب التوصيل وسيصل قريباً',
        date: '',
        completed: false
      },
      {
        status: 'delivered',
        title: 'تم التسليم',
        description: 'تم تسليم طلبك بنجاح',
        date: '',
        completed: false
      }
    ],
    shippingAddress: {
      name: 'أحمد محمد',
      address: 'حي الملك فهد، شارع الأمير محمد',
      city: 'الرياض',
      phone: '+966 50 123 4567'
    },
    carrier: {
      name: 'شركة التوصيل السريع',
      phone: '+966 11 234 5678',
      trackingUrl: 'https://tracking.example.com'
    }
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber) {
      setOrderData(sampleOrder);
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    
    switch (status) {
      case 'confirmed':
        return <Package className="w-6 h-6 text-blue-500" />;
      case 'processing':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'shipped':
        return <Truck className="w-6 h-6 text-purple-500" />;
      case 'out_for_delivery':
        return <MapPin className="w-6 h-6 text-orange-500" />;
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            تتبع الطلب
          </h1>
          <p className="text-gray-600">
            أدخل رقم الطلب لتتبع حالة شحنتك
          </p>
        </div>

        {/* Tracking Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <form onSubmit={handleTrackOrder} className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                رقم الطلب
              </label>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="مثال: #12345"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              تتبع الطلب
            </button>
          </form>
        </div>

        {/* Order Details */}
        {orderData && (
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    طلب رقم {orderData.id}
                  </h2>
                  <p className="text-gray-600">
                    التسليم المتوقع: {orderData.estimatedDelivery}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    قيد الشحن
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  المنتجات ({orderData.items.length})
                </h3>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-gray-600">الكمية: {item.quantity}</p>
                      </div>
                      <div className="text-amber-600 font-bold">
                        {item.price * item.quantity} ر.س
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                تتبع الشحنة
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute right-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {orderData.timeline.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        {getStatusIcon(step.status, step.completed)}
                      </div>
                      
                      {/* Content */}
                      <div className="mr-6 flex-1">
                        <div className="bg-gray-50 rounded-2xl p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-semibold ${
                              step.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {step.title}
                            </h3>
                            {step.date && (
                              <span className="text-sm text-gray-500">
                                {step.date}
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${
                            step.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Delivery Address */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  عنوان التسليم
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium text-gray-900">{orderData.shippingAddress.name}</p>
                  <p>{orderData.shippingAddress.address}</p>
                  <p>{orderData.shippingAddress.city}</p>
                  <div className="flex items-center mt-3">
                    <Phone className="w-4 h-4 ml-2" />
                    <span>{orderData.shippingAddress.phone}</span>
                  </div>
                </div>
              </div>

              {/* Carrier Info */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  شركة الشحن
                </h3>
                <div className="space-y-3">
                  <p className="font-medium text-gray-900">{orderData.carrier.name}</p>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 ml-2" />
                    <span>{orderData.carrier.phone}</span>
                  </div>
                  <a
                    href={orderData.carrier.trackingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    تتبع على موقع الشركة
                  </a>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  تحتاج مساعدة؟
                </h3>
                <p className="text-gray-600 mb-6">
                  إذا كان لديك أي استفسار حول طلبك، لا تتردد في التواصل معنا
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+966501234567"
                    className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <Phone className="w-5 h-5 ml-2" />
                    اتصل بنا
                  </a>
                  <a
                    href="mailto:support@honeynature.sa"
                    className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 ml-2" />
                    راسلنا
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;