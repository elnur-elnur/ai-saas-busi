"use client";

import { cn } from "@/lib/utils";
import {
  BotIcon,
  LayoutDashboard,
  MessageSquare,
  PersonStanding,
  Search,
  Settings,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    id: 1,
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-emerald-500",
  },
  {
    id: 2,
    label: "HR",
    icon: PersonStanding,
    href: "/hr",
    color: "text-orange-700",
  },
  {
    id: 3,
    label: "Telegram Bot",
    icon: BotIcon,
    href: "/tg-bot",
    color: "text-sky-500",
  },
  {
    id: 4,
    label: "Vacancy",
    icon: Search,
    href: "/vacancy",
    color: "text-pink-700",
  },
  {
    id: 5,
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    id: 6,
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex pl-3 mb-14">
          <h1 className={cn("text-2xl font-bold", montserrat)}>AI Saas</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.id}
              className={cn(
                "flex justify-start p-3 w-full text-sm group font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
