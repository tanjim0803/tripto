"use client";

import React from "react";
import ReviewActive from "@/components/profile/ReviewActive";
import ReviewEmptyState from "@/components/profile/ReviewEmptyState";

export default function ReviewsPage() {
  const hasReviews = true; // Simulated state

  return hasReviews ? <ReviewActive /> : <ReviewEmptyState />;
}
