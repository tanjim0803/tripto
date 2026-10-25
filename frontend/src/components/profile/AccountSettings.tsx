"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Lock, User, Eye, EyeOff, Globe, Languages } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CURRENCIES = [
  { code: "USD", name: "United States Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
];

const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
];

export default function AccountSettings() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="space-y-10 max-w-3xl">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account security and notification preferences.
        </p>
      </div>

      {/* Profile Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <User size={20} />
          <h2>Profile Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-2xl bg-background">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <Input defaultValue="Emmily Morgan" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input defaultValue="em***an@gmail.com" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input defaultValue="+34 000 000 000" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Timezone</label>
            <Select defaultValue="utc">
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC (GMT +0:00)</SelectItem>
                <SelectItem value="est">EST (GMT -5:00)</SelectItem>
                <SelectItem value="pst">PST (GMT -8:00)</SelectItem>
                <SelectItem value="cet">CET (GMT +1:00)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Localization Section (Currency & Language) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Globe size={20} />
          <h2>Localization</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Currency */}
          <div className="p-6 border rounded-2xl bg-background flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Preferred Currency</p>
              <p className="text-xs text-muted-foreground">Prices displayed in your currency.</p>
            </div>

            <Dialog>
              <DialogTrigger>
                <div className="inline-block">
                  <Button variant="outline" className="gap-2 min-w-[120px]">
                    <span className="font-bold">{selectedCurrency}</span>
                    <span className="text-muted-foreground text-xs">Change</span>
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select Currency</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-2 py-4">
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => setSelectedCurrency(curr.code)}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        selectedCurrency === curr.code
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:bg-accent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold">{curr.symbol}</span>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium">{curr.code}</span>
                          <span className="text-xs text-muted-foreground">{curr.name}</span>
                        </div>
                      </div>
                      {selectedCurrency === curr.code && (
                        <div className="size-2 rounded-full bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Language */}
          <div className="p-6 border rounded-2xl bg-background flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Preferred Language</p>
              <p className="text-xs text-muted-foreground">Content displayed in your language.</p>
            </div>

            <Dialog>
              <DialogTrigger>
                <div className="inline-block">
                  <Button variant="outline" className="gap-2 min-w-[120px]">
                    <span className="font-bold">{LANGUAGES.find(l => l.code === selectedLanguage)?.nativeName}</span>
                    <span className="text-muted-foreground text-xs">Change</span>
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select Language</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-2 py-4">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        selectedLanguage === lang.code
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:bg-accent"
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{lang.nativeName}</span>
                        <span className="text-xs text-muted-foreground">{lang.name}</span>
                      </div>
                      {selectedLanguage === lang.code && (
                        <div className="size-2 rounded-full bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Lock size={20} />
          <h2>Security & Password</h2>
        </div>
        <div className="space-y-6 p-6 border rounded-2xl bg-background">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Password</label>
              <Input type="password" placeholder="Enter current password" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">New Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm New Password</label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
          </div>
          <Button variant="outline" className="w-fit">
            Update Password
          </Button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Bell size={20} />
          <h2>Notifications</h2>
        </div>
        <div className="p-6 border rounded-2xl bg-background space-y-4">
          {[
            { label: "Email Notifications", desc: "Receive updates and alerts via email" },
            { label: "Push Notifications", desc: "Get instant notifications on your device" },
            { label: "Marketing Emails", desc: "Get latest deals and destination tips" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 first:pt-0 last:pb-0 border-b last:border-0">
              <div className="space-y-1">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <input
                type="checkbox"
                className="size-4 accent-primary-500"
                defaultChecked={idx !== 2}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end gap-3 pt-6 border-t">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-primary-500 text-white px-8">Save all changes</Button>
      </div>
    </div>
  );
}
