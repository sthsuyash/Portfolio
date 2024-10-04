import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import FramerTemplate from "@/components/FramerTemplate";

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
    "Python",
    "Django",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "REST API",
    "GraphQL",
    "API",
    "JSON",
    "XML",
    "YAML",
    "Docker",
    "Linux",
    "WSL",
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
      <body>
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
