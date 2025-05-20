
import type { ProfileData } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface AboutMeSectionProps {
  summary: ProfileData['summary'];
}

export function AboutMeSection({ summary }: AboutMeSectionProps) {
  return (
    <SectionWrapper id="about"> {/* Removed bg-background */}
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <SectionTitle>About Me</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap dark:prose-invert">
            <p>{summary}</p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
