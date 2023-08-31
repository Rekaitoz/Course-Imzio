import { TablerIconsProps } from "@tabler/icons-react";

type SidebarRoute = {
  title: string;
  href: string;
  icon?: TablerIconsProps | React.FC<React.ComponentProps<"svg">> | string;
  type?: string;
  progress?: number;
  routes?: SidebarRoute[];
};

type SidebarSection = {
  title?: string;
  routes: SidebarRoute[];
};

export type SidebarNavigation = SidebarSection[];

export type Metadata = {
  page: number;
  limit: number;
  total: number;
  count: number;
  hasNext?: boolean;
  hasPrev?: boolean;
};
