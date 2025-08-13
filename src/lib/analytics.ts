export const analyticsConfig = {
  // For GitHub Pages, we'll use a hardcoded ID 
  googleAnalyticsId: 'G-NCLW2RDMGR',
};

export const isAnalyticsEnabled = () => {
  return !!analyticsConfig.googleAnalyticsId;
};
