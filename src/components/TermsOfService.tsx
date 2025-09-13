import React from 'react';
import { FileText, Scale, ShoppingCart, Truck, RotateCcw, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: 'قبول الشروط',
      content: [
        'باستخدام موقع عسل الطبيعة، فإنك توافق على الالتزام بهذه الشروط والأحكام',
        'إذا كنت لا توافق على أي من هذه الشروط، يجب عليك عدم استخدام الموقع',
        'نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق',
        'استمرار استخدامك للموقع يعني موافقتك على الشروط المحدثة'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'الطلبات والأسعار',
      content: [
        'جميع الأسعار معروضة بالريال السعودي وتشمل ضريبة القيمة المضافة',
        'نحتفظ بالحق في تغيير الأسعار في أي وقت دون إشعار مسبق',
        'الطلب يعتبر مؤكداً فقط بعد استلام تأكيد الدفع',
        'في حالة عدم توفر المنتج، سيتم إشعارك وإعادة المبلغ المدفوع',
        'نحتفظ بالحق في رفض أو إلغاء أي طلب لأسباب تقنية أو قانونية'
      ]
    },
    {
      icon: Truck,
      title: 'الشحن والتوصيل',
      content: [
        'نوفر خدمة التوصيل لجميع مناطق المملكة العربية السعودية',
        'مدة التوصيل تتراوح بين 24-48 ساعة للمدن الرئيسية',
        'للمناطق النائية، قد تستغرق مدة التوصيل 3-5 أيام عمل',
        'رسوم الشحن محددة حسب المنطقة ووزن الطلب',
        'العميل مسؤول عن تقديم عنوان صحيح ومفصل للتوصيل'
      ]
    },
    {
      icon: RotateCcw,
      title: 'الإرجاع والاستبدال',
      content: [
        'يمكن إرجاع المنتجات خلال 14 يوم من تاريخ الاستلام',
        'المنتج يجب أن يكون في حالته الأصلية وغير مفتوح',
        'تكاليف الإرجاع يتحملها العميل إلا في حالة وجود عيب في المنتج',
        'سيتم رد المبلغ خلال 3-5 أيام عمل بعد استلام المنتج المرتجع',
        'بعض المنتجات قد تكون غير قابلة للإرجاع لأسباب صحية'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Scale className="w-4 h-4 ml-2" />
            شروط وأحكام
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            الشروط والأحكام
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا أو خدماتنا
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <div className="flex items-center">
            <FileText className="w-6 h-6 text-amber-600 ml-3" />
            <div>
              <h3 className="font-semibold text-amber-800">آخر تحديث</h3>
              <p className="text-amber-700">تم تحديث هذه الشروط في 15 يناير 2024</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">مقدمة</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              مرحباً بكم في موقع عسل الطبيعة. هذه الشروط والأحكام تحكم استخدامكم لموقعنا الإلكتروني وخدماتنا. 
              نحن شركة مسجلة في المملكة العربية السعودية ونعمل وفقاً للقوانين واللوائح المعمول بها.
            </p>
            <p className="mb-4">
              باستخدام موقعنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. إذا كنتم لا توافقون على أي من هذه الشروط، 
              يرجى عدم استخدام موقعنا أو خدماتنا.
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

        {/* Additional Terms */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* User Responsibilities */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">مسؤوليات المستخدم</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3"></div>
                تقديم معلومات صحيحة ودقيقة
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3"></div>
                عدم استخدام الموقع لأغراض غير قانونية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3"></div>
                احترام حقوق الملكية الفكرية
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3"></div>
                عدم محاولة اختراق أو إلحاق الضرر بالموقع
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3"></div>
                الحفاظ على سرية معلومات الحساب
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">حدود المسؤولية</h3>
            <div className="text-gray-600 space-y-4">
              <p>
                نحن غير مسؤولين عن:
              </p>
              <ul className="space-y-2">
                <li>• الأضرار غير المباشرة أو العرضية</li>
                <li>• فقدان البيانات أو الأرباح</li>
                <li>• انقطاع الخدمة لأسباب تقنية</li>
                <li>• أخطاء في المحتوى أو المعلومات</li>
                <li>• أفعال أطراف ثالثة</li>
              </ul>
              <p className="text-sm">
                مسؤوليتنا محدودة بقيمة المنتج المشترى.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">شروط الدفع</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">طرق الدفع المقبولة</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• بطاقات الائتمان (فيزا، ماستركارد)</li>
                <li>• بطاقة مدى</li>
                <li>• الدفع عند الاستلام</li>
                <li>• التحويل البنكي</li>
                <li>• المحافظ الإلكترونية</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">سياسة الدفع</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• الدفع مطلوب عند تأكيد الطلب</li>
                <li>• جميع المعاملات آمنة ومشفرة</li>
                <li>• لا نحتفظ ببيانات البطاقات الائتمانية</li>
                <li>• في حالة فشل الدفع، سيتم إلغاء الطلب</li>
                <li>• رسوم إضافية قد تطبق على بعض طرق الدفع</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">الملكية الفكرية</h3>
          <div className="text-gray-600 space-y-4">
            <p>
              جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، 
              محمية بحقوق الطبع والنشر وحقوق الملكية الفكرية الأخرى.
            </p>
            <p>
              لا يجوز نسخ أو توزيع أو تعديل أي محتوى من الموقع دون إذن كتابي مسبق من شركة عسل الطبيعة.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">القانون الحاكم</h3>
          <div className="text-gray-600 space-y-4">
            <p>
              تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. 
              أي نزاع ينشأ عن استخدام الموقع سيتم حله وفقاً للقوانين السعودية.
            </p>
            <p>
              المحاكم السعودية المختصة هي الجهة الوحيدة المخولة للنظر في أي نزاعات قانونية.
            </p>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 ml-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">تنبيه مهم</h3>
              <p className="text-red-700">
                قراءة وفهم هذه الشروط والأحكام أمر ضروري قبل استخدام خدماتنا. 
                إذا كان لديك أي استفسارات، يرجى التواصل معنا قبل إتمام أي عملية شراء.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
          <div className="text-center">
            <Scale className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              أسئلة حول الشروط والأحكام؟
            </h3>
            <p className="text-gray-600 mb-6">
              إذا كان لديك أي استفسارات حول هذه الشروط والأحكام، لا تتردد في التواصل معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@honeynature.sa"
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
      </div>
    </div>
  );
};

export default TermsOfService;