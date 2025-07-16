"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Server,
  Globe,
  Smartphone,
  Terminal,
  GitBranch,
  Layers,
  Zap,
  Shield,
  Settings,
  Leaf,
  CodeXml,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { useState, useEffect } from "react"; // Importar useState e useEffect
import { translations } from "./translation"; // Importar as traduções

export default function Portfolio() {
  // Estado para o idioma, com 'pt' como padrão.
  // Você pode usar localStorage para persistir a escolha do usuário.
  const [locale, setLocale] = useState("en");

  // useEffect para carregar o idioma salvo no localStorage (opcional)
  useEffect(() => {
    const savedLocale = localStorage.getItem("portfolio_locale");
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  // Função para alternar o idioma
  const toggleLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    setLocale(newLocale);
    localStorage.setItem("portfolio_locale", newLocale); // Salvar no localStorage
  };

  // Obter os textos do idioma atual
  const t = translations[locale];

  // Definição das habilidades com os ícones (mantendo a estrutura original para os ícones)
  // Os nomes das habilidades agora virão de 't.skills.frontendSkills', etc.
  const skills = {
    frontend: [
      {
        name: t.skills.frontendSkills[0].name,
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        name: t.skills.frontendSkills[1].name,
        icon: <Globe className="w-4 h-4" />,
      },
      {
        name: t.skills.frontendSkills[2].name,
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        name: t.skills.frontendSkills[3].name,
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        name: t.skills.frontendSkills[4].name,
        icon: <Terminal className="w-4 h-4" />,
      },
      {
        name: t.skills.frontendSkills[5].name,
        icon: <Terminal className="w-4 h-4" />,
      },
    ],
    backend: [
      {
        name: t.skills.backendSkills[0].name,
        icon: <Server className="w-4 h-4" />,
      },
      {
        name: t.skills.backendSkills[1].name,
        icon: <Server className="w-4 h-4" />,
      },
      {
        name: t.skills.backendSkills[2].name,
        icon: <Server className="w-4 h-4" />,
      },
      {
        name: t.skills.backendSkills[3].name,
        icon: <Server className="w-4 h-4" />,
      },
      {
        name: t.skills.backendSkills[4].name,
        icon: <Terminal className="w-4 h-4" />,
      },
      {
        name: t.skills.backendSkills[5].name,
        icon: <Terminal className="w-4 h-4" />,
      },
    ],
    cloud: [
      {
        name: t.skills.cloudSkills[0].name,
        icon: <Cloud className="w-4 h-4" />,
      },
      {
        name: t.skills.cloudSkills[1].name,
        icon: <Cloud className="w-4 h-4" />,
      },
      { name: t.skills.cloudSkills[2].name, icon: <Zap className="w-4 h-4" /> },
      {
        name: t.skills.cloudSkills[3].name,
        icon: <Database className="w-4 h-4" />,
      },
      {
        name: t.skills.cloudSkills[4].name,
        icon: <Shield className="w-4 h-4" />,
      },
      {
        name: t.skills.cloudSkills[5].name,
        icon: <Database className="w-4 h-4" />,
      },
    ],
    database: [
      {
        name: t.skills.databaseSkills[0].name,
        icon: <Database className="w-4 h-4" />,
      },
      {
        name: t.skills.databaseSkills[1].name,
        icon: <Database className="w-4 h-4" />,
      },
      {
        name: t.skills.databaseSkills[2].name,
        icon: <Database className="w-4 h-4" />,
      },
      {
        name: t.skills.databaseSkills[3].name,
        icon: <Layers className="w-4 h-4" />,
      },
    ],
    tools: [
      {
        name: t.skills.toolsSkills[0].name,
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        name: t.skills.toolsSkills[1].name,
        icon: <Settings className="w-4 h-4" />,
      },
      {
        name: t.skills.toolsSkills[2].name,
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        name: t.skills.toolsSkills[3].name,
        icon: <Layers className="w-4 h-4" />,
      },
      {
        name: t.skills.toolsSkills[4].name,
        icon: <Layers className="w-4 h-4" />,
      },
      {
        name: t.skills.toolsSkills[5].name,
        icon: <Layers className="w-4 h-4" />,
      },
    ],
  };

  // Definição dos projetos, agora buscando os títulos e descrições das traduções
  const projects = [
    {
      title: t.projects.oncoRx.title,
      description: t.projects.oncoRx.description,
      image: "/oncorx.png?height=300&width=300",
      technologies: [
        "React",
        "Node.js",
        "AWS Amplify",
        "GitHub Actions",
        "Artificial Intelligence",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t.projects.turnco.title,
      description: t.projects.turnco.description,
      image: "/turnco.avif?height=200&width=300",
      technologies: [
        "React",
        "AWS Amplify",
        "GitHub Actions",
        "Artificial Intelligence",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t.projects.seuMenu.title,
      description: t.projects.seuMenu.description,
      image: "/seu-menu.jpeg?height=300&width=300",
      technologies: [
        "Ionic",
        "React",
        "Angular",
        "Digital Ocean",
        "PHP",
        "NodeJs",
        "MySQL",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: t.projects.fertili360.title,
      description: t.projects.fertili360.description,
      image: "/fertili.webp?height=200&width=300",
      technologies: [
        "Ionic",
        "React",
        "Angular",
        "Digital Ocean",
        "PHP",
        "NodeJs",
        "MySQL",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pastel-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-foreground organic-text flex items-center gap-2">
              <CodeXml className="w-6 h-6 text-golden" />
              lorran.dev
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {t.nav.projects}
                </Link>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {t.nav.skills}
                </Link>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {t.nav.contact}
                </Link>
              </div>
              {/* Botão para alternar idioma */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLocale}
                className="border-golden text-golden hover:bg-golden hover:text-organic-dark transition-all duration-300 bg-transparent text-sm font-medium"
              >
                {locale === "pt" ? "EN" : "PT"}
              </Button>
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative inline-block">
                <Image
                  src="/breno-freire-programador.jpeg?height=150&width=150"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6 border-4 border-golden shadow-golden"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                  <CodeXml className="w-4 h-4 text-organic-dark" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground organic-text">
              {t.hero.title}{" "}
              <span className="script-text text-primary text-5xl md:text-7xl">
                {t.hero.scriptTitle}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
              {t.hero.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.hero.description2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="golden-button text-lg px-8 py-3"
                asChild
              >
                <Link href="#projects">{t.hero.viewProjects}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-2 border-golden text-golden hover:bg-golden hover:text-organic-dark transition-all duration-300 bg-transparent"
                asChild
              >
                <Link
                  href="https://api.whatsapp.com/send/?phone=5577981150294"
                  target="_blank"
                >
                  {t.hero.talkToMe}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground organic-text">
              {t.about.title}
            </h2>
            <div className="text-center mb-12">
              <span className="script-text text-2xl text-primary">
                {t.about.scriptTitle}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.paragraph1}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.paragraph2}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.paragraph3}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-sage-soft text-forest-deep border border-sage-light rounded-lg"
                  >
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-sage-soft text-forest-deep border border-sage-light rounded-lg"
                  >
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground organic-text">
            {t.projects.title}
          </h2>
          <div className="text-center mb-12">
            <span className="script-text text-2xl text-primary">
              {t.projects.scriptTitle}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="organic-card group hover:shadow-golden hover:border-primary/50 transition-all duration-300 bg-card"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-organic-dark" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl text-card-foreground organic-text">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground organic-text">
            {t.skills.title}
          </h2>
          <div className="text-center mb-12">
            <span className="script-text text-2xl text-primary">
              {t.skills.scriptTitle}
            </span>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="organic-card bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground organic-text">
                    <Smartphone className="w-5 h-5 text-golden" />
                    {t.skills.frontend}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.frontend.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-organic-accent/20 transition-colors text-muted-foreground"
                      >
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="organic-card bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground organic-text">
                    <Server className="w-5 h-5 text-golden" />
                    {t.skills.backend}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.backend.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-organic-accent/20 transition-colors text-muted-foreground"
                      >
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="organic-card bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground organic-text">
                    <Cloud className="w-5 h-5 text-golden" />
                    {t.skills.cloud}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.cloud.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-organic-accent/20 transition-colors text-muted-foreground"
                      >
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="organic-card bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground organic-text">
                    <Database className="w-5 h-5 text-golden" />
                    {t.skills.database}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.database.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-organic-accent/20 transition-colors text-muted-foreground"
                      >
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="organic-card md:col-span-2 lg:col-span-1 bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground organic-text">
                    <Settings className="w-5 h-5 text-golden" />
                    {t.skills.devops}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.tools.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-organic-accent/20 transition-colors text-muted-foreground"
                      >
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground organic-text">
              {t.cta.titlePart1}{" "}
              <span className="script-text text-primary">
                {t.cta.titlePart2}
              </span>{" "}
              {t.cta.titlePart3}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.cta.description}
            </p>
            <Button
              size="lg"
              className="golden-button text-lg px-8 py-3"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5577981150294"
                className="flex items-center gap-2"
                target="_blank"
              >
                <Mail className="w-5 h-5" />
                {t.cta.contactMe}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
              <CodeXml className="w-5 h-5 text-golden" />
              <p className="text-muted-foreground organic-text">
                © {new Date().getFullYear()} {t.footer.copyright}
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/in/breno-freire-aa141969/"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/brenofreire"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:brenofreire.dev@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
