import React from "react";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import "./index.css";

// پلن‌های قیمت‌گذاری
const plans = [
  { title: "پایه", price: "۳۹,۰۰۰", features: ["۱ وب‌سایت فعال", "فعال‌سازی فوری"] },
  { title: "استارتر", price: "۶۹,۰۰۰", features: ["دامنهٔ تمام‌شده", "۱۶۰ گیگ فضای کش", "های فوق‌العاده"], popular: true },
  { title: "استاندارد", price: "۹۹,۰۰۰", features: ["۷۱ تمام افزونه", "های آنتی‌دیداس قوی"] },
  { title: "پریمیوم", price: "۱۹۹,۰۰۰", features: ["تصویربرداری", "تسریع بلافاصله‌ای", "اولین تا نوسانات"] },
];

// نظرات مشتریان
const testimonials = [
  {
    name: "سمانه راد",
    text: "واقعا از سرعت و پشتیبانی هاست‌کارد راضی‌ام. وب‌سایتم خیلی سریع‌تر شده!",
  },
  {
    name: "علی میرزایی",
    text: "خیالم از بابت امنیت سایت راحته. تیم فنی همیشه در دسترس و پاسخ‌گو هست.",
  },
  {
    name: "نرگس افشاری",
    text: "رابط کاربری ساده و کاربردی باعث شد بدون نیاز به دانش فنی سایت راه‌اندازی کنم.",
  },
];


// ✅ کامپوننت کارت پلن
const PlanCard = ({ plan, isLast }) => (
  <div
    className={`relative rounded-2xl p-6 border hover:shadow-xl transition-transform transform hover:-translate-y-2 ${
      plan.popular ? "border-blue-600 bg-blue-50 shadow-md" : "border-gray-200 bg-white"
    }`}
  >
    {plan.popular && (
      <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg">
        محبوب‌ترین
      </span>
    )}
    <h4 className="text-xl font-bold mb-2 text-blue-800">{plan.title}</h4>
    <p className="text-2xl font-bold mb-4 text-blue-900">{plan.price} تومان</p>
    <ul className="space-y-3 text-sm text-gray-700">
      {plan.features.map((f, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle className="text-blue-600 w-5 h-5" />
          {f}
        </li>
      ))}
    </ul>
    <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
      {plan.popular || isLast ? "اضافه پلن" : "انتخاب پلن"}
    </button>
  </div>
);

// ✅ کامپوننت نظر مشتری
const TestimonialCard = ({ name, text }) => (
  <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-700">
    <p className="mb-4">“{text}”</p>
    <p className="font-bold text-blue-900">{name}</p>
  </div>
);

// ✅ کامپوننت اصلی
export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-6 md:px-12 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">ماست‌کارد</h1>
        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-all">
          ورود / ثبت‌نام
        </button>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-blue-600 text-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">میزبانی سریع و قابل اعتماد برای وب‌سایت شما</h2>
        <p className="mt-4 text-base md:text-lg text-blue-100">هاست وردپرسی مناسب کسب‌وکارهای ایرانی</p>
        <div className="mt-8">
          <button className="bg-white text-blue-900 px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-md hover:bg-blue-100 transition">
            شروع کنید
          </button>
        </div>
      </section>

      {/* پلن‌ها */}
      <section className="py-20 px-4 md:px-24 bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-14 text-blue-900">مناسب خود را انتخاب کنید</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} isLast={index === plans.length - 1} />
          ))}
        </div>
      </section>

      {/* نظرات مشتریان */}
      <section className="bg-white py-16 px-6 md:px-24">
        <h3 className="text-2xl font-bold text-center text-blue-900 mb-10">نظرات مشتریان</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </section>

      {/* تماس با ما */}
      <section className="bg-gradient-to-br from-gray-100 to-white py-24 px-6 md:px-24">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-16">تماس با ما</h3>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-14">
          <div className="w-full md:w-1/2">
            <img
              src="/51FpCTzSVVL._AC_UF894,1000_QL80_.jpg"
              alt="دفتر ما"
              className="rounded-3xl shadow-2xl w-full max-w-[400px] h-auto object-cover mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-right text-gray-800 space-y-6 bg-white p-6 rounded-2xl shadow-lg">
            <p className="flex items-center gap-2 text-blue-800 text-lg">
              <Mail className="w-5 h-5" /> ایمیل: support@t.ir
            </p>
            <p className="flex items-center gap-2 text-blue-800 text-lg">
              <Phone className="w-5 h-5" /> تلفن: ۰۲۱-۱۲۳۴۶۶۷۸
            </p>
            <p className="flex items-center gap-2 text-blue-800 text-lg">
              <MapPin className="w-5 h-5" /> آدرس: تهران، خیابان انقلاب، ساختمان هاست‌کارد
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 bg-blue-950 text-blue-200 text-sm">
        <p>© ۲۰۲۵ ماست‌کارد. تمامی حقوق متعلق به شرکت است.</p>
      </footer>
    </div>
  );
}
