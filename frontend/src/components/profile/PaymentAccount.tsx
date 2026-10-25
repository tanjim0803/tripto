"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Gift } from "lucide-react";

export default function PaymentAccount() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Payment methods</h1>
        <p className="text-muted-foreground text-sm">
          Securely add or remove payment methods to make it easier when you book.
        </p>
      </div>

      {/* Payment Methods Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-6 border-b">
          <div className="space-y-1">
            <h2 className="font-semibold">Payment methods</h2>
            <p className="text-muted-foreground text-sm">
              Add a payment method using our secure payment system, then start planning your next trip.
            </p>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto font-medium">
            Add payments method
          </Button>
        </div>

        {/* Tripto Gift Credit Section */}
        <div className="flex items-center justify-between pb-6 border-b">
          <div className="space-y-1">
            <h2 className="font-semibold">Tripto gift credit</h2>
            <p className="text-muted-foreground text-sm">
              Add gift credits to your Tripto account to enhance your travel experience.
            </p>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto font-medium">
            Add gift card
          </Button>
        </div>
      </section>

      {/* Coupons Section */}
      <section className="space-y-6">
        <h2 className="font-semibold text-lg">Coupons</h2>

        <div className="flex items-center justify-between pb-4 border-b">
          <span className="text-sm text-muted-foreground">Your copons</span>
          <span className="text-sm font-medium">0</span>
        </div>

        <Button variant="link" className="text-primary p-0 h-auto font-medium">
          Add copons
        </Button>
      </section>
    </div>
  );
}
