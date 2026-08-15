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
    href: "/",
  },
  {
    type: "link",
    label: "About Us",
    icon: Info,
    href: "/",
  },
  {
    type: "link",
    label: "Contact Us",
    icon: Contact,
    href: "/",
  },
  {
    type: "link",
    label: "Bookings",
    icon: NotebookPen,
    href: "/",
  },
  {
    type: "dropdown",
    label: "Pages",
    icon: LayoutPanelLeft,
    items: [
      { label: "Privacy Policy", icon: ShieldLock, href: "#" },
      { label: "Refund Policy", icon: BanknoteArrowDown, href: "#" },
      { label: "Terms & Condition", icon: Handshake, href: "#" },
      { label: "Cookie Policy", icon: Cookie, href: "#" },
      { label: "FAQs", icon: TableOfContents, href: "#" },
    ],
  },
];

export default NavData;
