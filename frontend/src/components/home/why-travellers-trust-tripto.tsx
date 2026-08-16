import { ShieldCheck, Tag, Zap } from "lucide-react";

export default function WhyTravellersTrustTripto() {
  return (
    <section className="container-main">
      <div className="text-center mb-10">
        <h2>Why Travellers Trust Tripto</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h5>100% Reliable</h5>
          <p className="text-neutral-500 mt-2">
            Verified reviews and 24/7 customer assistance worldwide.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mb-4">
            <Zap className="w-7 h-7" />
          </div>
          <h5>Instant Booking</h5>
          <p className="text-neutral-500 mt-2">
            Fast processing with instant confirmation straight to your inbox.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl">
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mb-4">
            <Tag className="w-7 h-7" />
          </div>
          <h5>Best Prices</h5>
          <p className="text-neutral-500 mt-2">
            No hidden fees and transparent pricing model guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
