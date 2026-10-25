"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import PersonalDataForm from "@/components/profile/PersonalDataForm";
import PaymentAccount from "@/components/profile/PaymentAccount";
import TripsEmptyState from "@/components/profile/TripsEmptyState";
import ActiveReservations from "@/components/profile/ActiveReservations";
import WishListEmptyState from "@/components/profile/WishListEmptyState";
import WishListActive from "@/components/profile/WishListActive";
import ReviewEmptyState from "@/components/profile/ReviewEmptyState";
import ReviewActive from "@/components/profile/ReviewActive";
import AccountSettings from "@/components/profile/AccountSettings";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal-data");
  const [tripsFilter, setTripsFilter] = useState("active");
  const [hasWishList, setHasWishList] = useState(true); // Simulated state
  const [hasReviews, setHasReviews] = useState(true); // Simulated state

  return (
    <div className="flex min-h-screen bg-background">
      <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 lg:p-12 max-w-6xl mx-auto w-full">
        {activeTab === "personal-data" && <PersonalDataForm />}
        {activeTab === "payment-account" && <PaymentAccount />}

        {activeTab === "trips" && (
          <>
            {/* Trips Sub-navigation (simulated filter) */}
            <div className="flex items-center gap-4 mb-8 border-b pb-2">
              {["All", "Active", "Completed", "Canceled"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTripsFilter(filter.toLowerCase())}
                  className={cn(
                    "text-sm px-3 py-1 transition-colors",
                    tripsFilter === filter.toLowerCase()
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            {tripsFilter === "active" ? <ActiveReservations /> : <TripsEmptyState />}
          </>
        )}

        {activeTab === "wish-lists" && (
          hasWishList ? <WishListActive /> : <WishListEmptyState />
        )}

        {activeTab === "reviews" && (
          hasReviews ? <ReviewActive /> : <ReviewEmptyState />
        )}

        {activeTab === "settings" && <AccountSettings />}

        {activeTab !== "personal-data" && activeTab !== "payment-account" && activeTab !== "trips" && activeTab !== "wish-lists" && activeTab !== "reviews" && activeTab !== "settings" && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-muted-foreground">The {activeTab.replace("-", " ")} section is under construction.</p>
          </div>
        )}
      </main>
    </div>
  );
}
