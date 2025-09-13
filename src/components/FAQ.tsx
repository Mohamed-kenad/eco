import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'عام',
      questions: [
        {
          question: 'ما هي أنواع العسل المتوفرة لديكم؟',
          answer: 'نوفر مجموعة واسعة من أنواع العسل الطبيعي بما في ذلك عسل السدر، عسل الزهور البرية، عسل المانوكا، عسل الأكاسيا، وعسل الحمضيات. جميع أنواع العسل لدينا طبيعية 100% ومفحوصة من قبل الجهات المختصة.'
        },
        {
          question: 'هل منتجاتكم طبيعية ومعتمدة؟',
          answer: 'نعم، جميع منتجاتنا طبيعية 100% وحاصلة على شهادات الجودة والاعتماد من الجهات المختصة في المملكة العربية السعودية. نحن ملتزمون بتقديم أعلى معايير الجودة والأصالة.'
        },
        {
          question: 'ما هي فوائد العسل الطبيعي؟',
          answer: 'العسل الطبيعي غني بالفيتامينات والمعادن ومضادات الأكسدة. له خصائص مضادة للبكتيريا والالتهابات، يساعد في تقوية المناعة، يهدئ السعال والتهاب الحلق، ويساعد في الهضم. كما أنه مصدر طبيعي للطاقة.'
        }
      ]
    },
    {
      category: 'الطلبات والشحن',
      questions: [
        {
          question: 'كم تستغرق عملية التوصيل؟',
          answer: 'نوفر خدمة التوصيل السريع خلال 24-48 ساعة داخل المدن الرئيسية، و3-5 أيام عمل للمناطق الأخرى. نوفر أيضاً خدمة التوصيل السريع خلال 24 ساعة مقابل رسوم إضافية.'
        },
        {
          question: 'هل الشحن مجاني؟',
          answer: 'نعم، نوفر شحن مجاني لجميع الطلبات فوق 200 ريال سعودي. للطلبات الأقل من 200 ريال، رسوم الشحن 25 ريال فقط.'
        },
        {
          question: 'هل يمكنني تتبع طلبي؟',
          answer: 'بالطبع! بمجرد شحن طلبك، ستتلقى رقم تتبع عبر الرسائل النصية والبريد الإلكتروني. يمكنك تتبع طلبك من خلال صفحة تتبع الطلبات على موقعنا.'
        },
        {
          question: 'ما هي طرق الدفع المتاحة؟',
          answer: 'نقبل جميع طرق الدفع الرئيسية: بطاقات الائتمان (فيزا، ماستركارد)، بطاقة مدى، الدفع عند الاستلام، والتحويل البنكي. جميع المعاملات آمنة ومشفرة.'
        }
      ]
    },
    {
      category: 'المنتجات والجودة',
      questions: [
        {
          question: 'كيف أعرف أن العسل أصلي؟',
          answer: 'جميع منتجاتنا تأتي مع شهادات الأصالة والجودة. العسل الأصلي له قوام كثيف، لون طبيعي، ورائحة مميزة. نوفر أيضاً تقارير فحص مخبرية لكل دفعة من منتجاتنا.'
        },
        {
          question: 'ما هو الفرق بين أنواع الزيوت المختلفة؟',
          answer: 'زيت الزيتون البكر ممتاز للطبخ والسلطات، زيت الأرغان مفيد للعناية بالبشرة والشعر، زيت جوز الهند متعدد الاستخدامات للطبخ والعناية. كل نوع له فوائده الخاصة واستخداماته المحددة.'
        },
        {
          question: 'كيف أحفظ العسل والزيوت؟',
          answer: 'يُحفظ العسل في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة. الزيوت تُحفظ في مكان بارد ومظلم مع إحكام الإغلاق. تجنب تعريض المنتجات للحرارة العالية أو الرطوبة.'
        }
      ]
    },
    {
      category: 'الإرجاع والاستبدال',
      questions: [
        {
          question: 'ما هي سياسة الإرجاع؟',
          answer: 'نوفر ضمان إرجاع لمدة 14 يوم من تاريخ الاستلام. يجب أن يكون المنتج في حالته الأصلية وغير مفتوح. نتحمل تكاليف الإرجاع في حالة وجود عيب في المنتج.'
        },
        {
          question: 'كيف أقوم بإرجاع منتج؟',
          answer: 'تواصل معنا عبر خدمة العملاء أو البريد الإلكتروني مع رقم الطلب وسبب الإرجاع. سنرسل لك تعليمات الإرجاع ونرتب لاستلام المنتج من عندك مجاناً.'
        },
        {
          question: 'متى سأستلم المبلغ المسترد؟',
          answer: 'بعد استلام المنتج المرتجع وفحصه، سيتم رد المبلغ خلال 3-5 أيام عمل إلى نفس طريقة الدفع المستخدمة في الطلب الأصلي.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 ml-2" />
            مساعدة ودعم
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full p-6 text-right bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                        >
                          <span className="text-lg font-semibold text-gray-900 flex-1">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0 mr-4" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0 mr-4" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="p-6 bg-white border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-gray-600 mb-6">
            فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
              تواصل معنا
            </button>
            <button className="border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
              دردشة مباشرة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;