export type FooterRouteItem = {
  href: string;
  name: string;
  external?: boolean;
};

export type FooterRouteSection = {
  label: string;
  items: FooterRouteItem[];
};