
import type { ProfileData } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';

interface AboutMeSectionProps {
  summary: ProfileData['summary'];
}

export function AboutMeSection({ summary }: AboutMeSectionProps) {
  return (
    <SectionWrapper id="about" className="bg-background">
      <SectionTitle>About Me</SectionTitle>
      <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap dark:prose-invert">
        <p>{summary}</p>
      </div>
    </SectionWrapper>
  );
}
