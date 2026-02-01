import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

interface CommandOutput {
  command: string;
  output: string[];
  isError?: boolean;
}

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  about      - Learn about Rizwan Iqbal",
    "  skills     - View technical arsenal",
    "  projects   - Browse security projects",
    "  contact    - How to reach me",
    "  socials    - Social media links",
    "  whoami     - Identity check",
    "  clear      - Clear terminal",
    "  matrix     - Toggle matrix effect",
    "  exit       - Close terminal",
    "",
    "Type any command to begin...",
  ],
  about: [
    "┌─────────────────────────────────────────┐",
    "│           RIZWAN IQBAL                  │",
    "│      IT Expert | Ethical Hacker         │",
    "├─────────────────────────────────────────┤",
    "│                                         │",
    "│  > 10+ years in cybersecurity           │",
    "│  > Penetration testing specialist       │",
    "│  > Full-stack developer                 │",
    "│  > Security researcher                  │",
    "│  > Zero-day hunter                      │",
    "│                                         │",
    "└─────────────────────────────────────────┘",
  ],
  skills: [
    "[OFFENSIVE]",
    "  ├── Penetration Testing",
    "  ├── Exploit Development",
    "  ├── Red Team Operations",
    "  └── Social Engineering",
    "",
    "[DEFENSIVE]",
    "  ├── Incident Response",
    "  ├── Threat Hunting",
    "  ├── Security Auditing",
    "  └── Digital Forensics",
    "",
    "[DEVELOPMENT]",
    "  ├── Python, Rust, Go, C++",
    "  ├── React, Node.js, Django",
    "  └── Custom Security Tools",
  ],
  projects: [
    "Loading projects from /var/arsenal/...",
    "",
    "[01] ZeroTrace     - Automated pentest framework",
    "[02] ShadowNet     - Covert C2 infrastructure",
    "[03] VulnHunter    - AI vulnerability scanner",
    "[04] PhantomShell  - Memory-resident implant",
    "[05] CryptoBreaker - Distributed hash cracker",
    "[06] DarkRecon     - OSINT platform",
    "",
    "Run 'projects --details <id>' for more info",
  ],
  contact: [
    "╔═══════════════════════════════════════╗",
    "║           SECURE CHANNELS             ║",
    "╠═══════════════════════════════════════╣",
    "║                                       ║",
    "║  [*] Those who need to find me, will  ║",
    "║  [*] Encrypted comms only             ║",
    "║  [*] No logs. No traces.              ║",
    "║                                       ║",
    "║  PGP: 7F4A 2B1C 9E8D ...              ║",
    "║                                       ║",
    "╚═══════════════════════════════════════╝",
  ],
  socials: [
    "Social Profiles:",
    "",
    "  GitHub    → github.com/rizwaniqbal",
    "  LinkedIn  → linkedin.com/in/rizwaniqbal",
    "  Twitter   → @rizwan_hacks",
    "",
    "Note: Verify identity via PGP signature",
  ],
  whoami: [
    "",
    "  ██████╗ ██╗███████╗██╗    ██╗ █████╗ ███╗   ██╗",
    "  ██╔══██╗██║╚══███╔╝██║    ██║██╔══██╗████╗  ██║",
    "  ██████╔╝██║  ███╔╝ ██║ █╗ ██║███████║██╔██╗ ██║",
    "  ██╔══██╗██║ ███╔╝  ██║███╗██║██╔══██║██║╚██╗██║",
    "  ██║  ██║██║███████╗╚███╔███╔╝██║  ██║██║ ╚████║",
    "  ╚═╝  ╚═╝╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝",
    "",
    "  Role: Ethical Hacker | Security Researcher",
    "  Status: Online",
    "  Threat Level: Maximum",
    "",
  ],
  matrix: [
    "Matrix rain effect toggled.",
    "Reality is just code...",
  ],
};

const TerminalInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "",
      output: [
        "Welcome to R.IQBAL Terminal v1.0",
        "Type 'help' for available commands.",
        "",
      ],
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "") return;

    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "exit") {
      setIsOpen(false);
      return;
    }

    const output = commands[trimmedCmd];
    
    if (output) {
      setHistory((prev) => [...prev, { command: cmd, output }]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: [`Command not found: ${trimmedCmd}`, "Type 'help' for available commands."],
          isError: true,
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-card border border-primary rounded-lg hover:border-glow transition-all group animate-pulse-glow"
          aria-label="Open Terminal"
        >
          <TerminalIcon className="w-6 h-6 text-primary group-hover:animate-pulse" />
        </button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-background border border-border rounded-lg shadow-2xl transition-all duration-300 ${
            isMinimized
              ? "bottom-6 right-6 w-64 h-10"
              : "bottom-6 right-6 w-[90vw] max-w-2xl h-[60vh] max-h-[500px]"
          }`}
          style={{ boxShadow: "0 0 30px rgba(0, 255, 65, 0.2)" }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border rounded-t-lg">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-mono">terminal@rizwan:~</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-background rounded transition-colors"
              >
                {isMinimized ? (
                  <Square className="w-3 h-3 text-muted-foreground" />
                ) : (
                  <Minus className="w-3 h-3 text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-destructive/20 rounded transition-colors"
              >
                <X className="w-3 h-3 text-destructive" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          {!isMinimized && (
            <div
              ref={terminalRef}
              className="h-[calc(100%-40px)] overflow-y-auto p-4 font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.command && (
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <span className="text-foreground">{item.command}</span>
                    </div>
                  )}
                  {item.output.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className={`pl-4 ${item.isError ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center gap-2">
                <span className="text-primary">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-foreground outline-none caret-primary"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="text-primary animate-blink">█</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TerminalInterface;
