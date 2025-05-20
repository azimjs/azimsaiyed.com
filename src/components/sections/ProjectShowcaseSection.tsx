import type { Project } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
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
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      {project.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.dataAiHint || "project image"}
          />
        </div>
      )}
      {!project.imageUrl && (
         <div className="w-full h-48 bg-muted flex items-center justify-center">
            <FolderGit2 className="w-16 h-16 text-muted-foreground" />
         </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription className="h-20 overflow-y-auto text-sm">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-start gap-2 border-t pt-4">
        {project.projectUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Project
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="ghost" size="sm">
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
    <SectionWrapper id="projects" className="bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">Projects Showcase</h2>
        <p className="text-lg text-muted-foreground mt-2">
          A collection of my work and passion projects.
        </p>
      </div>
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
