import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface ModuleItem {
  title: string;
  subtitle: string;
  value: string;
  color: string;
  icon: LucideIcon;
}

export interface StatisticItem {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface UserInfo {
  name: string;
  role: string;
  avatar?: string;
}

export interface DashboardSummary {
  production: number;
  orders: number;
  inventory: number;
  defectRate: number;
}

export interface Notice {
  id: number;
  title: string;
  createdAt: string;
}

export interface QuickMenuItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface ProductionStatus {
  id: number;
  line: string;
  product: string;
  quantity: number;
  status: "RUNNING" | "STOP" | "WAIT";
}