
import type { WorkExperience, EducationItem as EducationType } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

interface WorkExperienceItemProps {
  experience: WorkExperience;
}

function WorkExperienceItem({ experience }: WorkExperienceItemProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 bg-card">
      <CardHeader className="flex flex-row items-start gap-4 p-4 bg-card hover:bg-muted/10"> {/* Adjusted background */}
        {experience.logoUrl ? (
          <Image 
            src={experience.logoUrl} 
            alt={`${experience.company} logo`} 
            width={48} 
            height={48} 
            className="rounded-md object-contain bg-slate-100 p-1" // Added bg for placeholder visibility
            data-ai-hint="company logo"
          />
        ) : (
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-muted text-muted-foreground">
            <Briefcase className="h-6 w-6" />
          </div>
        )}
        <div>
          <CardTitle className="text-lg text-foreground">{experience.title}</CardTitle>
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

interface EducationItemProps {
  education: EducationType;
}

function EducationItem({ education }: EducationItemProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 bg-card">
      <CardHeader className="flex flex-row items-start gap-4 p-4 bg-card hover:bg-muted/10"> {/* Adjusted background */}
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-muted text-muted-foreground">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div>
          <CardTitle className="text-lg text-foreground">{education.degree}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{education.institution}</CardDescription>
          <p className="text-xs text-muted-foreground mt-1">
            {education.startDate} - {education.endDate || 'Present'}
          </p>
        </div>
      </CardHeader>
      {education.description && (
        <CardContent className="p-4">
          <p className="text-sm text-foreground/80">{education.description}</p>
        </CardContent>
      )}
    </Card>
  );
}

interface ResumeSectionProps {
  workExperience: WorkExperience[];
  education: EducationType[];
}

export function ResumeSection({ workExperience, education }: ResumeSectionProps) {
  return (
    <SectionWrapper id="resume" className="bg-background">
      <SectionTitle subtitle="My professional journey and academic qualifications.">Resume</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
            <Briefcase className="mr-3 h-6 w-6" /> Experience
          </h3>
          {workExperience.length > 0 ? (
            workExperience.map((exp) => <WorkExperienceItem key={exp.id} experience={exp} />)
          ) : (
            <p className="text-muted-foreground">No work experience listed.</p>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
            <GraduationCap className="mr-3 h-6 w-6" /> Education
          </h3>
          {education.length > 0 ? (
            education.map((edu) => <EducationItem key={edu.id} education={edu} />)
          ) : (
            <p className="text-muted-foreground">No education history listed.</p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
