import { useEffect, useState } from "react";
import { ChevronDown, Shield, Code2, Terminal } from "lucide-react";
import MatrixRain from "./MatrixRain";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "IT Expert | Programmer | Ethical Hacker";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-[1]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-pulse z-[2]">
        <Code2 className="w-16 h-16" />
      </div>
      <div className="absolute top-40 right-20 text-secondary/20 animate-pulse delay-500 z-[2]">
        <Shield className="w-12 h-12" />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/20 animate-pulse delay-1000 z-[2]">
        <Terminal className="w-10 h-10" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Terminal Header */}
          <div className="inline-block mb-6">
            <div className="bg-card/80 backdrop-blur border border-border rounded-t-lg px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-primary opacity-50" />
              <span className="ml-4 text-muted-foreground text-sm">~/rizwan-iqbal</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-glow animate-flicker">
            <span className="text-primary">RIZWAN</span>
            <br />
            <span className="text-secondary">IQBAL</span>
          </h1>

          {/* Typing Effect */}
          <div className="text-lg md:text-xl text-muted-foreground mb-8 h-8 font-mono">
            <span className="text-primary">&gt;</span> {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>_</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 animate-pulse-glow"
            >
              View Arsenal
            </a>
            <a
              href="#skills"
              className="px-8 py-3 bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              Explore Skills
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
