
import type { Project } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Main Card
import { Card as ProjectItemCard, CardContent as ProjectItemCardContent, CardDescription as ProjectItemCardDescription, CardFooter as ProjectItemCardFooter, CardHeader as ProjectItemCardHeader, CardTitle as ProjectItemCardTitle } from '@/components/ui/card'; // For inner items
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface ProjectShowcaseSectionProps {
  projects: Project[];
}

function ProjectItemDisplay({ project }: { project: Project }) { 
  return (
    <ProjectItemCard className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-background group"> {/* Item cards on slightly different bg */}
      <div className="relative w-full h-52 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.dataAiHint || "project image"}
          />
        ) : (
           <div className="w-full h-full bg-muted flex items-center justify-center">
              <FolderGit2 className="w-16 h-16 text-muted-foreground" />
           </div>
        )}
      </div>
      <ProjectItemCardHeader className="pb-2">
        <ProjectItemCardTitle className="text-xl text-foreground">{project.name}</ProjectItemCardTitle>
        <ProjectItemCardDescription className="h-20 overflow-y-auto text-sm pt-1 text-muted-foreground">{project.description}</ProjectItemCardDescription>
      </ProjectItemCardHeader>
      <ProjectItemCardContent className="flex-grow pt-2">
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground hover:bg-muted/80">{tag}</Badge>
            ))}
          </div>
        )}
      </ProjectItemCardContent>
      <ProjectItemCardFooter className="flex justify-start gap-2 border-t pt-4 mt-auto">
        {project.projectUrl && (
          <Button asChild variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" /> View Project
              </span>
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </span>
            </Link>
          </Button>
        )}
      </ProjectItemCardFooter>
    </ProjectItemCard>
  );
}

export function ProjectShowcaseSection({ projects }: ProjectShowcaseSectionProps) {
  return (
    <SectionWrapper id="portfolio">
      <Card className="bg-card shadow-md">
        <CardHeader>
          <SectionTitle subtitle="A selection of projects I've worked on.">Portfolio</SectionTitle>
        </CardHeader>
        <CardContent>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectItemDisplay key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No projects to display yet.</p>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
