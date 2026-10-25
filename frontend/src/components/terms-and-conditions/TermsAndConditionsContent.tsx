import React from "react";
import { Scale, UserCheck, Globe, AlertTriangle, FileCheck } from "lucide-react";

export default function TermsAndConditionsContent() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <FileCheck className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            By accessing and using the Tripto platform, you agree to be bound by these Terms and Conditions,
            all applicable laws and regulations, and any agreements you may have entered into with Tripto.
          </p>
          <p className="text-muted-foreground italic">
            If you do not agree with any part of these terms, you are prohibited from using or accessing
            this site.
          </p>
        </div>
      ),
    },
    {
      id: "user-accounts",
      title: "2. User Accounts",
      icon: <UserCheck className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            To access certain features of Tripto, you may be required to create an account. You agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Provide accurate, current, and complete information during the registration process.</li>
            <li>Maintain the security of your password and account.</li>
            <li>Promptly notify Tripto of any unauthorized use of your account.</li>
            <li>Accept responsibility for all activities that occur under your account.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "bookings",
      title: "3. Bookings & Payments",
      icon: <Globe className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            Tripto acts as an intermediary between you and the hotel/property providers.
            When you make a booking:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>You agree to pay the total amount specified at the time of booking.</li>
            <li>Payment is processed through secure third-party gateways.</li>
            <li>Tripto is not responsible for the actual provision of the stay; that is the responsibility of the property provider.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "restrictions",
      title: "4. Prohibited Conduct",
      icon: <AlertTriangle className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            You agree not to use Tripto for any purpose that is unlawful or prohibited by these terms.
            You shall not:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Attempt to interfere with the proper working of the platform.</li>
            <li>Use any automated system (bots, spiders) to scrape data from Tripto.</li>
            <li>Post misleading, fraudulent, or offensive content in reviews.</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation with Tripto.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "liability",
      title: "5. Limitation of Liability",
      icon: <Scale className="text-primary" size={24} />,
      content: (
        <div className="space-y-4">
          <p>
            Tripto shall not be liable for any direct, indirect, incidental, or consequential damages
            resulting from the use or inability to use the service, including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Service interruptions or technical failures.</li>
            <li>Errors or omissions in the property listings.</li>
            <li>Any dispute between the user and the property provider.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="text-center space-y-4">
        <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary mb-2">
          <Scale size={40} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Terms & Conditions</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Our terms ensure a safe, fair, and transparent environment for all
          travelers and partners within the Tripto ecosystem.
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
        <h3 className="text-xl font-semibold">Need legal clarification?</h3>
        <p className="text-neutral-400 max-w-md mx-auto">
          If you have questions about our terms, our legal team is available to assist you.
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-full transition-all"
        >
          Contact Legal Support
        </a>
      </div>
    </div>
  );
}
