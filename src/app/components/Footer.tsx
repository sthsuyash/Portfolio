import Socials from "./Socials";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div>
          <Socials
            containerStyles="flex gap-x-4 mx-auto text-center justify-center mb-3"
            iconStyles="text-foreground text-[22px] hover:text-primary transition-all duration-300"
          />
          <div className="text-muted-foreground text-center">
            Copyright &copy; {year} Suyash Shrestha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
