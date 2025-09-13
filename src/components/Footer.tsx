import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = ({ navigateTo }) => {
  const quickLinks = [
    { name: 'الرئيسية', page: 'home' },
    { name: 'المنتجات', page: 'products' },
    { name: 'المدونة', page: 'blog' },
    { name: 'الأسئلة الشائعة', page: 'faq' },
    { name: 'تتبع الطلب', page: 'tracking' }
  ];

  const categories = [
    { name: 'عسل السدر', page: 'products' },
    { name: 'عسل الزهور', page: 'products' },
    { name: 'زيت الزيتون', page: 'products' },
    { name: 'زيت الأرغان', page: 'products' },
    { name: 'زيت جوز الهند', page: 'products' },
    { name: 'الزيوت العطرية', page: 'products' }
  ];

  const customerService = [
    { name: 'سياسة الشحن', page: 'shipping' },
    { name: 'الشروط والأحكام', page: 'terms' },
    { name: 'سياسة الخصوصية', page: 'privacy' },
    { name: 'الأسئلة الشائعة', page: 'faq' },
    { name: 'تتبع الطلب', page: 'tracking' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              احصل على آخر العروض والمنتجات الجديدة والنصائح الصحية مباشرة في بريدك الإلكتروني
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🍯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">عسل الطبيعة</h3>
                  <p className="text-gray-400 text-sm">أجود أنواع العسل والزيوت</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                متجر متخصص في بيع أجود أنواع العسل الطبيعي والزيوت العضوية من أفضل المصادر الطبيعية في العالم.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-400">+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-400">info@honeynature.sa</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigateTo && navigateTo(link.page)}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-bold mb-6">الفئات</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigateTo && navigateTo(category.page)}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-xl font-bold mb-6">خدمة العملاء</h4>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigateTo && navigateTo(service.page)}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-right mb-4 md:mb-0">
              <p>&copy; 2024 عسل الطبيعة. جميع الحقوق محفوظة.</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">طرق الدفع:</span>
              <div className="flex space-x-2 space-x-reverse">
                <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  مدى
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;