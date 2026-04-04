import { Link } from "@/i18n/navigation";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  
  return (
    <>
      <div
        className="relative py-8"
        style={{
          backgroundImage: "url(/images/crumb.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center flex-col gap-3 text-base">
            <div className="flex items-center gap-2">
              <Image
                src="/images/nervous system.svg"
                alt="neuro"
                width={48}
                height={48}
              />
              <h1 className="text-white font-bold md:text-3xl text-xl">إعادة التأهيل العصبي</h1>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                الرئيسية
              </Link>
              <ChevronLeft
                size={16}
                className="text-white/50 rtl:rotate-0 ltr:rotate-180"
              />
              <span className="text-white font-bold line-clamp-1 max-w-[300px] text-sm md:text-base">
                إعادة التأهيل العصبي
              </span>
            </div>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-right">
        {/* Main Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-sm">
          <Image
            src="/images/about1.jpg"
            alt="neuro"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="md:text-2xl text-xl font-bold text-[#1A1A1A] mb-4">
          ما الأمراض التي يستهدفها إعادة التأهيل العصبي؟
        </h2>

        <p className="text-[#606060] md:text-lg text-sm mb-6 leading-relaxed">
          يستهدف إعادة التأهيل العصبي طيفاً واسعاً من أمراض وحالات الجهاز العصبي المسببة لعديد من المضاعفات التي تؤثر في وظائف الجسم الحيوية، تتضمن ما يلي:
        </p>

        <ul className="text-[#606060] md:text-lg text-sm space-y-2 mb-10 mr-6">
          <li>السكتة الدماغية.</li>
          <li>نزف المخ.</li>
          <li>شلل الأطفال.</li>
          <li>أورام المخ والحبل الشوكي.</li>
          <li>متلازمة النفق الرسغي.</li>
          <li>التصلب المتعدد.</li>
          <li>علاج العصب السابع.</li>
          <li>الزهايمر.</li>
          <li>مرض باركنسون.</li>
          <li>الانزلاق الغضروفي.</li>
          <li>ضمور العضلات.</li>
          <li>اعتلال الأعصاب الطرفية.</li>
          <li>الصرع.</li>
          <li>السكتة الدماغية.</li>
          <li>علاج صعوبة البلع بعد الجلطة.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="md:text-2xl text-xl font-bold text-[#1A1A1A] mb-4">
          علام يشتمل برنامج إعادة التأهيل العصبي؟
        </h2>
        <p className="text-[#606060] md:text-lg text-sm mb-6 leading-relaxed">
          يخضع المريض لعدة فحوصات لتقييم حالته، مثل التخطيط الكهربي للعضلات وتخطيط كهرية المخ (رسم المخ) لتحديد برنامج إعادة التأهيل العصبي المناسب لحالته. وعامة، يضم البرنامج عدداً من العلاجات أبرزها:
        </p>
        <div className="text-[#606060] md:text-lg text-sm space-y-6 mb-10">
          <p>
            <strong className="text-[#1A1A1A]">العلاج الطبيعي:</strong> يهدف إلى تقوية العضلات وزيادة مرونتها لتعزيز قدرة المريض على المشي والوقوف بمفرده في أفضل مراكز علاج طبيعي في مصر.
          </p>
          <p>
            <strong className="text-[#1A1A1A]">العلاج المهني:</strong> يُعين أخصائيو العلاج المهني المريض على أداء الأنشطة اليومية بصورة مستقلة، بما في ذلك تناول الطعام واللعب والمشاركة في الأنشطة الاجتماعية.
          </p>
          <p>
            <strong className="text-[#1A1A1A]">جلسات التخاطب:</strong> تُعالج مشكلات النطق والبلع الناجمة عن الإصابة بأحد الحالات العصبية، مما يُحسن من قدرة المريض على التواصل وتناول الطعام بسهولة.
          </p>
          <p>
            <strong className="text-[#1A1A1A]">العلاج النفسي العصبي:</strong> يُعزز قدرة المريض على التركيز والتفكير كما كان قبل الإصابة.
          </p>
          <p>
            <strong className="text-[#1A1A1A]">العلاج المائي:</strong> يُجري أخصائيو العلاج الطبيعي التمارين في حمام ماء دافئ، لتخفيف الألم وتقوية العضلات وزيادة تدفق الدم إليها، ومن ثم استعادة وظيفتها.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="md:text- 2xl text-xl font-bold text-[#1A1A1A] mb-4">
          كم تستغرق مدة برنامج إعادة التأهيل العصبي؟
        </h2>
        <p className="text-[#606060] md:text-lg text-sm mb-6 leading-relaxed">
          تختلف مدة البرنامج من حالة لأخرى، وتعتمد على عدة عوامل منها حدة الإصابة، عمر المريض، ومدى استجابته للعلاج. نحن في نيوروفيت نصمم برامج زمنية مخصصة تضمن الوصول لأفضل النتائج في أقصر وقت ممكن.
        </p>

        {/* Section 4 */}
        <h2 className="md:text-2xl text-xl font-bold text-[#1A1A1A] mb-4">
          مركز نيوروفيت.. أفضل مركز لإعادة التأهيل العصبي في مصر.
        </h2>
        <p className="text-[#606060] md:text-lg text-sm mb-4 leading-relaxed">
          مركز نيوروفيت من أفضل المراكز المتخصصة في إعادة التأهيل العصبي بمصر، وذلك بفضل خبرة وكفاءة طاقمه الطبي، وعلى رأسهم الدكتور أحمد ياسين.
        </p>
        <p className="text-[#606060] md:text-lg text-sm leading-relaxed">
          تواصل معنا الآن للحصول على استشارة متخصصة وبدء رحلة التغيير. يمكنك الاتصال بنا عبر الأرقام الموضحة أدناه، لنتعرف على تجارب مرضانا السابقة ومدى رضاهم عن الخدمات المقدمة، ندعوك لزيارة صفحة "آراء العملاء" في موقعنا الإلكتروني.
        </p>
      </div>
    </>
  );
}
