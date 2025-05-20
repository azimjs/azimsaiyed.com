
import type { ServiceItem as ServiceItemType } from '@/types';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // CardDescription removed as it's not used here
import { Code, Palette, User, Search, type LucideProps } from 'lucide-react';

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
    <SectionWrapper id="services" className="bg-background"> {/* Changed to bg-background for dark theme */}
      <SectionTitle subtitle="Discover the ways I can help bring your ideas to life.">What I Do?</SectionTitle>
      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon ? serviceIconComponents[service.icon] : null;
            return (
              <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center md:text-left bg-card"> {/* Ensure card uses theme bg */}
                <CardHeader className="items-center md:items-start">
                  {IconComponent && (
                    <div className="mb-3 text-primary bg-primary/10 p-3 rounded-lg inline-block">
                       <IconComponent className="w-8 h-8" />
                    </div>
                  )}
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle> {/* Ensure text uses foreground */}
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p> {/* Use p with muted-foreground */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No services to display at the moment.</p>
      )}
    </SectionWrapper>
  );
}
