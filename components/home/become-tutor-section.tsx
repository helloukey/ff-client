import { Button } from "../ui/button";

export default function BecomeTutorSection() {
  return (
    <section className="py-16 bg-gray-100 px-4 md:px-16">
      <div
        className="w-full text-center space-y-6"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-900">
          Interested in becoming a tutor with Milestone Learning?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Make a lasting impact—join a team where your expertise empowers
          students and your growth is supported every step of the way.
        </p>
        <Button className="bg-ff hover:bg-green-800 rounded-full px-12 text-white cursor-pointer">
          Apply Now
        </Button>
      </div>
    </section>
  );
}
