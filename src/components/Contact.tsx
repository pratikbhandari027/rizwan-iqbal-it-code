import { Terminal, Skull, Shield } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Terminal Window */}
          <div className="bg-background border border-border rounded-lg overflow-hidden border-glow">
            <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-primary opacity-50" />
              <span className="ml-4 text-muted-foreground text-sm font-mono">contact.sh</span>
            </div>
            
            <div className="p-8 md:p-12 font-mono">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full border border-primary/30">
                  <Skull className="w-12 h-12 text-primary animate-pulse" />
                </div>
              </div>

              <div className="space-y-3 text-left max-w-md mx-auto text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> whoami
                </p>
                <p className="text-secondary pl-4">
                  → Anonymous Security Researcher
                </p>
                
                <p className="text-muted-foreground mt-4">
                  <span className="text-primary">$</span> cat status.txt
                </p>
                <p className="text-secondary pl-4">
                  → Available for critical security engagements
                </p>

                <p className="text-muted-foreground mt-4">
                  <span className="text-primary">$</span> ./contact --method
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-secondary">[*]</span> Those who need to find me, will.
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-secondary">[*]</span> Encrypted channels preferred.
                </p>
                <p className="text-muted-foreground pl-4">
                  <span className="text-secondary">[*]</span> No logs. No traces.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>PGP Fingerprint:</span>
                  <code className="text-secondary bg-muted px-2 py-1 rounded">
                    7F4A 2B1C 9E8D ...
                  </code>
                </div>
              </div>

              <p className="mt-6 text-primary animate-blink">█</p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12">
            <blockquote className="text-muted-foreground italic text-lg">
              <span className="text-primary">"</span>
              In the digital shadows, we find the truth.
              <span className="text-primary">"</span>
            </blockquote>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Terminal className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-display">R.IQBAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
