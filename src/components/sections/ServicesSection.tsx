
import type { ServiceItem as ServiceItemType } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardHeader, CardContent as MainCardContent } from '@/components/ui/card'; // Renamed CardContent to avoid clash
import { Code, Palette, User, Search, type LucideProps } from 'lucide-react';
import { Card as ServiceItemCard, CardContent as ServiceItemCardContent, CardHeader as ServiceItemCardHeader, CardTitle as ServiceItemCardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const serviceIconComponents: { [key: string]: React.ElementType<LucideProps> } = {
  Code,
  Palette,
  User,
  Search,
};

interface ServicesSectionProps {
  services: ServiceItemType[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionWrapper id="services">
      <Card className="bg-background shadow-sm">
        <CardHeader>
          <SectionTitle subtitle="Discover the ways I can help bring your ideas to life.">What I Do?</SectionTitle>
          <Separator className="mt-4" />
        </CardHeader>
        <MainCardContent>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => {
                const IconComponent = service.icon ? serviceIconComponents[service.icon] : null;
                return (
                  <ServiceItemCard key={service.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col text-center md:text-left bg-card"> {/* Service items on card (darker) bg */}
                    <ServiceItemCardHeader className="items-center md:items-start">
                      {IconComponent && (
                        <div className="mb-3 text-primary bg-primary/10 p-3 rounded-lg inline-block">
                           <IconComponent className="w-8 h-8" />
                        </div>
                      )}
                      <ServiceItemCardTitle className="text-xl text-foreground">{service.title}</ServiceItemCardTitle>
                    </ServiceItemCardHeader>
                    <ServiceItemCardContent className="flex-grow">
                      <p className="text-foreground/90">{service.description}</p>
                    </ServiceItemCardContent>
                  </ServiceItemCard>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No services to display at the moment.</p>
          )}
        </MainCardContent>
      </Card>
    </SectionWrapper>
  );
}
