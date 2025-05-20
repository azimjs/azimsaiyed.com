import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {children}
      </div>
    </section>
  );
}
