import { ExternalLink, Github, Lock, Shield, Terminal, Bug, Wifi, Eye, Server, Key, Skull, Database } from "lucide-react";

const projects = [
  {
    title: "ZeroTrace",
    description: "Advanced penetration testing framework with automated reconnaissance and exploitation modules.",
    tech: ["Python", "Scapy", "AsyncIO"],
    icon: Skull,
    category: "Offensive",
  },
  {
    title: "ShadowNet",
    description: "Covert C2 infrastructure with encrypted tunneling and anti-forensics capabilities.",
    tech: ["Go", "WireGuard", "gRPC"],
    icon: Wifi,
    category: "Red Team",
  },
  {
    title: "VulnHunter",
    description: "AI-powered vulnerability scanner that discovers zero-days in web applications.",
    tech: ["Python", "TensorFlow", "Selenium"],
    icon: Bug,
    category: "Research",
  },
  {
    title: "PhantomShell",
    description: "Memory-resident implant with rootkit capabilities for persistence and evasion.",
    tech: ["C", "Assembly", "WinAPI"],
    icon: Terminal,
    category: "Malware",
  },
  {
    title: "CryptoBreaker",
    description: "Distributed password cracking platform with rainbow table generation.",
    tech: ["Rust", "CUDA", "OpenCL"],
    icon: Key,
    category: "Crypto",
  },
  {
    title: "DarkRecon",
    description: "OSINT platform for deep web reconnaissance and threat intelligence gathering.",
    tech: ["Python", "Tor", "Elasticsearch"],
    icon: Eye,
    category: "OSINT",
  },
  {
    title: "NetShield",
    description: "Real-time network intrusion detection with behavioral analysis and threat hunting.",
    tech: ["Python", "Zeek", "Suricata"],
    icon: Shield,
    category: "Defense",
  },
  {
    title: "SQLGhost",
    description: "Advanced SQL injection toolkit with WAF bypass and data exfiltration modules.",
    tech: ["Python", "SQLMap", "Custom"],
    icon: Database,
    category: "Exploit",
  },
  {
    title: "SecureVault",
    description: "Zero-knowledge encrypted vault with hardware key support and self-destruct.",
    tech: ["Rust", "WebCrypto", "YubiKey"],
    icon: Lock,
    category: "Privacy",
  },
  {
    title: "CloudPwn",
    description: "Cloud infrastructure exploitation toolkit for AWS, Azure, and GCP misconfigurations.",
    tech: ["Python", "Boto3", "Terraform"],
    icon: Server,
    category: "Cloud",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and exploits developed for ethical hacking, security research, and red team operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-500"
            >
              {/* Project Header */}
              <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="ml-2 text-muted-foreground text-xs font-mono">{project.title.toLowerCase()}.py</span>
                </div>
                <span className="text-xs text-secondary px-2 py-0.5 bg-secondary/10 rounded">{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-glow transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-0.5 bg-muted text-secondary border border-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-secondary transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
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
