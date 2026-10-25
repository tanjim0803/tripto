"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Column: Contact Info */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Get in touch</h1>
          <p className="text-muted-foreground text-lg">
            Have questions about your booking or need help planning your next adventure?
            Our travel experts are here to assist you 24/7.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary-50 text-primary">
              <Phone size={24} />
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Phone Support</p>
              <p className="text-muted-foreground text-sm">+1 (800) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary-50 text-primary">
              <Mail size={24} />
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Email Us</p>
              <p className="text-muted-foreground text-sm">support@tripto.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary-50 text-primary">
              <MapPin size={24} />
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Visit Our Office</p>
              <p className="text-muted-foreground text-sm">
                123 Travel Plaza, Suite 400<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-2xl bg-accent/30 space-y-3">
          <div className="flex items-center gap-2 font-semibold">
            <MessageSquare size={20} className="text-primary" />
            <h3>Live Chat</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Our average response time is less than 5 minutes. Start a chat now for instant help.
          </p>
          <Button variant="outline" className="w-fit">
            Start Chatting
          </Button>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="bg-background border rounded-3xl p-8 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="text-muted-foreground text-sm">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name</label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Input placeholder="How can we help you?" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              placeholder="Tell us more about your inquiry..."
              className="min-h-[150px]"
            />
          </div>

          <Button className="w-full py-6 text-lg font-medium">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
