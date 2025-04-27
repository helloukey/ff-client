import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AcademicPerformance() {
  return (
    <section className="py-16 bg-white px-4 md:px-16">
      <div className="w-full" data-aos="fade-up" data-aos-duration="1200">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12">
          {/* Right column with three cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-white">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
                  How we increase academic performance
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    The most successful learning is{" "}
                    <span className="font-medium">one-on-one</span>.
                  </p>

                  <p className="text-gray-700">
                    At <span className="font-medium">Milestone Learning</span>,
                    we recognize that every student learns differently—success
                    comes from tailored support, personalized strategies, and a
                    learning approach that works for them.
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-green-800 font-medium hover:text-green-700 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-full">
                <Image
                  src="/performance1.png"
                  alt="In-person consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-end">
                <Button className="w-full bg-ff hover:bg-green-800 text-white rounded-full py-6 cursor-pointer">
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-full">
                <Image
                  src="/performance1.png"
                  alt="Online learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-end">
                <Button className="w-full bg-ff hover:bg-green-800 text-white rounded-full py-6 cursor-pointer">
                  Submit an Inquiry
                </Button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-full">
                <Image
                  src="/performance1.png"
                  alt="Virtual tutoring session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-end">
                <Button className="w-full bg-ff hover:bg-green-800 text-white rounded-full py-6 cursor-pointer">
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
