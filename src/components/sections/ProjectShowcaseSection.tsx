
import type { Project } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface ProjectShowcaseSectionProps {
  projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group">
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
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-foreground">{project.name}</CardTitle>
        <CardDescription className="h-20 overflow-y-auto text-sm pt-1 text-muted-foreground">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground hover:bg-muted/80">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-start gap-2 border-t pt-4 mt-auto">
        {project.projectUrl && (
          <Button asChild variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Project
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProjectShowcaseSection({ projects }: ProjectShowcaseSectionProps) {
  return (
    <SectionWrapper id="portfolio" className="bg-background"> {/* Changed to bg-background */}
      <SectionTitle subtitle="A selection of projects I've worked on.">Portfolio</SectionTitle>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No projects to display yet.</p>
      )}
    </SectionWrapper>
  );
}
