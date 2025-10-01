export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">تواصل معنا</h1>
      <p className="text-gray-700">للطلبات والاستفسارات، راسلنا على الواتساب أو البريد الإلكتروني.</p>
      <ul className="space-y-2">
        <li>واتساب: {waNumber ? <a className="text-blue-600 underline" href={`https://wa.me/${waNumber}`} target="_blank">اضغط هنا</a> : "أضف الرقم في ملف البيئة"}</li>
        <li>إيميل: <a href="mailto:orders@example.com" className="text-blue-600 underline">orders@example.com</a></li>
      </ul>
      <div className="text-xs text-gray-500">
        هذا متجر عرض فقط. الدفع يتم بالتواصل المباشر. سيتم تفعيل الدفع الإلكتروني بعد التسجيل التجاري.
      </div>
    </section>
  )
}
