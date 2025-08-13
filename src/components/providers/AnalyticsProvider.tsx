'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Initialize analytics tracking
  useAnalytics();

  return <>{children}</>;
}
