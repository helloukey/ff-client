import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "../magicui/marquee";

export default function InsightsSection() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-16">
      <div className="w-full px-4 md:px-6">
        <div className="space-y-6 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            Insights & inspiration from the world of one-on-one learning
          </h2>
          <p className="text-gray-700 text-lg">
            Explore expert perspectives, success stories, and timely topics in
            education—designed for parents, students, and families navigating
            academic excellence in today&apos;s competitive world.
          </p>
        </div>

        <div className="relative w-full mb-10">
          <Marquee>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 w-[280px] md:w-[320px] snap-start"
              >
                <div className="relative h-48">
                  <Image
                    src="/insights-card.png"
                    alt="Graduate student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-green-900">
                    Learning Styles in Tutoring: Tailoring Approaches for
                    Effective Student Engagement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Understanding different learning styles is essential for
                    effective tutoring and can significantly enhance your
                    teaching approach
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-green-900 font-medium text-sm">
                        Guidance
                      </span>
                      <span className="text-gray-400 text-sm">5 mins read</span>
                    </div>
                    <Link href="#" aria-label="Read more">
                      <ArrowUpRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full px-16 py-2 h-auto !border-gray-300 !text-gray-700 !hover:bg-gray-50 cursor-pointer"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
