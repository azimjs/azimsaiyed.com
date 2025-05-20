
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      // Adjusted scroll-mt as sticky nav is removed. Use a small value for any fixed headers if any.
      className={cn('py-12 md:py-16 scroll-mt-16', className)} 
    >
      <div className="container px-0 md:px-0"> 
        {children}
      </div>
    </section>
  );
}

