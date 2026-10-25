import React from "react";
import { Cookie, ShieldCheck, Settings, Trash2 } from "lucide-react";

export default function CookiePolicyContent() {
  const cookieTypes = [
    {
      title: "Strictly Necessary Cookies",
      description: "These cookies are essential for the website to function. They enable basic features such as page navigation and access to secure areas of the website.",
      impact: "Essential",
      icon: <ShieldCheck className="text-primary" size={24} />,
      examples: ["Session IDs", "Authentication tokens", "CSRF protection"],
    },
    {
      title: "Performance & Analytics Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      impact: "Optional",
      icon: <Settings className="text-primary" size={24} />,
      examples: ["Google Analytics", "Page load times", "User journey tracking"],
    },
    {
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization, such as remembering your language preference.",
      impact: "Optional",
      icon: <Cookie className="text-primary" size={24} />,
      examples: ["Language settings", "Region preferences", "Saved searches"],
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="text-center space-y-4">
        <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary mb-2">
          <Cookie size={40} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We use cookies to enhance your browsing experience, serve personalized content,
          and analyze our traffic to make Tripto even better.
        </p>
        <p className="text-sm text-neutral-400">Last Updated: October 25, 2026</p>
      </div>

      <div className="grid gap-10">
        <div className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What are cookies?</h2>
          <p className="text-neutral-600 leading-relaxed">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website.
            They are widely used to make websites work, or work more efficiently, as well as to provide
            information to the owners of the site.
          </p>
        </div>

        <div className="grid gap-6">
          <h2 className="text-2xl font-bold text-center mb-2">Cookies We Use</h2>
          <div className="grid gap-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white border border-neutral-100 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-neutral-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{type.title}</h3>
                  </div>
                  <span className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full",
                    type.impact === "Essential" ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-600"
                  )}>
                    {type.impact}
                  </span>
                </div>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex, i) => (
                    <span key={i} className="text-xs bg-neutral-50 text-neutral-500 px-3 py-1 rounded-md border border-neutral-100">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Trash2 className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Managing Your Preferences</h2>
          </div>
          <p className="text-neutral-600 leading-relaxed mb-6">
            You can control and manage cookies through your browser settings. Most browsers allow you to
            block cookies or delete them entirely. However, please note that disabling essential cookies
            may affect the functionality of Tripto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm">
              <strong className="block mb-1">Chrome</strong>
              Settings &gt; Privacy and security &gt; Cookies and other site data
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm">
              <strong className="block mb-1">Safari</strong>
              Preferences &gt; Privacy &gt; Block all cookies
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-neutral-900 text-white text-center space-y-4">
        <h3 className="text-xl font-semibold">Questions about your data?</h3>
        <p className="text-neutral-400 max-w-md mx-auto">
          We are committed to transparency. Contact our privacy team for more details.
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-full transition-all"
        >
          Contact Privacy Team
        </a>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
