import { ChevronDown } from "lucide-react";
import { FAQ } from "@/types/api";

interface FAQSectionProps {
  faqs: FAQ[];
  title: string;
}

export default function FAQSection({ faqs, title }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="group bg-[#F8F8F8] rounded-2xl overflow-hidden border border-[#EAEAEA] transition-all"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-bold text-lg text-[#1A1A1A] group-open:text-[#CDB255] transition-colors">
                {faq.question}
              </span>
              <ChevronDown className="text-[#8E8E8E] transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6">
              <div
                className="prose prose-slate max-w-none text-[#606060] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer_html }}
              />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
