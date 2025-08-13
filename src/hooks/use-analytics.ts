'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { analyticsConfig } from '@/lib/analytics';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (analyticsConfig.googleAnalyticsId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', analyticsConfig.googleAnalyticsId, {
        page_path: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  // Track custom events
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (analyticsConfig.googleAnalyticsId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', 'engagement', buttonName, undefined);
  };

  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', 'engagement', formName, undefined);
  };

  // Track external link clicks
  const trackExternalLink = (url: string, linkText?: string) => {
    trackEvent('external_link_click', 'engagement', linkText || url, undefined);
  };

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
  };
};
