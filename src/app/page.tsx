import { SiteEffects } from '@/components/site/SiteEffects';
import { Aside, Career, Contact, Hero, Impact, Lead, WhatIDo, Work } from '@/components/site/Sections';

export default function Home() {
  return (
    <div className="shell" id="top">
      <noscript>
        <style>{'.rv{opacity:1;transform:none}.headline .line>span{transform:none}'}</style>
      </noscript>
      <Aside />
      <main className="main">
        <Hero />
        <WhatIDo />
        <Work />
        <Impact />
        <Lead />
        <Career />
        <Contact />
      </main>
      <SiteEffects />
    </div>
  );
}
