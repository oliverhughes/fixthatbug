export type BsBreakpoints = "xs" | "sm" | "md" | "lg" | "xl";

export interface Event {
  type: string;
  key: string;
}

export interface AppDrawerProps {
  drawerOpen: boolean;
  drawerToggle: Function;
}

export interface DisplayMyIpProps {
  ipv4: string;
  ipv6: string;
  handleRefresh: Function;
}

export interface HeaderProps {
  title: string;
  description?: string;
  keywords?: string;
}

export interface LayoutProps {
  children: JSX.Element;
  contentWidth: BsBreakpoints;
  showNav: boolean;
  title: string;
  description: string;
  keywords: string;
}

export interface NavbarProps {
  drawerToggle: Function;
  title: string;
}
