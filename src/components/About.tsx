import { User, Calendar, MapPin, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "10+" },
    { icon: Award, label: "Projects Completed", value: "150+" },
    { icon: User, label: "Happy Clients", value: "50+" },
    { icon: MapPin, label: "Countries Served", value: "20+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Terminal Style */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg overflow-hidden border-glow">
              <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 text-muted-foreground text-sm">about.sh</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> cat about_me.txt
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-secondary">[INFO]</span> Experienced IT professional with deep expertise in software development, cybersecurity, and ethical hacking.
                  </p>
                  <p>
                    <span className="text-secondary">[MISSION]</span> Building secure, scalable solutions while identifying vulnerabilities before the bad actors do.
                  </p>
                  <p>
                    <span className="text-secondary">[PASSION]</span> Turning complex problems into elegant code and fortifying digital infrastructure against threats.
                  </p>
                </div>
                <p className="mt-4 text-primary animate-blink">█</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">&lt;</span>
              About Me
              <span className="text-primary">/&gt;</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm Rizwan Iqbal, a passionate technologist specializing in full-stack development and cybersecurity. With over a decade of experience, I've helped organizations secure their digital assets while building robust, scalable applications.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-2 group-hover:animate-pulse" />
                  <div className="text-2xl font-display font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
