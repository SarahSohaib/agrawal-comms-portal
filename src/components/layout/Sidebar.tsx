import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar,
  Briefcase,
  Heart,
  Megaphone,
  MessageSquare,
  Activity,
  Mail,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Members", href: "/members", icon: Users },
  { name: "Executives", href: "/executives", icon: UserCheck },
  { name: "Calendar & Events", href: "/calendar", icon: Calendar },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Matrimony", href: "/matrimony", icon: Heart },
  { name: "Events Management", href: "/events", icon: Megaphone },
  { name: "Advertising", href: "/advertising", icon: Megaphone },
  { name: "President's Messages", href: "/messages", icon: MessageSquare },
  { name: "Recent Activity", href: "/activity", icon: Activity },
  { name: "Newsletter", href: "/newsletter", icon: Mail },
];

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const location = useLocation();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-card border-r border-border shadow-medium transition-all duration-300 z-50",
      isOpen ? "w-64" : "w-16"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {isOpen && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="font-bold text-sm text-foreground">APCA</h1>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="hover:bg-accent"
          >
            {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift",
                isActive 
                  ? "bg-gradient-primary text-primary-foreground shadow-soft" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <item.icon size={18} className="flex-shrink-0" />
              {isOpen && (
                <span className="ml-3 truncate">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};