import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, Award } from 'lucide-react';

const ProductDetails = ({ product: propProduct, addToCart, addToWishlist, wishlistItems = [], navigateTo, showProductDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const defaultProduct = {
    id: 1,
    name: 'عسل السدر الجبلي الفاخر',
    price: 299,
    originalPrice: 349,
    rating: 4.9,
    reviews: 127,
    inStock: true,
    description: 'عسل السدر الجبلي الفاخر من أشجار السدر البرية في المناطق الجبلية، يتميز بطعمه الفريد وفوائده الصحية العديدة. منتج طبيعي 100% بدون إضافات أو مواد حافظة.',
    features: [
      'طبيعي 100% بدون إضافات',
      'من أشجار السدر البرية',
      'غني بالفيتامينات والمعادن',
      'مفحوص ومعتمد من الجهات المختصة',
      'تاريخ إنتاج حديث',
      'عبوة محكمة الإغلاق'
    ],
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    specifications: {
      'الوزن': '500 جرام',
      'المنشأ': 'المملكة العربية السعودية',
      'تاريخ الإنتاج': '2024/01/15',
      'تاريخ الانتهاء': '2026/01/15',
      'طريقة الحفظ': 'في مكان بارد وجاف'
    }
  };

  const product = propProduct || defaultProduct;

  // Ensure product has required properties
  const productWithDefaults = {
    ...product,
    images: product.images || [product.image, product.image, product.image, product.image],
    features: product.features || [
      'طبيعي 100% بدون إضافات',
      'مفحوص ومعتمد من الجهات المختصة',
      'تاريخ إنتاج حديث',
      'عبوة محكمة الإغلاق'
    ],
    specifications: product.specifications || {
      'الوزن': '500 جرام',
      'المنشأ': 'المملكة العربية السعودية',
      'تاريخ الإنتاج': '2024/01/15',
      'تاريخ الانتهاء': '2026/01/15',
      'طريقة الحفظ': 'في مكان بارد وجاف'
    },
    inStock: product.inStock !== undefined ? product.inStock : true
  };
  const relatedProducts = [
    {
      id: 2,
      name: 'عسل الزهور البرية',
      price: 159,
      originalPrice: 189,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      description: 'عسل طبيعي من رحيق الزهور البرية المتنوعة'
    },
    {
      id: 3,
      name: 'عسل المانوكا',
      price: 449,
      originalPrice: 529,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5.0,
      description: 'عسل المانوكا النيوزيلندي الأصلي بخصائص علاجية فريدة'
    },
    {
      id: 4,
      name: 'عسل الأكاسيا',
      price: 199,
      originalPrice: 239,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      description: 'عسل الأكاسيا الذهبي بطعمه الرقيق ولونه الفاتح'
    }
  ];

  const handleAddToCart = () => {
    const cartItem = {
      ...productWithDefaults,
      quantity: quantity
    };
    addToCart(cartItem);
  };

  const handleToggleFavorite = () => {
    addToWishlist(productWithDefaults);
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <li><button onClick={() => navigateTo('home')} className="hover:text-amber-600">الرئيسية</button></li>
            <li>/</li>
            <li><button onClick={() => navigateTo('products')} className="hover:text-amber-600">فئاتنا</button></li>
            <li>/</li>
            <li><button onClick={() => navigateTo('products')} className="hover:text-amber-600">العسل</button></li>
            <li>/</li>
            <li className="text-amber-600">{productWithDefaults.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square w-full h-[460px] bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={productWithDefaults.images[selectedImage]}
                alt={productWithDefaults.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productWithDefaults.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productWithDefaults.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Rating & Reviews */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(productWithDefaults.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 mr-2">
                  {productWithDefaults.rating} ({productWithDefaults.reviews} تقييم)
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                productWithDefaults.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {productWithDefaults.inStock ? 'متوفر' : 'غير متوفر'}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {productWithDefaults.name}
            </h1>

            {/* Price */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-4xl font-bold text-amber-600">
                {productWithDefaults.price} ر.س
              </span>
              {productWithDefaults.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {productWithDefaults.originalPrice} ر.س
                </span>
              )}
              {productWithDefaults.originalPrice && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  وفر {productWithDefaults.originalPrice - productWithDefaults.price} ر.س
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {productWithDefaults.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">المميزات:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {productWithDefaults.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full ml-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-gray-700 font-medium">الكمية:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 space-x-reverse gap-2">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  إضافة للسلة - {productWithDefaults.price * quantity} ر.س
                </button>
                <button
                  onClick={handleToggleFavorite}
                  className={`p-4 rounded-xl border-2 transition-colors ${
                    wishlistItems.some(item => item.id === productWithDefaults.id)
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${wishlistItems.some(item => item.id === productWithDefaults.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">شحن مجاني</div>
                <div className="text-xs text-gray-600">للطلبات فوق 200 ر.س</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">ضمان الجودة</div>
                <div className="text-xs text-gray-600">منتجات أصلية</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">إرجاع مجاني</div>
                <div className="text-xs text-gray-600">خلال 14 يوم</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">معتمد</div>
                <div className="text-xs text-gray-600">شهادات جودة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">المواصفات</h3>
              <div className="space-y-4">
                {Object.entries(productWithDefaults.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">معلومات إضافية</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  عسل السدر من أجود أنواع العسل في العالم، يتم استخراجه من رحيق أزهار شجرة السدر البرية التي تنمو في المناطق الجبلية.
                </p>
                <p>
                  يتميز بلونه الذهبي الداكن وطعمه المميز وقوامه الكثيف، كما أنه غني بالفيتامينات والمعادن والأحماض الأمينية.
                </p>
                <p>
                  يُنصح بتناوله على الريق أو مع الماء الدافئ للحصول على أقصى فائدة من خصائصه الغذائية والعلاجية.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">منتجات ذات صلة</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => showProductDetails(relatedProduct)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(relatedProduct.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 mr-2">{relatedProduct.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-2xl font-bold text-amber-600">
                        {relatedProduct.price} ر.س
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {relatedProduct.originalPrice} ر.س
                      </span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(relatedProduct);
                      }}
                      className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;