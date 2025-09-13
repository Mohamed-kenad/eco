import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'المعلومات التي نجمعها',
      content: [
        'المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، العنوان',
        'معلومات الطلب: تفاصيل المنتجات المطلوبة، تاريخ الطلب، طريقة الدفع',
        'معلومات تقنية: عنوان IP، نوع المتصفح، نظام التشغيل',
        'ملفات تعريف الارتباط: لتحسين تجربة التصفح وتذكر تفضيلاتك'
      ]
    },
    {
      icon: Eye,
      title: 'كيف نستخدم معلوماتك',
      content: [
        'معالجة وتنفيذ طلباتك وتوصيل المنتجات',
        'التواصل معك بخصوص طلباتك وتقديم الدعم الفني',
        'إرسال العروض والتحديثات التسويقية (بموافقتك)',
        'تحسين خدماتنا وتطوير منتجات جديدة',
        'الامتثال للمتطلبات القانونية والتنظيمية'
      ]
    },
    {
      icon: Lock,
      title: 'حماية معلوماتك',
      content: [
        'استخدام تقنيات التشفير المتقدمة لحماية البيانات',
        'تطبيق بروتوكولات أمان صارمة لمنع الوصول غير المصرح به',
        'تدريب موظفينا على أفضل ممارسات حماية البيانات',
        'مراجعة وتحديث إجراءات الأمان بانتظام',
        'استخدام خوادم آمنة ومحمية بجدران حماية متقدمة'
      ]
    },
    {
      icon: Users,
      title: 'مشاركة المعلومات',
      content: [
        'لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة',
        'قد نشارك المعلومات مع شركاء الشحن لتوصيل طلباتك',
        'نشارك المعلومات مع معالجي الدفع لتنفيذ المعاملات',
        'قد نكشف المعلومات إذا كان ذلك مطلوباً قانونياً',
        'في حالة بيع أو دمج الشركة، قد تنتقل البيانات للمالك الجديد'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 ml-2" />
            خصوصية وأمان
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية. تعرف على كيفية جمع واستخدام وحماية بياناتك
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <div className="flex items-center">
            <FileText className="w-6 h-6 text-amber-600 ml-3" />
            <div>
              <h3 className="font-semibold text-amber-800">آخر تحديث</h3>
              <p className="text-amber-700">تم تحديث هذه السياسة في 15 يناير 2024</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">مقدمة</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              في عسل الطبيعة، نحن نقدر ثقتكم ونلتزم بحماية خصوصيتكم. تشرح هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمونها لنا عند استخدام موقعنا الإلكتروني أو خدماتنا.
            </p>
            <p className="mb-4">
              بمتابعة استخدام موقعنا أو خدماتنا، فإنكم توافقون على جمع واستخدام المعلومات وفقاً لهذه السياسة. إذا كان لديكم أي أسئلة أو مخاوف، يرجى التواصل معنا.
            </p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                <div className="flex items-center">
                  <section.icon className="w-8 h-8 ml-4" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 ml-4 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Your Rights */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">حقوقك</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3"></div>
                الحق في الوصول إلى معلوماتك الشخصية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3"></div>
                الحق في تصحيح المعلومات غير الصحيحة
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3"></div>
                الحق في حذف معلوماتك الشخصية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3"></div>
                الحق في إيقاف المراسلات التسويقية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3"></div>
                الحق في نقل بياناتك إلى خدمة أخرى
              </li>
            </ul>
          </div>

          {/* Cookies Policy */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ملفات تعريف الارتباط</h3>
            <div className="text-gray-600 space-y-4">
              <p>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا:
              </p>
              <ul className="space-y-2">
                <li>• ملفات ضرورية لعمل الموقع</li>
                <li>• ملفات لتحليل الاستخدام</li>
                <li>• ملفات للتسويق والإعلانات</li>
                <li>• ملفات لحفظ تفضيلاتك</li>
              </ul>
              <p className="text-sm">
                يمكنك إدارة إعدادات ملفات تعريف الارتباط من متصفحك.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
          <div className="text-center">
            <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              تواصل معنا
            </h3>
            <p className="text-gray-600 mb-6">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية أو كيفية التعامل مع بياناتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@honeynature.sa"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
              >
                راسلنا
              </a>
              <a
                href="tel:+966501234567"
                className="border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-100 rounded-2xl p-6">
          <p className="text-sm text-gray-600 text-center">
            تحتفظ شركة عسل الطبيعة بالحق في تحديث هذه السياسة في أي وقت. سيتم إشعاركم بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;