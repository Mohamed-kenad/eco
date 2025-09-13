import React, { useState } from 'react';
import { CreditCard, Truck, MapPin, Phone, Mail, User, Lock } from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    district: '',
    postalCode: '',
    
    // Payment
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const orderItems = [
    {
      id: 1,
      name: 'عسل السدر الجبلي الفاخر',
      price: 299,
      quantity: 2,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'زيت الزيتون البكر الممتاز',
      price: 89,
      quantity: 1,
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">إتمام الطلب</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-8 space-x-reverse mb-8">
            {[
              { number: 1, title: 'المعلومات الشخصية', icon: User },
              { number: 2, title: 'عنوان الشحن', icon: MapPin },
              { number: 3, title: 'الدفع', icon: CreditCard }
            ].map((stepItem) => (
              <div key={stepItem.number} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= stepItem.number 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  <stepItem.icon className="w-6 h-6" />
                </div>
                <div className="mr-3">
                  <div className="text-sm font-medium text-gray-900">{stepItem.title}</div>
                  <div className="text-xs text-gray-600">الخطوة {stepItem.number}</div>
                </div>
                {stepItem.number < 3 && (
                  <div className={`w-16 h-1 mx-4 ${
                    step > stepItem.number ? 'bg-amber-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">المعلومات الشخصية</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">الاسم الأول *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="أدخل اسمك الأول"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">اسم العائلة *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="أدخل اسم العائلة"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Address */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">عنوان الشحن</h2>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">العنوان التفصيلي *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="رقم المبنى، اسم الشارع"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">المدينة *</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">اختر المدينة</option>
                        <option value="riyadh">الرياض</option>
                        <option value="jeddah">جدة</option>
                        <option value="dammam">الدمام</option>
                        <option value="mecca">مكة المكرمة</option>
                        <option value="medina">المدينة المنورة</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">الحي *</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="اسم الحي"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">الرمز البريدي</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="الرمز البريدي (اختياري)"
                    />
                  </div>

                  {/* Shipping Options */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">خيارات الشحن</h3>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input type="radio" name="shipping" defaultChecked className="ml-3" />
                            <div>
                              <div className="font-medium text-gray-900">شحن عادي</div>
                              <div className="text-sm text-gray-600">3-5 أيام عمل</div>
                            </div>
                          </div>
                          <div className="text-green-600 font-medium">مجاني</div>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input type="radio" name="shipping" className="ml-3" />
                            <div>
                              <div className="font-medium text-gray-900">شحن سريع</div>
                              <div className="text-sm text-gray-600">1-2 أيام عمل</div>
                            </div>
                          </div>
                          <div className="text-gray-900 font-medium">25 ر.س</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات الدفع</h2>
                  
                  {/* Payment Methods */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">طريقة الدفع</h3>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-xl p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="ml-3"
                          />
                          <CreditCard className="w-5 h-5 ml-2" />
                          <span className="font-medium">بطاقة ائتمان / مدى</span>
                        </label>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleInputChange}
                            className="ml-3"
                          />
                          <Truck className="w-5 h-5 ml-2" />
                          <span className="font-medium">الدفع عند الاستلام</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">رقم البطاقة *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">تاريخ الانتهاء *</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">CVV *</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">اسم حامل البطاقة *</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="الاسم كما هو مكتوب على البطاقة"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 border-2 border-amber-500 text-amber-600 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
                    السابق
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="mr-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                  >
                    التالي
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="mr-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center"
                  >
                    <Lock className="w-5 h-5 ml-2" />
                    تأكيد الطلب
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ملخص الطلب</h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-gray-600 text-sm">الكمية: {item.quantity}</p>
                    </div>
                    <div className="text-amber-600 font-bold">
                      {item.price * item.quantity} ر.س
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي</span>
                  <span className="font-medium">{subtotal} ر.س</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن</span>
                  <span className="font-medium text-green-600">مجاني</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t border-gray-200 pt-3">
                  <span>المجموع الكلي</span>
                  <span className="text-amber-600">{total} ر.س</span>
                </div>
              </div>

              {/* Security Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <div className="flex items-center text-green-700">
                  <Lock className="w-5 h-5 ml-2" />
                  <span className="text-sm font-medium">معاملة آمنة ومشفرة</span>
                </div>
                <p className="text-xs text-green-600 mt-1">
                  جميع معلوماتك محمية بأحدث تقنيات التشفير
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;