// ----------------------------------------------------------------------

const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};

const API_ROOT = "/";

// ----------------------------------------------------------------------

export const API_PATHS = {
  root: API_ROOT,
  locationStats: path(API_ROOT, "163bffea-1a02-46a4-874d-fa29863eb8c0"),
  userTrafficStats: path(API_ROOT, "949b4eed-4aa3-4f0f-8709-6ae340d4f46a"),
  statistics: path(API_ROOT, "99868f9e-0d39-4946-bb3a-27851fed4366"),
  conversionRate: path(API_ROOT, "4a839856-2249-4ff0-87a5-04c0b66b7325"),
  websiteAnalytics: path(API_ROOT, "e8ba13b5-4fc4-4dad-b242-fe6b5bc3b645"),
};
