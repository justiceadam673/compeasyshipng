// app/components/IntroPage.jsx
import Link from 'next/link'; // Import Link from next/link
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ShowCase from "./ShowCase";
import WhyEasyShip from "./WhyEasyShip";
import Footer from "./Footer";

export default function IntroPage() {
  return (
    <main className="bg-[#e2e2e2] font-sfpro overflow-x-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Showcase Section */}
      <ShowCase />

      {/* Why Choose EasyShip Section */}
      <WhyEasyShip />

      {/* Continue Button */}
      <div className="flex justify-center mt-10">
        {/* Using Link to navigate to the tracking page */}
        <Link href="/trackings" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Continue to Tracking
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
