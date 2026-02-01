import { Shield, Code, Database, Globe, Lock, Terminal, Server, Cpu } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript", "C++", "Rust", "Go"],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    items: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Malware Analysis"],
  },
  {
    category: "Web Development",
    icon: Globe,
    items: ["React", "Node.js", "Next.js", "Django", "FastAPI", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
  },
  {
    category: "DevOps",
    icon: Server,
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
  },
  {
    category: "Security Tools",
    icon: Lock,
    items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "OWASP ZAP"],
  },
  {
    category: "Systems",
    icon: Cpu,
    items: ["Reverse Engineering", "Binary Exploitation", "Firmware Analysis"],
  },
  {
    category: "Scripting",
    icon: Terminal,
    items: ["Bash", "PowerShell", "Automation", "Web Scraping", "API Development"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">System.</span>
            <span className="text-secondary">skills</span>
            <span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive arsenal of tools and technologies for building and securing digital systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300 hover:border-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                <h3 className="font-display font-semibold text-secondary">{skill.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
