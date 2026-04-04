import Image from "next/image";

export default function Care() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          <div className="relative w-full max-w-82 aspect-6/3">
            <Image
              src="/images/care1.png"
              alt="care"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              className="object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="relative w-full max-w-82 aspect-6/3">
            <Image
              src="/images/care2.png"
              alt="care"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              className="object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="relative w-full max-w-82 aspect-6/3">
            <Image
              src="/images/care3.png"
              alt="care"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              className="object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
