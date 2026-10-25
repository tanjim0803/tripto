"use client";

import React from "react";
import WishListActive from "@/components/profile/WishListActive";
import WishListEmptyState from "@/components/profile/WishListEmptyState";

export default function WishListPage() {
  const hasWishList = true; // Simulated state

  return hasWishList ? <WishListActive /> : <WishListEmptyState />;
}
