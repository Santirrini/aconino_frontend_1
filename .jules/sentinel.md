## 2026-04-02 - [Next.js XSS Sanitization]
**Vulnerability:** XSS vulnerability where untrusted HTML from CMS data (like WordPress excerpts or user-controlled input) is injected directly via `dangerouslySetInnerHTML`.
**Learning:** `isomorphic-dompurify` should not be used in this project because it breaks Next.js static generation (SSG) and builds. It triggers `jsdom` ENOENT errors when executed in SSR contexts.
**Prevention:** Use the `xss` library as an alternative for sanitizing HTML. When allowing custom properties, such as Tailwind classes on elements, instantiate `xss.FilterXSS` with a custom `whiteList`.
