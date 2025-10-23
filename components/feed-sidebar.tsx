"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogOut, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItem {
  href: string
  icon: LucideIcon
  label: string
  active?: boolean
}

interface FeedSidebarProps {
  menuItems: MenuItem[]
  statsContent?: React.ReactNode
}

export function FeedSidebar({ menuItems, statsContent }: FeedSidebarProps) {
  return (
    <>
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:bg-card lg:border-r lg:border-border lg:z-40">
        <div className="flex-1 overflow-y-auto py-6 px-4">
          {/* Logo/Brand */}
          <div className="mb-8 px-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <img src="/logo-connectcare.png" alt="VIRLA" className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg text-foreground">VIRLA</span>
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Stats Content */}
          {statsContent && <div className="mt-8 px-2">{statsContent}</div>}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            asChild
          >
            <Link href="/">
              <LogOut className="w-5 h-5 mr-3" />
              Sair
            </Link>
          </Button>
        </div>
      </aside>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-pb">
        <div className="flex items-center justify-around px-2 py-3">
          {menuItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-xl transition-colors min-w-[60px]",
                item.active ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
          <Link
            href="/"
            className="flex flex-col items-center gap-1 p-2 rounded-xl transition-colors min-w-[60px] text-destructive"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-xs font-medium">Sair</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
