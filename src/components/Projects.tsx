import { ExternalLink, Github, Lock, Globe, Shield, Terminal } from "lucide-react";

const projects = [
  {
    title: "SecureVault",
    description: "End-to-end encrypted password manager with zero-knowledge architecture.",
    tech: ["Rust", "React", "WebCrypto API"],
    icon: Lock,
    category: "Security",
  },
  {
    title: "NetShield",
    description: "Real-time network intrusion detection system using machine learning.",
    tech: ["Python", "TensorFlow", "Scapy"],
    icon: Shield,
    category: "Cybersecurity",
  },
  {
    title: "CloudDeploy",
    description: "Automated infrastructure provisioning and security auditing platform.",
    tech: ["Go", "Terraform", "Kubernetes"],
    icon: Globe,
    category: "DevOps",
  },
  {
    title: "HackLab",
    description: "Virtual environment for practicing penetration testing techniques safely.",
    tech: ["Docker", "Python", "Bash"],
    icon: Terminal,
    category: "Training",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of security-focused applications and development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-500"
            >
              {/* Project Header */}
              <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="ml-2 text-muted-foreground text-sm">{project.title.toLowerCase()}.exe</span>
                </div>
                <span className="text-xs text-secondary px-2 py-1 bg-secondary/10 rounded">{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-muted text-secondary border border-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                        Source
                      </button>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
