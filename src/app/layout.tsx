import type {Metadata} from 'next';
import { Bricolage_Grotesque, Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import './site.css';
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalyticsComponent from "@/components/analytics/GoogleAnalytics";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import { analyticsConfig } from "@/lib/analytics";

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const serif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'Azim Saiyed | Growth Engineering Manager',
  description: 'Azim Saiyed, Growth Engineering Manager at Collective. 10+ years building the engines that make products grow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${serif.variable}`}>
        <AnalyticsProvider>
          {children}
          <Toaster />
          <GoogleAnalyticsComponent gaId={analyticsConfig.googleAnalyticsId} />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
