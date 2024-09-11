import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation/Navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="object-cover object-center w-full h-full opacity-40 -z-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel className="z-30">
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
