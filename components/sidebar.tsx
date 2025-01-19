"use client";

import {
  Bot,
  LayoutDashboard,
  Network,
  PackageIcon,
  Rocket,
  Settings,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Workflows", href: "/workflows", icon: Network },
  { name: "Connections", href: "/connections", icon: Workflow },
  { name: "AI Assistant", href: "/ai-assistant", icon: Bot },
  { name: "Opportunities", href: "/opportunities", icon: Target },
  { name: "Pipelines", href: "/pipelines", icon: PackageIcon },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 bg-white dark:bg-stone-950 h-screen">
      <div className="flex items-center gap-2 justify-center font-bold text-2xl w-full">
        <Rocket />
        Lead CRM
      </div>

      <div className="mx-2">
        <Separator />
      </div>

      <div className="space-y-1 px-3 py-2">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={`w-full justify-start my-0.5 
                  ${
                    pathname === item.href ? "bg-gray-200 dark:bg-zinc-800" : ""
                  } 
                  hover:bg-gray-200 dark:hover:bg-zinc-800`}
            >
              <item.icon className="mr-2 h-4 w-4 text-zinc-800 dark:text-zinc-300" />
              <span className="text-zinc-900 dark:text-zinc-100">
                {item.name}
              </span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
