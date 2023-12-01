import Icon from "../Icon";
import Image from "next/image";
import MyImage from "../MyImage";
import { InfoData, QualificationData, SkillsData } from "@/utils/data";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";

const AboutSection: React.FC = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <p className="subtitle mb-8 xl:mb-16 text-center mx-auto max-w-[900px]">
          Immersed in the art of software engineering, I passionately craft
          scalable web applications, seamlessly navigating complex challenges.
          Proficient in different languages, my versatile expertise promises
          innovative solutions. With a proven track record, I bring a commitment
          to excellence, ready to elevate your projects with efficiency and
          sophistication.
        </p>

        <div className="flex flex-col xl:flex-row">
          {/* Image section */}
          <div className="hidden xl:flex flex-1 relative">
            <MyImage
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/me.png"
            />
          </div>

          {/* Tabs */}
          <div className="flex-1 ">
            <Tabs defaultValue="personal-information">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[600px] xl:border dark:border-none gap-x-2">
                <TabsTrigger className="xl:w-auto" value="personal-information">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger className="xl:w-auto" value="qualification">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Information content */}
                <TabsContent value="personal-information">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Elevating Digital Presence with Innovative Web Solutions
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      My expertise lies in crafting intuitive websites through
                      the integration of cutting-edge technology, delivering
                      dynamic and engaging user experiences that set new
                      standards in the industry.
                    </p>
                    {/* Icons */}
                    <ul className="grid xl:grid-cols-2 gap-4 mb-12">
                      {InfoData.map((item, index) => (
                        <li
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <Icon className="text-primary" name={item.icon} />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language</div>
                      <div className="border-b border-border"></div>
                      <div>English, Nepali, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualification content */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-7 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience and Education  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {
                              getData(QualificationData, "Work Experience")
                                .title
                            }
                          </h4>
                        </div>
                        <ul className="flex flex-col gap-y-8">
                          {getData(
                            QualificationData,
                            "Work Experience",
                          ).data.map((item: any, index: number) => {
                            const { title, company, position, duration } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[90px] w-[1px] bg-border relative ml-2 dark:bg-gray-700">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[90px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none  text-muted-foreground mb-2">
                                    {title}
                                  </div>
                                  <div className="text-base font-medium">
                                    {position}
                                  </div>
                                  <div className="text-base font-medium">
                                    {duration}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(QualificationData, "Education").title}
                          </h4>
                        </div>
                        <ul className="flex flex-col gap-y-8">
                          {getData(QualificationData, "Education").data.map(
                            (item: any, index: number) => {
                              const { institute, qualification, duration } =
                                item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[90px] w-[1px] bg-border relative ml-2 dark:bg-gray-700">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[90px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {institute}
                                    </div>
                                    <div className="text-lg leading-5 text-muted-foreground mb-2">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {duration}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills content */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools & Technologies</h3>
                    {/* Skils */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-6 gap-y-3 justify-center xl:justify-start flex-wrap">
                        {getData(SkillsData, "Skills").data.map(
                          (item: any, index: number) => {
                            const { img } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={img}
                                  alt="Tools"
                                  width={44}
                                  height={44}
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-6 gap-y-3 justify-center xl:justify-start flex-wrap">
                        {getData(SkillsData, "Tools").data.map(
                          (item: any, index: number) => {
                            const { img } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={img}
                                  alt="Tools"
                                  width={44}
                                  height={44}
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
