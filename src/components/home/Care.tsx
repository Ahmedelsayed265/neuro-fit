import Image from "next/image";

export default function Care() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto md:px-0 px-3">
        <div className="flex flex-row justify-between items-center gap-2 md:gap-16">
          <div className="relative flex-1 aspect-6/3">
            <Image
              src="/images/care1.png"
              alt="care"
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 300px"
              className="object-contain md:opacity-40 opacity-100 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="relative flex-1 aspect-6/3">
            <Image
              src="/images/care2.png"
              alt="care"
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 300px"
              className="object-contain md:opacity-40 opacity-100 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="relative flex-1 aspect-6/3">
            <Image
              src="/images/care3.png"
              alt="care"
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 300px"
              className="object-contain md:opacity-40 opacity-100 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
