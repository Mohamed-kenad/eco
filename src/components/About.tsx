import React from 'react';
import { Award, Users, Leaf, Shield, Truck, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: 'منتجات طبيعية 100%',
      description: 'جميع منتجاتنا طبيعية خالية من المواد الكيميائية والمواد الحافظة'
    },
    {
      icon: Award,
      title: 'جودة معتمدة',
      description: 'حاصلون على شهادات الجودة العالمية وموثقون من الجهات المختصة'
    },
    {
      icon: Shield,
      title: 'ضمان الأصالة',
      description: 'نضمن أصالة وجودة جميع منتجاتنا مع إمكانية الإرجاع والاستبدال'
    },
    {
      icon: Truck,
      title: 'شحن سريع ومجاني',
      description: 'شحن مجاني لجميع أنحاء المملكة مع التوصيل السريع خلال 24-48 ساعة'
    }
  ];

  const stats = [
    { number: '500+', label: 'عميل راضي' },
    { number: '50+', label: 'منتج طبيعي' },
    { number: '5', label: 'سنوات خبرة' },
    { number: '99%', label: 'نسبة الرضا' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            تعرف علينا
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            من نحن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن متجر متخصص في بيع أجود أنواع العسل الطبيعي والزيوت العضوية، نسعى لتقديم منتجات طبيعية عالية الجودة لعملائنا الكرام
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                رسالتنا في خدمة الصحة والطبيعة
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                منذ تأسيسنا قبل خمس سنوات، نحن ملتزمون بتقديم أفضل المنتجات الطبيعية من العسل والزيوت العضوية. نؤمن بأن الطبيعة تحتوي على كل ما نحتاجه للحفاظ على صحتنا وعافيتنا.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نعمل مع أفضل المنتجين المحليين والعالميين لضمان حصولكم على منتجات عالية الجودة، مفحوصة ومعتمدة من الجهات المختصة. كل منتج في متجرنا يحكي قصة من الأصالة والجودة.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="عن متجرنا"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              قيمنا ومبادئنا
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتضمن تقديم أفضل خدمة لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-10 h-10 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">الشغف بالجودة</h4>
              <p className="text-gray-600">
                نحن شغوفون بتقديم أفضل المنتجات الطبيعية ونسعى دائماً للتميز في كل ما نقدمه
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">خدمة العملاء</h4>
              <p className="text-gray-600">
                رضا عملائنا هو أولويتنا القصوى، ونحن ملتزمون بتقديم خدمة استثنائية في كل تفاعل
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Leaf className="w-10 h-10 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">الاستدامة</h4>
              <p className="text-gray-600">
                نؤمن بأهمية الحفاظ على البيئة ونعمل مع منتجين يتبعون ممارسات مستدامة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;