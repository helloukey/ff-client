import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-16 bg-white text-black px-4 md:px-16">
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-16"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            Frequently asked questions
          </h2>
          <div>
            <p className="text-gray-600 mb-4 w-4/5">
              Find answers to common questions and get the information you need!
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg cursor-pointer">
                  What makes Milestone Learning different from other tutoring
                  services?
                </AccordionTrigger>
                <AccordionContent className="w-4/5">
                  We specialize in one-on-one, highly personalized tutoring that
                  goes beyond just helping students with homework. Our expert
                  tutors focus on mastery, confidence-building, and academic
                  strategy, ensuring that students not only improve their grades
                  but also develop lifelong learning skills.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg cursor-pointer">
                  How are your tutors?
                </AccordionTrigger>
                <AccordionContent className="w-4/5">
                  Our tutors are highly qualified professionals with expertise
                  in their respective subjects. They are carefully selected for
                  their knowledge, experience, and passion for teaching. We are
                  proud of their dedication to helping students succeed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg cursor-pointer">
                  How do you match students with tutors?
                </AccordionTrigger>
                <AccordionContent className="w-4/5">
                  Our matching process takes into account several key factors to
                  ensure the best possible fit between student and tutor. We
                  typically gather information about the student&apos;s subject
                  needs, learning style, academic level, and availability. This
                  helps us identify tutors with the appropriate expertise and
                  teaching approach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg cursor-pointer">
                  How do offer in-person tutoring?
                </AccordionTrigger>
                <AccordionContent className="w-4/5">
                  We offer in-person tutoring sessions at mutually convenient
                  locations, such as the student&apos;s home, a local library,
                  or another agreed-upon public space. Once a suitable tutor is
                  matched with a student, they will coordinate directly to
                  determine the best times and places for their sessions based
                  on their respective availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
