"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Calendar, Globe, MapPin } from "lucide-react";

export default function PersonalDataForm() {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="https://images.shadcnspace.com/assets/profiles/user-11.jpg"
              alt="Profile"
              className="size-24 rounded-full object-cover ring-4 ring-background shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <p className="text-muted-foreground text-sm">Real-time information and activities of your prototype.</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.828 2.828 0 1 1 4 2.37" />
            <path d="M17 3l-5 5" />
            <path d="M12 8l-5-5" />
            <path d="M12 8l-5 5" />
            <path d="M12 8l5 5" />
            <path d="M12 8l5-5" />
          </svg>
          Edit
        </Button>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" defaultValue="Emmily" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" defaultValue="Morgan" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <rect width="20" height="16" x="2" y="4" rx="2" />
                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
               </svg>
            </div>
            <Input className="pl-10" defaultValue="em***an@gmail.com" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <div className="relative flex items-center">
            <div className="absolute left-3 flex items-center gap-2 pointer-events-none">
               <img src="https://flagcdn.com/w20/us.png" alt="US" className="size-4" />
               <span className="text-sm text-muted-foreground">(+34)</span>
            </div>
            <Input className="pl-16" defaultValue="000 000 000" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Gender</label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Select defaultValue="gender">
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Birthday</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" type="date" defaultValue="1997-06-17" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Country</label>
          <div className="relative">
            <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Select defaultValue="us">
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="United States" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Zip Code</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" defaultValue="90210" />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Address</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" defaultValue="123 Main Street, Spring" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t">
        <Button variant="outline">Discard</Button>
        <Button className="bg-primary-500 text-white px-6">Save changes</Button>
      </div>
    </div>
  );
}
