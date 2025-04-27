import Image from "next/image";
import { Button } from "../ui/button";

export default function MilestoneSection() {
  return (
    <section
      className="py-16 px-4 md:px-16 bg-green-900 text-white"
      style={{
        background: "url('/milestone-background.png')",
        backgroundColor: "rgba(2, 52, 46, 0.5)", // Adds a semi-transparent black overlay
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="w-full" data-aos="fade-up" data-aos-duration="1200">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Why Milestone Learning?
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <div className="bg-white p-8 rounded-lg text-center text-gray-800 w-72">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full flex items-center justify-center">
                <Image
                  src="/milestone/1.png"
                  width={56}
                  height={56}
                  alt="milestone1"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">
              Personalized, efficient learning
            </h3>
            <p className="text-gray-600 text-sm">
              Tailored instruction that maximizes comprehension and retention.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center text-gray-800 w-72">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full flex items-center justify-center">
                <Image
                  src="/milestone/2.png"
                  width={56}
                  height={56}
                  alt="milestone2"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">
              Collaboration with parents & students
            </h3>
            <p className="text-gray-600 text-sm">
              We communicate and align with family goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center text-gray-800 w-72">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full flex items-center justify-center">
                <Image
                  src="/milestone/3.png"
                  width={56}
                  height={56}
                  alt="milestone3"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">
              Long-term skill development
            </h3>
            <p className="text-gray-600 text-sm">
              We build academic routines that last a lifetime.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <div className="bg-white p-8 rounded-lg text-center text-gray-800 w-72">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full flex items-center justify-center">
                <Image
                  src="/milestone/4.png"
                  width={56}
                  height={56}
                  alt="milestone4"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">
              A nurturing, supportive environment
            </h3>
            <p className="text-gray-600 text-sm">
              Students thrive in our encouraging and safe learning space.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center text-gray-800 w-72">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full flex items-center justify-center">
                <Image
                  src="/milestone/5.png"
                  width={56}
                  height={56}
                  alt="milestone5"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-3">
              Confidence-building for success
            </h3>
            <p className="text-gray-600 text-sm">
              Students gain the self-assurance to tackle any academic challenge.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            variant="outline"
            className="border-white text-black !bg-white hover:text-black border cursor-pointer rounded-full"
          >
            Get Started Today
          </Button>
          <Button
            variant="secondary"
            className="rounded-full cursor-pointer bg-transparent border !border-white !text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
