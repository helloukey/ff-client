import AcademicPerformance from "@/components/home/academic-performance";
import InsightsSection from "@/components/home/insights-section";
import Hero from "@/components/home/hero";
import SupportSection from "@/components/home/support-section";
import SuccessStoriesSection from "@/components/home/success-stories-section";
import MilestoneSection from "@/components/home/milestone-section";
import TutorsSection from "@/components/home/tutors-section";
import FAQSection from "@/components/home/faq-section";
import BecomeTutorSection from "@/components/home/become-tutor-section";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Support for every stage */}
        <SupportSection />

        {/* Success Stories */}
        <SuccessStoriesSection />

        {/* How we increase performance */}
        <AcademicPerformance />

        {/* Why Milestone Learning */}
        <MilestoneSection />

        {/* Tutors */}
        <TutorsSection />

        {/* Blog/Insights */}
        <InsightsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Become a tutor */}
        <BecomeTutorSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
