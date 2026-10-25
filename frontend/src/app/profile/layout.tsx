import React from "react";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <ProfileSidebar />
      <main className="flex-1 p-8 lg:p-12 max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
