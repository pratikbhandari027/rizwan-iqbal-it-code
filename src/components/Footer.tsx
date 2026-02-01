import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-primary">R.IQBAL</span>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <span className="text-primary">&lt;/&gt;</span>
            with
            <Heart className="w-4 h-4 text-destructive fill-current" />
            by Rizwan Iqbal © {currentYear}
          </p>

          <div className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">v</span>1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
