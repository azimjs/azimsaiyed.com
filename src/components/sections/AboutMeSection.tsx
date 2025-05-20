
import type { ProfileData } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface AboutMeSectionProps {
  summary: ProfileData['summary'];
}

export function AboutMeSection({ summary }: AboutMeSectionProps) {
  return (
    <SectionWrapper id="about">
      <Card className="bg-background shadow-sm">
        <CardHeader>
          <SectionTitle>About Me</SectionTitle>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none text-[#7a828a] leading-relaxed whitespace-pre-wrap dark:prose-invert">
            <p>{summary}</p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
