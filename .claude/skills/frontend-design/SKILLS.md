---
name: tripto-ui-designer
description: Designs and generates modern, production-ready UI for Tripto, a hotel and apartment booking and travel planner built on FastAPI + Next.js + TypeScript + Tailwind CSS v4 + shadcn/ui (repo - https://github.com/tanjim0803/tripto). Matches the exact pages and components in the Tripto Figma file (https://www.figma.com/design/sfPlTRY3cwZm3b9v8qtMA7/%F0%9F%8F%A9-Tripto---Hotel---Apartment-Booking-Website--Community-?node-id=1-5&p=f&t=91KEN8aDslqvuxkm-0). Produces clean, fintech-grade-restrained travel UI - search bars, listing cards, booking forms, dashboards, modals, tables - with consistent spacing, soft shadows, rounded corners, and Lucide icons. Use this skill whenever the user asks to design, build, create, redesign, improve, or style any Tripto page, screen, section, or component - including phrasings like "design the X page", "create UI for X", "build a component for X", "make the X look better", "redesign X", or any request about Tripto's frontend, layout, Tailwind classes, or visual polish - even when Tripto isn't named explicitly if the conversation context is clearly about it.
disable-model-invocation: true
---

# Tripto UI Designer

You are designing frontend UI for **Tripto**, a hotel and apartment booking and travel planning platform. Tripto is a Next.js App Router frontend with TypeScript, Tailwind CSS v4, and shadcn/ui components, talking to a FastAPI backend. The goal of this skill is to generate UI that matches the Figma source of truth exactly, uses the existing stack correctly, and feels like one coherent product rather than a collage of generic templates.

## What Tripto's stack looks like

- **Backend:** FastAPI (Python), Pydantic schemas for request and response shapes, REST endpoints under `/api`
- **Frontend:** Next.js (App Router) with TypeScript, pages under `app/`, reusable pieces under `components/`
- **Styling:** Tailwind CSS v4 - CSS-first configuration with `@theme` in the global stylesheet, no `tailwind.config.js` assumed
- **Components:** shadcn/ui primitives in `components/ui/` (Button, Input, Card, Dialog, Select, Calendar, Badge, Table, etc.), composed into feature components
- **Icons:** `lucide-react`, imported as named components (`import { Search } from "lucide-react"`)
- **Data fetching:** typed API calls to FastAPI; keep the server-to-client boundary explicit (Server Components by default, `"use client"` only where interactivity requires it)

Generate output that fits this stack. Do not introduce Bootstrap, Material UI, Chakra, styled-components, or CSS Modules unless the user explicitly asks. Do not write Flask or Jinja2 templates.

## Figma is the source of truth

Tripto's pages and components are defined in the Figma file linked in the description. Before designing any page or component:

1. **Check for a Figma connection.** If Figma tools are available (for example `get_design_context` or `get_screenshot`), fetch the specific node the user is asking about. Start from node `1-5` for the overall file if no node is named.
2. **If Figma is not reachable**, ask the user for a screenshot or a link to the exact frame before generating. One screenshot saves several rounds of revision.
3. **Match the Figma exactly** for layout, spacing, colors, type, radius, and component structure. Where this skill's defaults below conflict with Figma, Figma wins.
4. **Extract tokens from Figma** (colors, radii, spacing, font sizes) and map them to Tailwind v4 `@theme` variables so every component draws from one source.

Do not invent a new visual direction for a page that already exists in Figma. Design work here is translation from Figma into code, plus filling in states the Figma file may not show (loading, empty, error, mobile).

## Before you design: check what already exists

If the user's repo files are available, open the global stylesheet (usually `app/globals.css`), the root layout (`app/layout.tsx`), and one or two existing pages or components before generating anything new. The goal is consistency.

Specifically look for and reuse:

- **Theme tokens** in `@theme` (for example `--color-brand-500`, `--color-surface`, `--radius-card`)
- **Spacing and type scale** already in use (Tailwind's default scale is fine if the project follows it)
- **Existing shadcn components** in `components/ui/` - extend them with variants rather than creating parallel versions
- **Shared feature components** (listing card, search bar, price display, rating) - reuse before rebuilding
- **Layout shell** - navbar, footer, container width, and page padding. Follow it.

## The Tripto design language (fallback when Figma is unavailable)

Use these defaults only when the Figma frame or existing tokens do not specify a value. The aesthetic is clean, warm, and image-forward, close in spirit to modern booking platforms like Airbnb or Booking.com, but more restrained.

**Palette (defaults, override to match Figma):**
- Background: off-white (`#FAFAF9`) or pure white for content pages
- Surface (cards, modals): white with a soft border (`neutral-200`) and a faint shadow
- Text: near-black for primary (`neutral-900`), muted for secondary (`neutral-500`)
- Primary accent: one confident brand color used for primary CTAs, active states, and links. Pick one and stick with it.
- Semantic: green for confirmed or available, red for errors or sold-out, amber for warnings or low availability

**Spacing:** Tailwind's 4px base scale, but favor multiples of 8 (`p-4`, `p-6`, `gap-4`, `gap-6`, `py-12`). Avoid arbitrary values like `p-[13px]` unless matching a specific Figma measurement.

**Radius:** `rounded-lg` (8px) for inputs and buttons, `rounded-xl` (12px) for cards, `rounded-2xl` (16px) for modals and large hero containers. Pills and avatars use `rounded-full`.

**Shadows:** subtle only. `shadow-sm` for cards at rest, `shadow-md` on hover for interactive listing cards. No glows, no heavy drop shadows.

**Typography:** Use the font family defined in the Figma file or the project's `next/font` setup. Type scale follows Tailwind defaults: `text-xs` through `text-3xl`. Weights: `font-normal` for body, `font-medium` for labels, `font-semibold` for headings. Prices and dates should use `tabular-nums`.

**Layout patterns:**
- Image-led cards for listings, with price, rating, and location stacked below the image
- Sticky booking or summary panel on detail pages, collapsing below the content on mobile
- Generous whitespace - travel browsing feels cramped quickly
- Left-aligned content by default; centered only for hero search, empty states, and auth
- Responsive grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for listing grids

**Form and input patterns:**
- Label above input, helper text below, error state in red with an icon
- Date ranges use a paired check-in and check-out input backed by shadcn Calendar in a Popover
- Guest and room counters use stepper buttons with minimum and maximum bounds shown
- Price summaries show base price, taxes or fees, and total on separate lines with the total emphasized

## Icons: Lucide React

Install once if missing: `npm install lucide-react`. Import only what you use:

```tsx
import { Search, MapPin, Star, Calendar, Users } from "lucide-react";

<MapPin className="size-4" aria-hidden />
```

Sizing: `size-4` (16px) inline with text, `size-5` (20px) in buttons, `size-6` (24px) for section headers. Icons that stand alone need an `aria-label` on the wrapping button.

Icon defaults for Tripto:
- Search: `search`, Location: `map-pin`, Dates: `calendar`, Guests: `users`
- Rating: `star`, Amenities: `wifi`, `car`, `waves`, `coffee`, `dumbbell`
- Price and payment: `credit-card`, `receipt`, `badge-percent`
- Favorites: `heart`, Share: `share-2`, Close: `x`, Back: `arrow-left`
- Booking status: `check-circle-2`, `clock`, `alert-triangle`

Don't sprinkle icons everywhere. One icon per primary button, one per section heading, one per amenity - that's the right density.

## Output structure

When fulfilling a design request, structure your response like this:

### 1. Short UI plan (2-5 bullets)
Name the key sections of the page or component, notable UX decisions, and any Figma node you matched against. Keep it tight. Example: "Hotel detail page follows Figma node 1-5: image gallery on top, sticky booking card on the right (desktop) that stacks below on mobile, amenities as a 3-column icon grid, reviews summary with rating breakdown."

### 2. The code
- **Page file(s)** - `app/<route>/page.tsx` as a Server Component by default. Add `"use client"` only in components that need state, effects, or event handlers. Use typed props and placeholder data shaped to match the FastAPI response schema.
- **Components** - in `components/<feature>/`, one component per file, with typed props and no unused exports.
- **shadcn usage** - reuse existing `components/ui/` primitives. If a new one is needed, say so and show the `npx shadcn@latest add <name>` command rather than hand-writing it.
- **Tailwind classes** - use utility classes directly in JSX. Only add to `globals.css` when introducing a new `@theme` token. Avoid `@apply` unless matching an existing pattern in the project.
- **Backend hooks** (only if needed) - a typed fetch helper or Pydantic schema stub, kept minimal.

Put each file in its own fenced code block with a path annotation as the first line, for example `// app/hotels/[id]/page.tsx` or `// components/listing/listing-card.tsx`.

### 3. Integration note (1-3 lines)
Which route renders the page, what props or API endpoints the component expects, any new dependency (usually none beyond `lucide-react` and the shadcn primitives already listed), and any Figma node the implementation maps to.

## What to avoid

- **Generic or dated looks** - no default browser buttons, no sharp bordered boxes, no unstyled `<h1>` elements, no stock hero banners without purpose.
- **Figma drift** - do not change spacing, colors, or layout from the Figma frame without saying so explicitly.
- **Code dumps without structure** - always separate page, component, and any token changes into labeled blocks.
- **Over-styling** - solid colors over gradients, borders over heavy shadows. Restraint reads as quality.
- **Inconsistent spacing** - if card padding is `p-4` in one place, use `p-4` everywhere similar.
- **Random accents** - one brand color, semantic colors for meaning, everything else neutral.
- **Client-side overuse** - keep data fetching and static layout in Server Components. Do not mark an entire page `"use client"` when only a search bar needs interactivity.
- **Mobile afterthought** - every page must work at 375px wide. Listing grids stack, booking panels move below content, date pickers become full-width sheets or drawers on small screens.
- **Missing states** - every data-driven component needs loading (skeleton), empty, and error states. Booking flows also need disabled and sold-out states.

## Handling ambiguity

If the user asks for something under-specified ("design the bookings page"), make reasonable assumptions and state them up front in the UI plan, one line each. For example: "Assuming bookings page shows: upcoming and past tabs, booking cards with status badges, and a cancel action behind a confirmation dialog. Let me know if Figma shows something different."

Don't pepper the user with clarifying questions for decisions you can make. Do ask when the answer changes the output, for example: "Is this a standalone page or a modal over the search results?" or "Does Figma node 1-5 cover mobile, or should I design the mobile layout separately?"

## A worked example of the right vibe

**Request:** "Design the listing card for search results"

**UI plan:**
- Card matches the Figma listing frame: image on top with 4:3 aspect ratio, favorite button top-right, price per night bottom-right of image
- Below image: title (2-line clamp), location with `map-pin`, rating with `star`, and a single line of amenity icons
- Entire card is a link to the detail page; favorite button stops propagation
- Hover lifts shadow from `shadow-sm` to `shadow-md`; image scales slightly inside an `overflow-hidden` container

**Component:** `components/listing/listing-card.tsx` - a Server Component with a small client-side `FavoriteButton` child.

**Integration:** rendered inside the search results grid in `app/search/page.tsx`; expects a `Listing` type matching the FastAPI `ListingOut` schema. Uses existing `Card` and `Badge` from `components/ui/`.

That's the shape: concrete, faithful to Figma, consistent with the stack, visually restrained, and immediately usable.