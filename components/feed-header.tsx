"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, Settings } from "lucide-react"
import Link from "next/link"

interface FeedHeaderProps {
  userName: string
  userType: "Cuidador" | "Familiar"
  profileLink: string
}

export function FeedHeader({ userName, userType, profileLink }: FeedHeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                {getInitials(userName)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold text-foreground">{userName}</h2>
              <p className="text-sm text-muted-foreground">{userType}</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href={profileLink}>
                <Settings className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
