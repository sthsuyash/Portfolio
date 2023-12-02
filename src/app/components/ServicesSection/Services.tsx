import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ServicesData } from "@/utils/data";
import Icon from "../Icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto mt-5">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 xl:gap-y-24 xl:gap-x-24">
          {ServicesData.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-transparent border border-gray-100 dark:border-gray-700 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition duration-300 flex flex-col justify-center items-center cursor-pointer shadow-md dark:shadow-none dark:hover:shadow-lg">
                  <Icon
                    name={service.icon}
                    className="w-16 h-16 mb-6 text-primary"
                  />
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    View More
                  </p>
                </Card>
                {/* <Button variant="outline">View More</Button> */}
              </DialogTrigger>
              <DialogContent className="max-w-[350px] sm:max-w-[500px] rounded-lg my-5 text-3xl p-10">
                <DialogHeader className="flex items-center gap-x-5 flex-row">
                  <Icon
                    name={service.icon}
                    className="inline w-10 h-10 text-primary"
                  />
                  <DialogTitle className="inline text-3xl text-left">
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-justify">
                  {service.description}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
