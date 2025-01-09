import ContactCard from "@/components/ContactCard";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import SectionHeading from "@/components/SectionHeading";
import { PiClockClockwiseBold , PiShieldCheckFill , PiLightbulbFill , PiPhoneCallFill , PiMapPinLineFill , PiEnvelopeFill } from "react-icons/pi";


export default function Home() {
  return (
    <div className="md:w-full bg-white">
      <div className="barlow md:max-w-[1400px] md:mx-auto">
        <Navbar />
        <Hero />
        <section className="mx-4 md:mx-40 my-10">
          <SectionHeading><span className="text-brand-950">Why evento?</span></SectionHeading>
          <br/>
          <br/>
          <div className="flex justify-center gap-10 flex-wrap">
            <FeatureCard
              title="Time-Saving"
              description="Quick and easy navigation to find desired events or items. Real-time availability updates to secure purchases instantly."
              icon={<PiClockClockwiseBold className="text-5xl"/>}
            />

            <FeatureCard
              title="Trusted Platform"
              description="Secure payments with encryption to protect personal information. Reliable customer service to resolve issues or answer questions promptly."
              icon={<PiShieldCheckFill className="text-5xl"/>}
            />

            <FeatureCard
              title="Convenience"
              description="One-stop shop for tickets and merchandise. Seamless purchase process with various payment options and instant confirmation."
              icon={<PiLightbulbFill className="text-5xl"/>}
            />
          </div>
        </section>
        <br/>
        <br/>
        <section className="bg-customers bg-no-repeat bg-center md:rounded-lg overflow-hidden">
          <div className="px-2 py-10 bg-blackOverlay">
            <SectionHeading>Happy Customers!</SectionHeading>
            <br/>
            <br/>
            <div className="flex justify-center gap-10 flex-wrap">
              <Review name="John Doe" review="Customer support was very responsive. However, I wish there were more payment options available." rating={4}  />
              <Review name="John Doe" review="I was able to grab last-minute tickets to a comedy show without any hassle. The pricing is competitive" rating={4}  />
              <Review name="John Doe" review="The site is good, but it can be slow during high-traffic times. I struggled to complete my purchase for a popular theater event." rating={3}  />
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <section className="mx-4 md:mx-40">
          <SectionHeading><span className="text-brand-950">Contact Us</span></SectionHeading>
          <br/>
          <br/>
          <div className="flex justify-center gap-4 md:gap-10 flex-wrap">
            <ContactCard
              title="Call"
              description="+91 9876543210"
              icon={<PiPhoneCallFill className="text-4xl"/>}
            />
            <ContactCard
              title="Email"
              description="test@test.com"
              icon={<PiEnvelopeFill  className="text-4xl"/>}
            />
            <ContactCard
              title="Visit"
              description="1234 Street Road, Test City, HP, India 123450"
              icon={<PiMapPinLineFill   className="text-4xl"/>}
            />
          </div>
        </section>
        <br/>
        <br/>
        <Footer />
      </div>
    </div>
);
}
