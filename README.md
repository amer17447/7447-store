# MugLab — متجر كاسات بسيط عبر واتساب

متجر Next.js + Tailwind. يعرض المنتجات ويحول الطلب إلى محادثة واتساب. لا يوجد دفع إلكتروني الآن. مناسب كبداية قبل فتح الشركة.

## المتطلبات
- Node.js 18 أو أحدث
- حساب واتساب تجاري أو عادي
- صورك الخاصة لاحقاً

## التشغيل المحلي
1. ثبّت الحزم:
   ```bash
   npm install
   ```
2. أنشئ ملف بيئة:
   ```bash
   cp .env.local.example .env.local
   ```
3. عدّل `.env.local`:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=4912345678901  # رقمك بدون +
   STORE_NAME=MugLab
   BASE_URL=http://localhost:3000
   ```
4. شغّل المشروع:
   ```bash
   npm run dev
   ```
5. افتح: http://localhost:3000

## تعديل المنتجات
حرّر الملف `data/products.ts`. أضف صورك في `public/images/mugs/` واستبدل المسارات.

## نشر على Vercel
1. أنشئ حساب Vercel.
2. اربط مستودع GitHub يحتوي هذا المجلد.
3. في إعدادات المشروع على Vercel أضف المتغيرات:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `STORE_NAME`
4. انشر.
5. حدّث رابط واتساب على إنستغرام وبايو تيك توك.

## ملاحظات قانونية مبسطة
- هذا متجر للعرض فقط.
- البيع يتم كـ Privatverkauf وبكميات محدودة عبر التواصل المباشر.
- بعد تسجيل Gewerbe فعّل الدفع Stripe/PayPal وأضف صفحة شروط البيع وبيانات البائع.

بالتوفيق ✨
