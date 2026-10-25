"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronLeft, Download, Printer, Share2 } from "lucide-react";
import Link from "next/link";

export default function TripDetailsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 lg:p-12 space-y-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/profile"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={18} />
          Back to Profile
        </Link>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={16} />
            Download
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Printer size={16} />
            Print
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 size={16} />
            Share
          </Button>
        </div>
      </div>

      {/* Invoice Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Booking Invoice</h1>
          <p className="text-muted-foreground">ID: #173826</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 px-3 py-1 h-6 text-xs">
            Confirmed
          </Badge>
          <span className="text-sm text-muted-foreground">Issued on: 12 Mar 2021</span>
        </div>
      </div>

      {/* Invoice Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
        {/* Billed To */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Billed To</h3>
          <div className="space-y-1">
            <p className="font-semibold text-lg">Emmily Morgan</p>
            <p className="text-muted-foreground text-sm">123 Main Street, Spring</p>
            <p className="text-muted-foreground text-sm">em***an@gmail.com</p>
            <p className="text-muted-foreground text-sm">+34 000 000 000</p>
          </div>
        </div>

        {/* Hotel Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hotel Details</h3>
          <div className="space-y-1">
            <p className="font-semibold text-lg">Golden Tulip Hotel</p>
            <p className="text-muted-foreground text-sm">City Center, Luxury District</p>
            <p className="text-muted-foreground text-sm">Amsterdam, Netherlands</p>
            <p className="text-muted-foreground text-sm">contact@goldentulip.com</p>
          </div>
        </div>
      </div>

      {/* Reservation Table */}
      <div className="space-y-4">
        <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground uppercase tracking-wider pb-2 border-b">
          <span>Description</span>
          <span className="text-center">Dates</span>
          <span className="text-center">Guests</span>
          <span className="text-right">Amount</span>
        </div>

        <div className="grid grid-cols-4 py-4 border-b items-center">
          <div className="space-y-1">
            <p className="font-medium">Deluxe Suite Room</p>
            <p className="text-xs text-muted-foreground">Includes Breakfast & WiFi</p>
          </div>
          <div className="text-center text-sm">
            12 Mar 2021 - 24 Mar 2025
          </div>
          <div className="text-center text-sm">
            4 Adults
          </div>
          <div className="text-right font-medium">
            $1,250.00
          </div>
        </div>
      </div>

      {/* Totals Section */}
      <div className="flex justify-end pt-6">
        <div className="w-full max-w-xs space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$1,250.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Taxes (10%)</span>
            <span>$125.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold pt-3 border-t">
            <span>Total</span>
            <span className="text-primary">$1,375.00</span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="pt-12 text-center">
        <p className="text-sm text-muted-foreground italic">
          Thank you for booking with Tripto! We wish you a wonderful journey.
        </p>
      </div>
    </div>
  );
}
