import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Corrected import for Geist and Geist_Mono
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster
import GoogleAnalyticsComponent from "@/components/analytics/GoogleAnalytics";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import { analyticsConfig } from "@/lib/analytics";

const geistSans = Geist({ // Changed from GeistSans to Geist
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Changed from GeistMono to Geist_Mono
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Azim Saiyed - Software Engineer', // Updated app title
  description: "Azim Saiyed's portfolio – Lead Full-Stack Engineer specializing in React, Node.js, TypeScript, and cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}> {/* Ensured font-sans is applied */}
        <AnalyticsProvider>
          {children}
          <Toaster />
          <GoogleAnalyticsComponent gaId={analyticsConfig.googleAnalyticsId} />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
