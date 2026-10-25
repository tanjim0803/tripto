import {
  Phone,
  MessageSquare,
  Notebook,
  Calendar,
  Mail,
  LayoutPanelLeft,
  Home,
  MapPinHouse,
  Info,
  Contact,
  NotebookPen,
  ShieldLock,
  BanknoteArrowDown,
  Handshake,
  Cookie,
  TableOfContents,
} from "lucide-react";

const NavData: object[] = [
  {
    type: "link",
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    type: "link",
    label: "Recommended Places",
    icon: MapPinHouse,
    href: "/recommended-places",
  },
  {
    type: "link",
    label: "About Us",
    icon: Info,
    href: "/about-us",
  },
  {
    type: "link",
    label: "Contact Us",
    icon: Contact,
    href: "/contact-us",
  },
  {
    type: "link",
    label: "Bookings",
    icon: NotebookPen,
    href: "/bookings",
  },
  {
    type: "dropdown",
    label: "Pages",
    icon: LayoutPanelLeft,
    items: [
      { label: "Privacy Policy", icon: ShieldLock, href: "/privacy-policy" },
      { label: "Refund Policy", icon: BanknoteArrowDown, href: "/refund-policy" },
      { label: "Terms & Condition", icon: Handshake, href: "/terms-and-conditions" },
      { label: "Cookie Policy", icon: Cookie, href: "/cookie-policy" },
      { label: "FAQs", icon: TableOfContents, href: "/faq" },
    ],
  },
];

export default NavData;
