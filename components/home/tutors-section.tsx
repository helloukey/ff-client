import Image from "next/image";

export default function TutorsSection() {
  return (
    <section className="bg-white py-16">
      <div
        className="w-full text-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-12">
          Tutors you can trust from
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            "/tutors/1.png",
            "/tutors/2.png",
            "/tutors/3.png",
            "/tutors/4.png",
            "/tutors/4.png",
            "/tutors/4.png",
            "/tutors/4.png",
            "/tutors/2.png",
          ].map((item, index) => (
            <div
              key={index}
              className="w-36 h-34 rounded-lg flex items-center justify-center shadow-md"
            >
              <Image
                src={item}
                alt={`Partner ${index}`}
                width={56}
                height={56}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
