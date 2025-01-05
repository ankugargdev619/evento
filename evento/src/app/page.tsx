import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { PiClockClockwiseBold , PiShieldCheckFill , PiLightbulbFill} from "react-icons/pi";


export default function Home() {
  return (
    <div className="barlow">
      <Navbar />
      <Hero />
      <section className="mx-4 md:mx-40 my-10">
        <h1 className="w-full text-center text-4xl text-brand-950 font-bold">Why <span className="text-brand-600">evento</span>?</h1>
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
    </div>
);
}
