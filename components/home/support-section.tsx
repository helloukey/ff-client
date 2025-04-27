import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-16">
      <div
        className="w-full space-y-12"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            Support for every stage of learning
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We support students at all academic levels, from early childhood
            through college and beyond.
          </p>
        </div>

        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 flex items-start">
            <div className="h-full w-24 bg-[#EAF4ED] flex items-center justify-center flex-shrink-0">
              <Image
                src="/support/1.png"
                alt="support-1"
                width={52}
                height={52}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Test Prep</h3>
              <p className="text-gray-600 text-sm">
                Expert coaching for SSAT, SAT, ACT, AP exams, and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex items-start">
            <div className="h-full w-24 bg-[#EAF4ED] flex items-center justify-center flex-shrink-0">
              <Image
                src="/support/2.png"
                alt="support-2"
                width={52}
                height={52}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">College / University</h3>
              <p className="text-gray-600 text-sm">
                Tutoring for advanced coursework, writing, and academic
                strategy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex items-start">
            <div className="h-full w-24 bg-[#EAF4ED] flex items-center justify-center flex-shrink-0">
              <Image
                src="/support/3.png"
                alt="support-3"
                width={52}
                height={52}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Graduate School</h3>
              <p className="text-gray-600 text-sm">
                Language prep, writing mentorship, and exam support for advanced
                learners.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex items-start">
            <div className="h-full w-24 bg-[#EAF4ED] flex items-center justify-center flex-shrink-0">
              <Image
                src="/support/4.png"
                alt="support-4"
                width={52}
                height={52}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Elementary School</h3>
              <p className="text-gray-600 text-sm">
                Foundational support in reading, writing, math, and study
                habits.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex items-start">
            <div className="h-full w-24 bg-[#EAF4ED] flex items-center justify-center flex-shrink-0">
              <Image
                src="/support/5.png"
                alt="support-5"
                width={52}
                height={52}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Middle School</h3>
              <p className="text-gray-600 text-sm">
                Skill-building across core subjects to support academic
                transitions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex items-start">
            <div className="h-full w-24 bg-[#EAF4ED] flex items-center justify-center flex-shrink-0">
              <Image
                src="/support/6.png"
                alt="support-6"
                width={52}
                height={52}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">High School</h3>
              <p className="text-gray-600 text-sm">
                Rigorous subject support, test prep, and college readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
