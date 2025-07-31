# Personal Website – Product Requirements Document (PRD)

*Owner / Author:* **Luke Greenwood**  
*Status:* Draft v0.5  
*Last updated:* 31 Jul 2025  

---

## 1 Purpose & Vision
Create a fast, modern personal site that **showcases my professional impact, musical creativity, and published writing**, with room for future technical experiments once the core content is live.

### Objectives
1. **Recruiting** – let hiring managers grasp my value within 2 minutes.  
2. **Thought-Leadership** – spotlight *Comfort and Chaos* and share music performances.  
3. **Self-Learning (Phase 1+)** – leave space to bolt on a Play-Area after launch.

### Success Metrics (first 6 months post-launch)

| Metric                              | Target            | Notes                                    |
| ----------------------------------- | ----------------- | ---------------------------------------- |
| Recruiter / hiring-manager contacts | ≥ 6 per half-year | via email alias & LinkedIn clicks        |
| Lighthouse PWA score                | ≥ 95 (perf + a11y) | CI gate blocks merge < 95                |
| Commit-to-prod cycle time           | ≤ 30 min          | measured in CI/CD                        |

---

## 2 Users & Needs

| Persona                | Primary Need             | Key Tasks                               |
| ---------------------- | ------------------------ | --------------------------------------- |
| *Recruiter / Employer* | Validate skills & impact | Scan Work → download CV → contact       |
| *Collaborator / Peer*  | Hear music, see projects | Browse Music → explore Work             |
| *Friend / Family*      | Catch up on life events  | Read Book page → watch YouTube playlist |
| *Self (Admin)*         | Publish quickly & safely | Add content, monitor metrics            |

---

## 3 Scope

### 3.1 MVP Features – **P0** (Launch)
1. **Responsive Site Framework** – global nav/footer, dark-mode toggle.  
2. **Work Section** – filterable project cards with tags, detail modals, downloadable résumé.  
3. **Music Section** – instrument gallery, embedded YouTube playlist.  
4. **Book Section** – cover, blurb, buy-links, five-page excerpt viewer.  
5. **Contact Footer** – email alias, LinkedIn, GitHub.  
6. **Analytics & Error Logging** – Cloudflare Web Analytics + Sentry.

### 3.2 Post-MVP Features – **P1** (Future Phase)
- **Play-Area v1** – at least one live AI demo (e.g., “Chord-Name Generator”).

### 3.3 Out-of-Scope (for MVP)
- Blog (no plan at this time).  
- E-commerce or merch store.  
- Multi-language localisation.  
- Complex auth flows; site is public-read, admin via repo only.

---

## 4 Detailed Requirements

### 4.1 Functional Requirements & Acceptance Criteria
1. **Navigation** – Mobile hamburger & desktop bar auto-collapse. **AC:** All top-level pages reachable ≤ 2 clicks, keyboard navigable.  
2. **Work Project Cards** – Data-driven (YAML / CMS fields). **AC:** Recruiter can filter by company; modal opens within 150 ms.  
3. **YouTube Embeds** – Lazy-loaded thumbnails; player only loads on click. **AC:** Time-to-interactive increase ≤ 100 ms on Home.  
4. **Accessibility** – WCAG 2.1 AA; focus outlines visible. **AC:** axe-core CI passes with no serious violations.  
5. **SEO & Social** – Per-page meta title/description + OpenGraph. **AC:** Twitter Card validator passes.

### 4.2 Non-Functional Requirements

| Category        | Requirement                                                   |
| --------------- | ------------------------------------------------------------- |
| Performance     | FCP ≤ 1.8 s on 3G, CLS < 0.1                                  |
| Security        | All traffic via HTTPS; CSP & HSTS headers                     |
| Maintainability | Codebase ≤ 2 core deps + Tailwind; ESLint & Prettier enforced |
| Hosting Cost    | **≈ US$0** (Vercel Hobby)                                     |
| Compliance      | No personal data stored beyond anonymised analytics           |

### 4.3 Content Inventory

| Asset                | Source        | Owner | Status          |
| -------------------- | ------------- | ----- | --------------- |
| Résumé PDF           | Google Drive  | Luke  | ✅               |
| Lyft robotics images | Internal deck | Luke  | ⬜ collecting    |
| Book cover (300 dpi) | Publisher     | Luke  | ✅               |
| YouTube playlist IDs | YouTube       | Luke  | ✅               |
| Instrument photos    | iCloud        | Luke  | ⬜ select & edit |

---

## 5 Information Architecture (Launch)
Home
├─ Work
│ └─ Project detail (dynamic)
├─ Music
│ └─ Instrument detail (optional)
├─ Book
└─ 404 / 500 pages

*(Play-Area branch will be added in Phase 1)*

---

## 6 Milestones & Timeline

| Epic                    | Start       | End         | Owner  | Deliverable              |
| ----------------------- | ----------  | ----------  | ------ | ------------------------ |
| Discovery & Asset Audit | 4 Aug 2025  | 6 Aug 2025  | Luke   | Asset list, refined IA   |
| Walking Skeleton        | 7 Aug       | 13 Aug      | AI Dev | Deployed skeleton w/ nav |
| Work Section Slice      | 14 Aug      | 20 Aug      | AI Dev | Project cards live       |
| Music Section Slice     | 21 Aug      | 27 Aug      | AI Dev | Gallery + embeds         |
| Book Section Slice      | 28 Aug      | 2 Sep       | AI Dev | Landing page live        |
| QA & Perf Hardening     | 3 Sep       | 6 Sep       | Luke   | ≥ 95 Lighthouse          |
| Public Launch           | 9 Sep       | 9 Sep       | Luke   | Domain switched          |
| **Phase 1: Play-Area**  | TBD         | TBD         | AI Dev | First demo shipped       |

---

## 7 Risks & Mitigations

| Risk                 | Probability | Impact | Mitigation                       |
| -------------------- | ----------- | ------ | -------------------------------- |
| Content creation lag | Medium      | Medium | Reserve weekly 2-hr writing slot |
| AI code quality      | Medium      | Medium | PR review + unit tests           |
| Performance issues   | Low         | High   | Lighthouse CI in pipeline        |

---

## 8 Assumptions & Dependencies
- Core stack decisions captured in Section 9 Tech Design.  
- Images optimised via built-in image component.

---

## 9 Tech Design Overview (MVP)

### 9.1 Stack Choice

| Layer          | Decision                                                                         | Rationale                                                                   |
| -------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Framework**  | **Next.js 14** (App Router) with **Static Site Generation** (`output: 'export'`) | Huge AI codebase familiarity, MDX support, easy path to server routes later |
| **Language**   | TypeScript                                                                       | Type-safe, well-supported by tooling & AI                                   |
| **Styling**    | Tailwind CSS + Radix UI primitives                                               | Utility-first speed + ready-made accessible components                      |
| **Content**    | MDX files in `/content/` with front-matter                                       | Git-native workflow, version control, simple for AI PRs                     |
| **Icons**      | Lucide                                                                           | Lightweight SVG set                                                         |
| **Analytics**  | **Cloudflare Web Analytics (free)**                                              | Zero-cost, privacy-respecting, simple script                                |
| **Error Mon.** | Sentry (free tier)                                                               | Exception tracking                                                          |

### 9.2 Hosting & Deployment
- **Platform:** Vercel Hobby (free) — auto-deploy on push to `main` + preview builds per PR.  
- **Runtime cost:** \$0 (static export served via Vercel Edge CDN).  
- **Domain:** `lukeg.me` with A/AAAA records pointing to Vercel.  
- SSL certs managed automatically by Vercel.

### 9.3 CI / CD Pipeline (GitHub Actions)

| Job              | Tools                       | Gate/Artifact          |
| ---------------- | --------------------------- | ---------------------- |
| `lint`           | ESLint + Prettier           | fail on error          |
| `type-check`     | `tsc --noEmit`              | fail on error          |
| `accessibility`  | axe-core via Playwright     | warn on new violations |
| `build-export`   | `next build && next export` | upload `out/` artifact |
| `lighthouse-ci`  | Google Lighthouse CLI       | fail if perf < 95      |
| `deploy-preview` | Vercel GitHub App           | automatic              |

### 9.4 Content Workflow
1. Create or edit MDX in `/content/{section}`.  
2. Commit to feature branch → PR.  
3. Agentic AI can open PRs.  
4. Preview deploy + Lighthouse runs.  
5. Human review → merge → auto-deploy.

### 9.5 Cost Estimate (Monthly)

| Item          | Cost | Notes      |
| ------------- | ---- | ---------- |
| Vercel Hobby  | \$0  |            |
| Cloudflare WA | \$0  | Analytics  |
| Sentry        | \$0  | Error Mon. |
| Domain        | ~\$1 | averaged   |
| **Total**     | **≈ \$1** |        |

### 9.6 Scalability & Reliability
- Static files on global CDN—millisecond response, high tolerance.  
- Monitoring: Vercel status + Sentry alerts.  
- Backup: rebuildable from Git at any time.

### 9.7 Security Hardening
- `next-secure-headers` for CSP, HSTS, X-Content-Type-Options, Referrer-Policy.  
- Dependabot auto-PRs for dependency bumps.

### 9.8 Path to v2 (Server Capable)
- Switch `output` to hybrid; enable API Routes.  
- Add PlanetScale + Prisma for data.  
- Add Auth (Clerk/Auth.js) if login needed.

---

## 10 Design & UI Guidelines

### 10.1 Visual Language
- **Palette** – deep forest green `#124C2F`, earthy brown `#5A381E`, neutral cream `#F4F4F2`, **accent moss green `#2FA15E`**.  
- **Dark Mode** – invert text/cream background, maintain contrast ≥ 4.5:1.  
- **Typography** – *Inter* headings 600; system-sans body 400; 1.4 line-height.  
- **Grid** – 12-column responsive; mobile 4-col, tablet 8, desktop 12; max-width 1280 px.

### 10.2 Components & States

| Element    | Spec                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------ |
| **Card**   | `rounded-2xl shadow-md p-6 hover:shadow-xl transition`                                     |
| **Button** | `rounded-xl px-4 py-2 font-medium bg-green-700 text-white hover:bg-green-800 focus:ring-2` |
| **Links**  | Underline on hover; active section highlighted with accent border-b-2                      |
| **Modals** | Centered, max-w-2xl, dark overlay `bg-black/60`                                            |

### 10.3 Imagery & Media
- Compress with `next/image`; serve AVIF/WebP.  
- Descriptive `alt` text for accessibility.  
- Instrument photos in 3:2 aspect; cedar backdrop echoes redwoods.

### 10.4 Motion
- Framer Motion fade-in `duration:0.4`, `ease:'easeOut'`.  
- Respect `prefers-reduced-motion`.

### 10.5 Accessibility Checklist
- Keyboard navigable.  
- Visible focus rings (`ring-2 ring-offset-2`).  
- `aria-label` for icons.  
- axe-core CI scan.

---

## 11 Open Questions
1. Should Play-Area live on sub-domain or internal path?  
2. Cloudflare Pages vs keeping Vercel previews—worth swapping?

---

## 12 Appendices

### 12.1 Glossary
*P0* – must-have for Day 1; *P1* – first phase after launch.

### 12.2 Work-Tracking Board Reference
Tasks and statuses managed in Notion board (**link-placeholder**); views: By Epic, By Owner.
