import React from 'react';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'فوائد عسل السدر الصحية والعلاجية',
      excerpt: 'تعرف على الفوائد المذهلة لعسل السدر وكيف يمكن أن يساعد في تحسين صحتك العامة وتقوية جهاز المناعة.',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'د. أحمد محمد',
      date: '2024-01-15',
      readTime: '5 دقائق',
      category: 'صحة وعافية'
    },
    {
      id: 2,
      title: 'كيفية التمييز بين العسل الأصلي والمقلد',
      excerpt: 'دليل شامل لمساعدتك في التعرف على العسل الطبيعي الأصلي وتجنب المنتجات المقلدة أو المغشوشة.',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'سارة أحمد',
      date: '2024-01-12',
      readTime: '7 دقائق',
      category: 'نصائح'
    },
    {
      id: 3,
      title: 'زيت الزيتون البكر: الذهب السائل للصحة',
      excerpt: 'اكتشف الفوائد الصحية المتعددة لزيت الزيتون البكر الممتاز وكيفية استخدامه في النظام الغذائي اليومي.',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600',
      author: 'محمد علي',
      date: '2024-01-10',
      readTime: '6 دقائق',
      category: 'تغذية'
    },
    {
      id: 4,
      title: 'وصفات طبيعية بالعسل للعناية بالبشرة',
      excerpt: 'مجموعة من الوصفات الطبيعية باستخدام العسل للحصول على بشرة نضرة وصحية بطريقة طبيعية.',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'فاطمة خالد',
      date: '2024-01-08',
      readTime: '4 دقائق',
      category: 'جمال وعناية'
    },
    {
      id: 5,
      title: 'زيت الأرغان المغربي: سر الجمال الطبيعي',
      excerpt: 'تعرف على خصائص زيت الأرغان المغربي الفريدة وكيفية استخدامه للعناية بالشعر والبشرة.',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'عبدالله حسن',
      date: '2024-01-05',
      readTime: '5 دقائق',
      category: 'جمال وعناية'
    },
    {
      id: 6,
      title: 'العسل في الطب الشعبي والحديث',
      excerpt: 'نظرة على استخدامات العسل في الطب الشعبي التقليدي والأبحاث العلمية الحديثة حول فوائده.',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'د. نورا سالم',
      date: '2024-01-03',
      readTime: '8 دقائق',
      category: 'طب وعلاج'
    }
  ];

  const categories = [
    'جميع المقالات',
    'صحة وعافية',
    'تغذية',
    'جمال وعناية',
    'نصائح',
    'طب وعلاج'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('جميع المقالات');

  const filteredPosts = selectedCategory === 'جميع المقالات' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            مقالات مفيدة
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            مدونة عسل الطبيعة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف عالم العسل والزيوت الطبيعية من خلال مقالاتنا المفيدة والنصائح الصحية
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-600">مقال مميز</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 ml-1" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 ml-1" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    
                    <button className="flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 ml-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 ml-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            تحميل المزيد من المقالات
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            اشترك في نشرتنا الإخبارية
          </h3>
          <p className="text-gray-600 mb-6">
            احصل على آخر المقالات والنصائح الصحية مباشرة في بريدك الإلكتروني
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              اشترك
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;