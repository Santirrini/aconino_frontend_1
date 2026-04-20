## 2026-04-20 - [High] Fix XSS Vulnerability in dangerouslySetInnerHTML
**Vulnerability:** Found `dangerouslySetInnerHTML` directly using unsanitized CMS content (`excerpt` and `postExcerpt`) in `PostCard.tsx` and `NewsCard.tsx`.
**Learning:** CMS data must be explicitly sanitized, especially for rich-text like an excerpt. `sanitize-html` is used because isomorphic-dompurify crashes the Next.js SSR build process due to missing jsdom.
**Prevention:** To render a string with safe HTML tags without risking XSS, explicitly pass the variable through `sanitize-html` configured with an explicit allowlist. When highlighting keywords (as in `ImpactHeader.tsx`), use string splitting and React mappings to render native elements rather than `dangerouslySetInnerHTML`.
