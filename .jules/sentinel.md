## 2025-04-08 - [XSS] Fix dangerouslySetInnerHTML usage
**Vulnerability:** Found `dangerouslySetInnerHTML` directly using `__html: excerpt` and `__html: title` in `src/components/blog/NewsCard.tsx`, `src/components/impact/ImpactHeader.tsx`, and `src/components/PostCard.tsx` which could expose the app to XSS attacks.
**Learning:** Using `dangerouslySetInnerHTML` directly with unsanitized API strings leads to vulnerabilities, but using isomorphic-dompurify caused jsdom ENOENT issues. Using 'xss' was successful.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `sanitizeHtml(...)` function, utilizing a library like 'xss' and extending its whitelist to allow formatting properties.
