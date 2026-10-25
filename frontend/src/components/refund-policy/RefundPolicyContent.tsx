import React from "react";
import { RotateCcw, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function RefundPolicyContent() {
  const policyTiers = [
    {
      title: "Full Refund",
      condition: "Cancellation 14+ days before check-in",
      percentage: "100%",
      icon: <CheckCircle2 className="text-green-500" size={24} />,
      description: "You are eligible for a full refund of the booking amount, minus a small processing fee.",
    },
    {
      title: "Partial Refund",
      condition: "Cancellation 7-13 days before check-in",
      percentage: "50%",
      icon: <Clock className="text-orange-500" size={24} />,
      description: "A 50% refund of the total booking amount will be issued to the original payment method.",
    },
    {
      title: "No Refund",
      condition: "Cancellation less than 7 days before check-in",
      percentage: "0%",
      icon: <AlertCircle className="text-red-500" size={24} />,
      description: "Cancellations made within 7 days of the check-in date are non-refundable.",
    },
  ];

  const faq = [
    {
      question: "How long does the refund take to process?",
      answer: "Refunds are typically processed within 5-10 business days, depending on your bank or payment provider.",
    },
    {
      question: "Can I get a refund for a 'Non-Refundable' rate?",
      answer: "Bookings made under a Non-Refundable rate are generally not eligible for refunds unless required by law or provided by the hotel.",
    },
    {
      question: "What happens if the hotel cancels my booking?",
      answer: "If a hotel cancels your reservation, you will receive a 100% refund regardless of the timing, or we will help you find an alternative stay.",
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <div className="text-center space-y-4">
        <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary mb-2">
          <RotateCcw size={40} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Refund Policy</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We strive to make your travel planning flexible. Our refund policy is designed
          to be fair to both our travelers and our hotel partners.
        </p>
        <p className="text-sm text-neutral-400">Last Updated: October 25, 2026</p>
      </div>

      <div className="grid gap-6">
        <h2 className="text-2xl font-bold text-center mb-2">Cancellation Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {policyTiers.map((tier, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white border border-neutral-100 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-neutral-50 rounded-full">
                {tier.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
              <p className="text-primary font-bold text-3xl mb-3">{tier.percentage}</p>
              <p className="text-sm font-semibold text-neutral-900 mb-3">{tier.condition}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid gap-4">
          {faq.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
              <h3 className="font-semibold text-neutral-900 mb-2">{item.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-neutral-900 text-white text-center space-y-4">
        <h3 className="text-xl font-semibold">Need help with a refund?</h3>
        <p className="text-neutral-400 max-w-md mx-auto">
          If you have a special circumstance or a question about a specific booking,
          our support team is ready to help.
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
