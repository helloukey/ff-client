import Image from "next/image";
import { Button } from "../ui/button";

export default function SuccessStoriesSection() {
  return (
    <section className="py-16 bg-gray-100 px-4 md:px-16">
      <div
        className="w-full space-y-12"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            Success we&apos;ve achieved together
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Together, we celebrate every milestone—turning challenges into
            achievements and goals into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-green-700">
                <Image src="/quote.png" alt="quote" width={36} height={36} />
              </div>
              <p className="text-gray-700 mb-4">
                My son went from struggling in science to earning his best
                grades ever. His tutor made the material click in a way his
                classes never did.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt="Student"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-black">
                  <p className="font-medium">Kate Wells</p>
                  <p className="text-sm text-gray-500">High School Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="!border-green-900 !text-green-900 rounded-full cursor-pointer"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
