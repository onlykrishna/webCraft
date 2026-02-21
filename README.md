# WebCraft Agency Frontend Architecture

## 1) Scalable Feature-Driven Folder Tree

```txt
webCraft/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── app/
    │   ├── providers/
    │   │   └── AppProviders.tsx
    │   └── routes/
    │       ├── AppRoutes.tsx
    │       └── ProtectedRoute.tsx
    ├── assets/
    ├── layouts/
    │   ├── AdminLayout.tsx
    │   ├── ClientLayout.tsx
    │   └── PublicLayout.tsx
    ├── pages/
    │   ├── AboutPage.tsx
    │   ├── AuditPage.tsx
    │   ├── BlogPage.tsx
    │   ├── ContactPage.tsx
    │   ├── HomePage.tsx
    │   ├── PortfolioPage.tsx
    │   ├── PricingPage.tsx
    │   └── ServicesPage.tsx
    ├── components/
    │   ├── forms/
    │   │   ├── AuditForm.tsx
    │   │   ├── ContactForm.tsx
    │   │   └── LeadForm.tsx
    │   ├── navigation/
    │   │   ├── Footer.tsx
    │   │   └── Navbar.tsx
    │   ├── sections/
    │   │   ├── CTASection.tsx
    │   │   ├── HeroSection.tsx
    │   │   ├── PortfolioGridSection.tsx
    │   │   ├── ServicesSection.tsx
    │   │   └── TestimonialsSection.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Input.tsx
    │       ├── Loader.tsx
    │       └── Modal.tsx
    ├── features/
    │   ├── admin/
    │   ├── audits/
    │   ├── auth/
    │   ├── blog/
    │   ├── client-portal/
    │   ├── leads/
    │   ├── packages/
    │   ├── projects/
    │   └── testimonials/
    │       └── (components, hooks, services, types, pages)
    ├── firebase/
    │   ├── auth.ts
    │   ├── collections.ts
    │   ├── config.ts
    │   ├── firestore.ts
    │   ├── schema.ts
    │   └── storage.ts
    ├── hooks/
    │   └── useAsync.ts
    ├── services/
    │   └── api.service.ts
    ├── types/
    │   └── global.ts
    ├── utils/
    │   └── date.ts
    └── main.tsx
```

## 2) Folder Responsibilities

- `src/app`: App shell setup (providers, route composition, route guards).
- `src/layouts`: Cross-page shells for public, admin, and client experiences.
- `src/pages`: Top-level public pages.
- `src/components`: Reusable UI primitives, reusable site sections, shared forms, and navigation.
- `src/features/*`: Domain modules with their own `components`, `hooks`, `services`, `types`, and `pages`.
- `src/firebase`: Firebase bootstrapping + auth/firestore/storage helpers + collection constants + schema contracts.
- `src/services`: Cross-domain service abstraction layer for future API orchestration.
- `src/hooks`: Shared hooks reusable across features.
- `src/utils`: Pure utility functions.
- `src/types`: Global/shared type contracts.

## 3) Example File Per Layer

- App shell: `src/app/routes/AppRoutes.tsx`
- Layout: `src/layouts/PublicLayout.tsx`
- Public page: `src/pages/HomePage.tsx`
- Reusable component: `src/components/ui/Button.tsx`
- Feature module: `src/features/leads/services/leads.service.ts`
- Firebase layer: `src/firebase/firestore.ts`
- Shared service: `src/services/api.service.ts`
- Shared hook: `src/hooks/useAsync.ts`
- Utils: `src/utils/date.ts`
- Types: `src/types/global.ts`

## 4) Firebase Schema Definition (Collections)

Defined collections:
- `leads`
- `projects`
- `blogs`
- `testimonials`
- `packages`
- `audits`

Typed interfaces live in `src/firebase/schema.ts`:
- `LeadSchema`
- `ProjectSchema`
- `BlogSchema`
- `TestimonialSchema`
- `PackageSchema`
- `AuditSchema`

## 5) Routing Map

### Public Routes
- `/` → Home
- `/services` → Services
- `/portfolio` → Portfolio
- `/pricing` → Pricing
- `/blog` → Blog
- `/about` → About
- `/contact` → Contact
- `/free-audit` → Free Audit

### Admin Routes (guarded)
- `/admin` → redirects to `/admin/dashboard`
- `/admin/dashboard` → Dashboard overview
- `/admin/leads` → View leads
- `/admin/projects` → Add/manage portfolio projects
- `/admin/blog` → Add/manage blog posts
- `/admin/testimonials` → Add/manage testimonials
- `/admin/audits` → View audit requests

### Client Route
- `/client/:id` → Client portal placeholder (future expansion)

## 6) Roadmap (MVP → Growth → Scale)

### MVP
- Public marketing pages + lead/audit forms.
- Firebase Auth admin login + basic role gate.
- Firestore CRUD for leads, projects, blogs, testimonials, audits.
- Lightweight admin dashboard pages.

### Growth
- Rich text blog editor, media upload with Storage.
- Pagination/filtering/search on admin tables.
- Firestore security rules by role and ownership.
- Analytics instrumentation (conversion funnels, source tracking).

### Scale
- Firebase Functions for heavy workflows (audit scoring, notifications, lead routing).
- Multi-role admin (`editor`, `sales`, `owner`) with granular guards.
- Client portal milestones, documents, approvals, invoices.
- CI/CD, preview channels, observability, and error budgets.
