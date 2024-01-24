import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { ProjectsData } from "@/utils/data";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-16">
          {ProjectsData.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/sthsuyash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-medium text-primary dark:text-primary-dark hover:underline"
          >
            <Button>
              View more on GitHub <ExternalLink className="inline-block ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
