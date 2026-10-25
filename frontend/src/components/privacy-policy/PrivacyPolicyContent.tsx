import React from "react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyContent() {
  const sections = [
    {
      id: "collection",
      title: "1. Information We Collect",
      icon: <Eye className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            To provide you with the best travel experience, Tripto collects information that you provide
            directly to us, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong>Account Information:</strong> Name, email address, phone number, and password.</li>
            <li><strong>Profile Details:</strong> Preferences, travel history, and wish lists.</li>
            <li><strong>Payment Information:</strong> Encrypted payment details processed through secure third-party gateways.</li>
            <li><strong>Booking Details:</strong> Dates of travel, guest counts, and special requests.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "usage",
      title: "2. How We Use Your Information",
      icon: <FileText className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>To manage your bookings and reservations.</li>
            <li>To personalize your travel recommendations and search results.</li>
            <li>To communicate important updates regarding your trips.</li>
            <li>To improve our platform's functionality and user experience.</li>
            <li>To prevent fraudulent activities and ensure the security of our users.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "protection",
      title: "3. Data Protection & Security",
      icon: <Lock className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            We implement industry-standard security measures to protect your data from unauthorized
            access, alteration, or destruction:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong>Encryption:</strong> All sensitive data is encrypted using SSL/TLS protocols.</li>
            <li><strong>Access Control:</strong> We limit data access to only those employees who require it to perform their jobs.</li>
            <li><strong>Regular Audits:</strong> We conduct periodic security reviews to identify and fix vulnerabilities.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "rights",
      title: "4. Your Privacy Rights",
      icon: <ShieldCheck className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> Request the deletion of your account and associated data.</li>
            <li><strong>Portability:</strong> Request the transfer of your data to another service provider.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="text-center space-y-4">
        <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary mb-2">
          <ShieldCheck size={40} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Your privacy is paramount. This policy explains how Tripto handles your information
          to ensure a safe and personalized travel experience.
        </p>
        <p className="text-sm text-neutral-400">Last Updated: October 25, 2026</p>
      </div>

      <div className="grid gap-10">
        {sections.map((section) => (
          <div key={section.id} className="group p-8 rounded-3xl bg-white border border-neutral-100 hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-neutral-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
            </div>
            <div className="text-neutral-600 leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-neutral-900 text-white text-center space-y-4">
        <h3 className="text-xl font-semibold">Have questions about your privacy?</h3>
        <p className="text-neutral-400 max-w-md mx-auto">
          Our data protection team is here to help. Reach out to us for any clarification.
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-full transition-all"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
