import Link from 'next/link';
import { Linkedin } from 'lucide-react';

interface FooterProps {
  linkedInUrl: string;
  name: string;
}

export function Footer({ linkedInUrl, name }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
