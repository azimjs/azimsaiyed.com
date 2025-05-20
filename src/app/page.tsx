import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { AiPersonalizationSection } from '@/components/sections/AiPersonalizationSection';
import { ProjectShowcaseSection } from '@/components/sections/ProjectShowcaseSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { MOCK_PROFILE_DATA } from '@/lib/constants';

export default function Home() {
  const profileData = MOCK_PROFILE_DATA;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ProfileSection 
          profile={{
            name: profileData.name,
            headline: profileData.headline,
            summary: profileData.summary,
            workExperience: profileData.workExperience,
          }} 
        />
        <AiPersonalizationSection />
        <ProjectShowcaseSection projects={profileData.projects} />
        <ContactFormSection />
      </main>
      <Footer linkedInUrl={profileData.linkedInUrl} name={profileData.name} />
    </div>
  );
}
