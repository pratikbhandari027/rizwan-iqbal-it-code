import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, Terminal } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@rizwaniqbal.com", label: "Email" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">init</span>
            <span className="text-secondary">Contact</span>
            <span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project or need security consultation? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 text-muted-foreground text-sm">message.sh</span>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <span className="text-primary">$</span> name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <span className="text-primary">$</span> email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <span className="text-primary">$</span> message:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-muted border border-border rounded px-4 py-2 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Type your message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors animate-pulse-glow"
              >
                <Send className="w-4 h-4" />
                Execute Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-background border border-border rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-secondary font-display">Quick Connect</span>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">email:</span> contact@rizwaniqbal.com
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">location:</span> Available Worldwide
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">status:</span> <span className="text-secondary">Open for projects</span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-muted-foreground mb-4 text-sm uppercase tracking-wider">Find me on:</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-muted border border-border rounded-lg hover:border-primary hover:text-primary transition-all group"
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
