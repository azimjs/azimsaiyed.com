import type { ProfileData, WorkExperience } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, UserCircle } from 'lucide-react';
import Image from 'next/image';

interface ProfileSectionProps {
  profile: Pick<ProfileData, 'name' | 'headline' | 'summary' | 'workExperience'>;
}

function WorkExperienceItem({ experience }: { experience: WorkExperience }) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4 p-4 bg-secondary/30">
        {experience.logoUrl ? (
          <Image 
            src={experience.logoUrl} 
            alt={`${experience.company} logo`} 
            width={48} 
            height={48} 
            className="rounded-md object-contain"
            data-ai-hint="company logo" 
          />
        ) : (
          <Avatar className="h-12 w-12">
            <AvatarFallback>
              <Briefcase className="h-6 w-6 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        )}
        <div>
          <CardTitle className="text-lg">{experience.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{experience.company}</CardDescription>
          <p className="text-xs text-muted-foreground mt-1">
            {experience.startDate} - {experience.endDate || 'Present'}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-foreground/80">{experience.description}</p>
      </CardContent>
    </Card>
  );
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <SectionWrapper id="profile" className="bg-card">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Avatar className="w-32 h-32 text-4xl border-4 border-primary/20 shadow-lg">
          {/* Placeholder for actual profile image. Replace with next/image if available */}
          <AvatarImage src={`https://placehold.co/200x200/000000/FFFFFF?text=${initials}`} alt={profile.name} data-ai-hint="profile picture" />
          <AvatarFallback><UserCircle className="w-16 h-16" /></AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary">{profile.name}</h1>
          <p className="text-xl text-accent mt-1">{profile.headline}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">Summary</h2>
        <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{profile.summary}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-primary mb-6">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.workExperience.map((exp) => (
            <WorkExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
