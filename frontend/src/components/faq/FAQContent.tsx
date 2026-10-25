"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      id: "started",
      questions: [
        {
          question: "How do I create a Tripto account?",
          answer: "Creating an account is easy! Click on the profile icon in the header, select 'Sign Up', and follow the prompts to enter your email and set a password. You'll receive a verification email to activate your account.",
        },
        {
          question: "Is Tripto free to use?",
          answer: "Yes, browsing and searching for stays on Tripto is completely free. You only pay for the actual bookings you make with our partner hotels.",
        },
        {
          question: "How do I search for the best deals?",
          answer: "Use our advanced search filters to sort by price, rating, and amenities. We also recommend checking the 'Deals for the Weekend' section on our home page for exclusive offers.",
        },
      ],
    },
    {
      category: "Bookings & Payments",
      id: "bookings",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) as well as popular digital wallets like Apple Pay, Google Pay, and PayPal.",
        },
        {
          question: "How do I modify an existing booking?",
          answer: "Go to your 'My Bookings' page, select the trip you wish to change, and click 'Modify Booking'. Please note that changes are subject to the hotel's availability and policy.",
        },
        {
          question: "Will I receive a confirmation email after booking?",
          answer: "Yes, immediately after a successful payment, a detailed confirmation voucher will be sent to your registered email address and saved in your account under 'My Bookings'.",
        },
      ],
    },
    {
      category: "Cancellations & Refunds",
      id: "refunds",
      questions: [
        {
          question: "How do I cancel my reservation?",
          answer: "You can cancel your booking through the 'My Bookings' section. Select your trip and click 'Cancel Reservation'. Be sure to check the refund policy associated with your booking.",
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are typically processed within 5-10 business days to your original payment method, depending on your bank's processing time.",
        },
        {
          question: "What happens if my hotel cancels my stay?",
          answer: "In the rare event that a hotel cancels your booking, we will provide a full refund or assist you in finding an alternative stay of equal or higher quality.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="flex flex-col gap-16">
      <div className="text-center space-y-6">
        <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary mb-2">
          <HelpCircle size={40} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to know about Tripto. Can't find the answer you're looking for?
           Our support team is just a click away.
        </p>

        <div className="relative max-w-xl mx-auto mt-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search for questions..."
            className="pl-10 py-6 rounded-full text-lg border-neutral-200 focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {searchQuery ? (
        <div className="space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map(cat => (
              <div key={cat.id} className="space-y-4">
                <h2 className="text-xl font-bold px-2">{cat.category}</h2>
                <Accordion type="single" collapsible={true} className="w-full">
                  {cat.questions.map((q, i) => (
                    <AccordionItem key={i} value={`q-${cat.id}-${i}`} className="border-neutral-100">
                      <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                        {q.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {q.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center py-20 space-y-4">
              <p className="text-muted-foreground text-lg">No results found for "{searchQuery}"</p>
              <Button variant="outline" className="rounded-full" onClick={() => setSearchQuery("")}>
                Clear search
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-12">
          {faqCategories.map(cat => (
            <div key={cat.id} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">{cat.category}</h2>
                <div className="h-px flex-1 bg-neutral-100"></div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {cat.questions.map((q, i) => (
                  <AccordionItem key={i} value={`q-${cat.id}-${i}`} className="border-neutral-100">
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      )}

      <div className="p-10 rounded-3xl bg-neutral-900 text-white text-center space-y-6">
        <h3 className="text-2xl font-bold">Still have questions?</h3>
        <p className="text-neutral-400 max-w-md mx-auto">
          Our friendly support team is available 24/7 to help you resolve any issues or answer your questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact-us">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-600 text-white px-8">
              Contact Support
            </Button>
          </Link>
          <Link href="/about-us">
            <Button size="lg" variant="outline" className="rounded-full border-neutral-700 text-white hover:bg-neutral-800 px-8">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
