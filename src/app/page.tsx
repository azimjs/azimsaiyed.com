
import { MOCK_PROFILE_DATA } from '@/lib/constants';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { AboutMeSection } from '@/components/sections/AboutMeSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { ProjectShowcaseSection } from '@/components/sections/ProjectShowcaseSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export default function Home() {
  const profileData = MOCK_PROFILE_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <LeftSidebar 
        profile={{
          name: profileData.name,
          headline: profileData.headline,
          profileImageUrl: profileData.profileImageUrl,
          socialLinks: profileData.socialLinks,
          cvUrl: profileData.cvUrl,
          email: profileData.email,
          phone: profileData.phone,
          address: profileData.address,
        }}
      />
      <main className="flex-1 md:ml-[50%] p-4 md:p-8 lg:p-10 overflow-y-auto">
        <AboutMeSection summary={profileData.summary} />
        <ServicesSection services={profileData.services} />
        <ResumeSection 
          workExperience={profileData.workExperience}
          education={profileData.education}
        />
        <ProjectShowcaseSection projects={profileData.projects} />
        <ContactFormSection 
          contactInfo={{
            email: profileData.email,
            phone: profileData.phone,
            address: profileData.address,
          }}
        />
        <footer className="mt-12 pt-8 border-t border-border text-center md:text-right print:hidden">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {profileData.name}. All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
