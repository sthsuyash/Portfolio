import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import FramerTemplate from "@/components/FramerTemplate";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin-ext", "devanagari", "latin"],
});

export const metadata: Metadata = {
  title: "Suyash Shrestha",
  description: "This is the personal portfolio site of Suyash Shrestha.",
  keywords: [
    "Suyash Shrestha",
    "Suyash",
    "Shrestha",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "SASS",
    "SCSS",
    "Jest",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Netlify",
    "Vercel",
    "Firebase",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "C",
    "C++",
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "REST",
    "API",
    "JSON",
    "XML",
    "YAML",
    "Docker",
    "Linux",
    "WSL",
    "WSL2",
    "Windows",
    "Go",
    "Vim",
    "VSCode",
    "IntelliJ",
    "PyCharm",
    "Visual Studio Code",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <FramerTemplate>{children}</FramerTemplate>
          <Toaster richColors position="bottom-left" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
