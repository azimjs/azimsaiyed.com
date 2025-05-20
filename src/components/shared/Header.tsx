import Link from 'next/link';
import { Zap } from 'lucide-react'; // Or any other icon you prefer for the logo

export function Header() {
  return (
    <header className="py-6 bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-5xl">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Zap className="w-7 h-7 text-accent" />
          <span>PersonaLink</span>
        </Link>
        <nav className="flex gap-4 md:gap-6">
          <Link href="#profile" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Profile
          </Link>
          <Link href="#ai-personalization" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            AI Personalization
          </Link>
          <Link href="#projects" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
