import React from "react";
import { User, CreditCard, Plane, Heart, Headphones, MessageSquare, Settings, LogOut, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  icon: React.ElementType;
  value: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Personal Data", icon: User, value: "personal-data" },
  { label: "Payment Account", icon: CreditCard, value: "payment-account" },
  { label: "Trips", icon: Plane, value: "trips" },
  { label: "Wish Lists", icon: Heart, value: "wish-lists" },
  { label: "Support", icon: Headphones, value: "support" },
  { label: "Reviews", icon: MessageSquare, value: "reviews" },
  { label: "Settings", icon: Settings, value: "settings" },
];

interface ProfileSidebarProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export default function ProfileSidebar({ activeTab, setActiveTab }: ProfileSidebarProps) {
  const isTripsOpen = activeTab === "trips";

  return (
    <aside className="w-64 flex flex-col gap-6 py-6 border-r h-full bg-background">
      {/* User Profile Header */}
      <div className="px-4 flex items-center gap-3">
        <div className="relative">
          <img
            src="https://images.shadcnspace.com/assets/profiles/user-11.jpg"
            alt="User"
            className="size-12 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Emmily Morgan</span>
          <span className="text-xs text-muted-foreground">Customer Operations</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex flex-col gap-1 px-2">
        {NAV_ITEMS.map((item) => (
          <div key={item.value} className="flex flex-col">
            <button
              onClick={() => setActiveTab(item.value)}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                activeTab === item.value
                  ? "bg-primary-50 text-primary font-medium"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={cn(activeTab === item.value ? "text-primary" : "text-muted-foreground")} />
                <span>{item.label}</span>
              </div>
              {item.value === "trips" && (
                isTripsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />
              )}
            </button>

            {/* Trips Sub-menu */}
            {item.value === "trips" && isTripsOpen && (
              <div className="ml-9 mt-1 flex flex-col gap-1">
                {["All", "Active", "Completed", "Canceled"].map((sub) => (
                  <button
                    key={sub}
                    className={cn(
                      "text-left px-3 py-1.5 text-xs rounded-md transition-colors",
                      sub === "Active"
                        ? "text-primary font-medium bg-primary-50"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto px-2">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
