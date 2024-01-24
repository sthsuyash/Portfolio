import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { Github, GithubIcon, Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IProjectsData } from "@/utils/types";

type ProjectCardProps = {
  project: IProjectsData;
  maxDescriptionLength?: number;
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  maxDescriptionLength = 150,
}) => {
  const truncatedDescription = truncateText(
    project.description,
    maxDescriptionLength,
  );

  return (
    <Card className={`group overflow-hidden relative`}>
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_bg_light xl:dark:bg-work_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl rounded-xl"
            src={project.img}
            alt={project.title}
            width={247}
            height={250}
            priority
          />

          <div className="flex gap-4">
            {project.link && (
              <Link
                href={`${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
              >
                <Link2Icon className="text-white" />
              </Link>
            )}
            {project.github && (
              <Link
                href={`${project.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
              >
                <GithubIcon className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="flex flex-wrap gap-2 mb-4 font-medium capitalize">
          {project.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
        <h4 className="mb-1 text-xl font-semibold">{project.title}</h4>
        <p className="text-muted-foreground text-sm">{truncatedDescription}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
