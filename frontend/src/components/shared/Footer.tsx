import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 border-t border-neutral-800">
      <div className="container-main grid grid-cols-1 md:grid-cols-5 gap-8 my-0">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-white">tripto</span>
            <span className="h-2 w-2 rounded-full bg-primary-500 inline-block" />
          </div>
          <p className="text-sm text-neutral-400 max-w-sm mb-6">
            Your trusted partner for memorable stays, unique destinations, and
            effortless bookings worldwide.
          </p>
          <div className="flex gap-4">
            <Button
              size="sm"
              variant="outline"
              className="text-white border-neutral-700 bg-neutral-800"
            >
              App Store
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-white border-neutral-700 bg-neutral-800"
            >
              Google Play
            </Button>
          </div>
        </div>

        <div>
          <h6 className="text-white text-base mb-4 font-semibold">Support</h6>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="#" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Safety Information
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Cancellation options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Report issue
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-white text-base mb-4 font-semibold">Company</h6>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="#" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Press
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-white text-base mb-4 font-semibold">
            Work With Us
          </h6>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="#" className="hover:text-white">
                Become a Host
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Promotions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-main border-t border-neutral-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
        <p>© 2026 Tripto Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-neutral-300">
            Privacy
          </Link>
          <Link href="#" className="hover:text-neutral-300">
            Terms
          </Link>
          <Link href="#" className="hover:text-neutral-300">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
