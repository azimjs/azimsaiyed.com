
'use client';

import type { ProfileData } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Twitter, type LucideProps } from 'lucide-react';

const iconComponents: { [key: string]: React.ElementType<LucideProps> } = {
  Linkedin,
  Github,
  Twitter,
};

interface LeftSidebarProps {
  profile: Pick<ProfileData, 'name' | 'headline' | 'profileImageUrl' | 'socialLinks' | 'cvUrl' | 'email' | 'phone' | 'address'>;
}

export function LeftSidebar({ profile }: LeftSidebarProps) {
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <aside className="w-full md:w-1/2 bg-background text-foreground p-6 md:p-8 shadow-lg md:fixed md:h-screen md:overflow-y-auto flex flex-col items-center md:items-start md:justify-center space-y-6 print:hidden">
      <Avatar className="w-32 h-32 md:w-40 md:h-40 text-5xl border-4 border-primary/50 shadow-md">
        <AvatarImage 
          src={profile.profileImageUrl || `https://placehold.co/200x200.png?text=${initials}`} 
          alt={profile.name}
          data-ai-hint="profile picture"
        />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="text-center md:text-left w-full">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
          Hi, I’m <span className="text-primary">{profile.name}</span>
        </h1>
        <p className="text-xl text-muted-foreground mt-2">{profile.headline}</p>
      </div>
      
      <div className="w-full max-w-xs bg-card/50 p-4 rounded-lg space-y-3 text-sm">
        {profile.phone && (
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-3 text-primary" />
            <span className="text-muted-foreground">{profile.phone}</span>
          </div>
        )}
        {profile.email && (
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-3 text-primary" />
            <Link href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary break-all">{profile.email}</Link>
          </div>
        )}
        {profile.address && (
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-3 text-primary" />
            <span className="text-muted-foreground">{profile.address}</span>
          </div>
        )}
      </div>

      <div className="flex space-x-4 justify-center md:justify-start">
        {profile.socialLinks.map((link) => {
          const IconComponent = link.icon && iconComponents[link.icon] ? iconComponents[link.icon] : null;
          return (
            <Link 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {IconComponent ? <IconComponent className="w-6 h-6" /> : <span className="text-xs">({link.name})</span>}
            </Link>
          );
        })}
      </div>
      
      <Button 
        asChild 
        size="lg" 
        className="w-full max-w-xs bg-card hover:bg-card/80 text-primary border border-primary/50"
      >
        <Link href={profile.cvUrl} target="_blank" download>
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Link>
      </Button>
    </aside>
  );
}
