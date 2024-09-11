import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects/ProjectList";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-50 -z-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="fixed flex items-center justify-center h-screen -translate-x-1/2 top-16 lg:top-20 lg:translate-x-0 -z-10 left-1/2 lg:-left-24">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
