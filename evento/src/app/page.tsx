import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { PiClockClockwiseBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className="barlow">
      <Navbar />
      <Hero />
      <section className="mx-4 md:mx-40 my-10">
        <h1 className="w-full text-center text-4xl text-brand-950 font-bold">Benefits</h1>
        <br/>
        <div className="flex justify-center gap-10 flex-wrap">
          <FeatureCard
            title="Time-Saving"
            description="Quick and easy navigation to find desired events or items. Real-time availability updates to secure purchases instantly."
            icon= <PiClockClockwiseBold/>
          />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </section>
    </div>
);
}
