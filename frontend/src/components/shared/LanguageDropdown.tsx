"use client";

import { useState, type ReactElement } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import usFlag from "../../../public/assets/flags/united-states.webp";
import bangladeshFlag from "../../../public/assets/flags/bangladesh.webp";
import type { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  trigger: ReactElement;
  defaultOpen?: boolean;
  align?: "start" | "center" | "end";
};

type Language = {
  value: string;
  label: string;
  icon: StaticImageData;
};

const LANGUAGES: Language[] = [
  {
    value: "english",
    label: "English",
    icon: usFlag,
  },
  {
    value: "chinese",
    label: "বাংলা",
    icon: bangladeshFlag,
  },
];

const itemClass =
  "cursor-pointer gap-2 pl-2 text-sm data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden";

const LanguageDropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
  const [language, setLanguage] = useState(LANGUAGES[0].value);

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger render={trigger} />

      <DropdownMenuContent className="w-50" align={align}>
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={setLanguage}
          className="flex flex-col gap-2"
        >
          {LANGUAGES.map(({ value, label, icon }) => (
            <DropdownMenuRadioItem
              key={value}
              value={value}
              className={itemClass}
            >
              <Image
                src={icon}
                alt={label}
                width={16}
                height={16}
                className="rounded-full"
              />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
