import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="container-main mb-20">
      <div className="bg-neutral-50 rounded-3xl p-10 text-center relative overflow-hidden">
        <Quote className="w-12 h-12 text-primary-200 absolute top-6 left-6 rotate-180" />
        <Quote className="w-12 h-12 text-primary-200 absolute bottom-6 right-6" />

        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
            <Image
              src="/placeholder.svg"
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-lg md:text-xl font-medium text-neutral-800 mb-6 italic">
            &ldquo;The most smooth booking experience I&apos;ve ever had for
            family vacations. Great choices and clear pricing all the way
            through!&rdquo;
          </p>
          <h6 className="font-semibold text-neutral-900">Oliver Smith</h6>
          <span className="text-sm text-neutral-400 mt-1">
            Travel Enthusiast
          </span>
        </div>
      </div>
    </section>
  );
}
