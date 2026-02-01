import { Shield, Code, Database, Globe, Lock, Terminal, Server, Cpu, Bug, Wifi, Key, Eye, FileCode, Layers, Cloud, Fingerprint } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript", "C++", "Rust", "Go", "Assembly", "Bash"],
  },
  {
    category: "Penetration Testing",
    icon: Shield,
    items: ["Web App Testing", "Network Pentesting", "Mobile App Testing", "API Security", "Social Engineering"],
  },
  {
    category: "Exploit Development",
    icon: Bug,
    items: ["Buffer Overflow", "ROP Chains", "Shellcode", "Zero-Day Research", "Fuzzing"],
  },
  {
    category: "Network Security",
    icon: Wifi,
    items: ["Packet Analysis", "MITM Attacks", "Firewall Bypass", "VPN Tunneling", "DNS Poisoning"],
  },
  {
    category: "Web Security",
    icon: Globe,
    items: ["XSS", "SQL Injection", "CSRF", "SSRF", "XXE", "Authentication Bypass"],
  },
  {
    category: "Cryptography",
    icon: Key,
    items: ["Encryption/Decryption", "Hash Cracking", "PKI", "Steganography", "Protocol Analysis"],
  },
  {
    category: "Reverse Engineering",
    icon: Cpu,
    items: ["Binary Analysis", "Malware Dissection", "Firmware Hacking", "Decompilation", "Debugging"],
  },
  {
    category: "OSINT",
    icon: Eye,
    items: ["Reconnaissance", "Footprinting", "Social Media Intel", "Dark Web Research", "Threat Intel"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Data Exfiltration"],
  },
  {
    category: "DevSecOps",
    icon: Server,
    items: ["Docker", "Kubernetes", "CI/CD Security", "SAST/DAST", "Container Escape"],
  },
  {
    category: "Cloud Security",
    icon: Cloud,
    items: ["AWS Security", "Azure Pentesting", "GCP Auditing", "S3 Misconfig", "IAM Exploitation"],
  },
  {
    category: "Security Tools",
    icon: Lock,
    items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Cobalt Strike", "Ghidra", "IDA Pro"],
  },
  {
    category: "Scripting",
    icon: Terminal,
    items: ["Automation", "Custom Exploits", "Web Scraping", "Bot Development", "Payload Crafting"],
  },
  {
    category: "Web Development",
    icon: FileCode,
    items: ["React", "Node.js", "Django", "FastAPI", "GraphQL", "WebSockets"],
  },
  {
    category: "Digital Forensics",
    icon: Fingerprint,
    items: ["Memory Forensics", "Disk Analysis", "Log Analysis", "Incident Response", "Evidence Collection"],
  },
  {
    category: "System Exploitation",
    icon: Layers,
    items: ["Privilege Escalation", "Lateral Movement", "Persistence", "Rootkits", "Kernel Exploits"],
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
            <span className="text-secondary">arsenal</span>
            <span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for offensive security, defensive operations, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-5 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300 hover:border-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <h3 className="font-display font-semibold text-secondary text-sm">{skill.category}</h3>
              </div>
              
              <ul className="space-y-1">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-muted-foreground flex items-center gap-2"
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
