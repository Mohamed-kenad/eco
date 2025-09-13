import React, { useState } from 'react';
import { User, Package, Heart, Settings, MapPin, Phone, Mail, Edit, Save, X } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'أحمد',
    lastName: 'محمد',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    address: 'الرياض، حي الملك فهد',
    birthDate: '1990-01-01'
  });

  const orders = [
    {
      id: '#12345',
      date: '2024-01-15',
      status: 'تم التسليم',
      total: 687,
      items: 3,
      statusColor: 'text-green-600 bg-green-100'
    },
    {
      id: '#12344',
      date: '2024-01-10',
      status: 'قيد الشحن',
      total: 299,
      items: 1,
      statusColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: '#12343',
      date: '2024-01-05',
      status: 'تم التسليم',
      total: 458,
      items: 2,
      statusColor: 'text-green-600 bg-green-100'
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'عسل السدر الجبلي الفاخر',
      price: 299,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300',
      inStock: true
    },
    {
      id: 2,
      name: 'زيت الزيتون البكر الممتاز',
      price: 89,
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300',
      inStock: true
    },
    {
      id: 3,
      name: 'زيت الأرغان المغربي',
      price: 199,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300',
      inStock: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data
    console.log('Profile saved:', profileData);
  };

  const tabs = [
    { id: 'profile', name: 'الملف الشخصي', icon: User },
    { id: 'orders', name: 'طلباتي', icon: Package },
    { id: 'favorites', name: 'المفضلة', icon: Heart },
    { id: 'settings', name: 'الإعدادات', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">حسابي</h1>
          <p className="text-gray-600">إدارة معلوماتك الشخصية وطلباتك</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              {/* User Info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-gray-600">{profileData.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-colors ${
                      activeTab === tab.id
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">الملف الشخصي</h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 space-x-reverse bg-amber-500 text-white px-4 py-2 rounded-xl hover:bg-amber-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                        <span>تعديل</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2 space-x-reverse">
                        <button
                          onClick={handleSave}
                          className="flex items-center space-x-2 space-x-reverse bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors"
                        >
                          <Save className="w-4 h-4" />
                          <span>حفظ</span>
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="flex items-center space-x-2 space-x-reverse bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          <span>إلغاء</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">الاسم الأول</label>
                      <input
                        type="text"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          !isEditing ? 'bg-gray-50' : ''
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">اسم العائلة</label>
                      <input
                        type="text"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          !isEditing ? 'bg-gray-50' : ''
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          !isEditing ? 'bg-gray-50' : ''
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          !isEditing ? 'bg-gray-50' : ''
                        }`}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">العنوان</label>
                      <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          !isEditing ? 'bg-gray-50' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">طلباتي</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">طلب رقم {order.id}</h3>
                            <p className="text-gray-600">تاريخ الطلب: {order.date}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-600">
                            {order.items} منتج - {order.total} ر.س
                          </div>
                          <button className="text-amber-600 hover:text-amber-700 font-medium">
                            عرض التفاصيل
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">المنتجات المفضلة</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((product) => (
                      <div key={product.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-amber-600">{product.price} ر.س</span>
                            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                              {product.inStock ? 'متوفر' : 'غير متوفر'}
                            </span>
                          </div>
                          <button className="w-full mt-3 bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600 transition-colors">
                            إضافة للسلة
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">الإعدادات</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">إعدادات الإشعارات</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">إشعارات الطلبات</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">إشعارات العروض</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">النشرة الإخبارية</span>
                          <input type="checkbox" className="toggle" />
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">الأمان</h3>
                      <div className="space-y-4">
                        <button className="w-full text-right bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors">
                          تغيير كلمة المرور
                        </button>
                        <button className="w-full text-right bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors">
                          المصادقة الثنائية
                        </button>
                      </div>
                    </div>

                    <div className="border border-red-200 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-red-600 mb-4">منطقة الخطر</h3>
                      <button className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors">
                        حذف الحساب
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;