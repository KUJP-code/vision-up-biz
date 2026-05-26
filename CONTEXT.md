# Project Context - Kids UP AI Teacher Landing Page

## Project Overview
This project is a clone of the B2B landing page for **Kids UP AI Teacher** (hosted locally and deployed to the production site at `https://vision-up.biz/ai`). The target audience is preschool, nursery, and kindergarten owners/directors looking to introduce high-quality native English education.

## Core Preferences & Constants
*   **Design Paradigm:**
    *   **Desktop:** Centered white glassmorphic card overlaid on top of the classroom TV background. Jack explicitly dislikes split-screen or multi-column hero layouts for this page.
    *   **Mobile:** Stacked vertical flow where the card sits at the top (with a clean white background, brand top border) and the classroom TV image displays in full right below the card. This ensures that no text covers the teacher's face, children, or Jot character Jot on small viewports.
*   **Brand Colors:**
    *   Vision UP Brand Blue: `#00adcf`
    *   Kids UP Brand Orange: `#ef8200`
*   **Git Identity:** Managed strictly under the user profile `r-callan777`.
*   **Live Deployments:** Production builds are pushed to the `deploy` branch which is linked to Render.

## Key Learnings & Decisions
1.  **Layout Structure:**
    *   Desktop uses a single centered premium glassmorphism card layout on the TV hero background.
    *   Mobile viewports stack the white card and the classroom image vertically to avoid covering the image content entirely.
2.  **Typography & Contrast:**
    *   Main hero titles use high-contrast dark coloring (`#111111` for h1, `#333333` for h2) on a semi-opaque white background (`rgba(255, 255, 255, 0.94)`).
    *   Added brand-colored text highlights: `.highlight-blue` (for "園の差別化") and `.text-brand-orange` (for "Kids UP AI Teacher").
    *   Introduced a top B2B badge: `<span class="hero-badge">幼稚園・保育園・認定こども園向け AI英語教育</span>` to immediately establish context for visiting directors.
3.  **Title Wrap/Break Fixes:**
    *   Applied `white-space: nowrap` and `clamp()` to `.extravocation` h3 titles on desktop to eliminate ugly mid-word breaks (like "ランキン / グ" or "重視ポイ / ント").
    *   Used responsive media queries to revert to normal wrapping (`white-space: normal`) on mobile viewports.
