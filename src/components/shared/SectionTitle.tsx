
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12 text-center md:text-left", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground relative inline-block">
        {children}
        {/* Removed accent line: <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span> */}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground mt-3">{subtitle}</p>}
    </div>
  );
}
