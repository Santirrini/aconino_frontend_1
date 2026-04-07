## 2024-05-09 - XSS Vulnerability in CMS Excerpts and Header Props
**Vulnerability:** The application was passing un-sanitized CMS data (excerpts) and component props (`title`) directly into `dangerouslySetInnerHTML`. Specifically, `src/components/blog/NewsCard.tsx`, `src/components/PostCard.tsx`, and `src/components/impact/ImpactHeader.tsx` were vulnerable to XSS.
**Learning:** `dangerouslySetInnerHTML` should never be trusted with external input, even from a seemingly safe CMS, without first sanitizing the HTML. Also, for simple string replacements wrapped in styling (like the `title` prop in `ImpactHeader.tsx`), we can avoid `dangerouslySetInnerHTML` altogether by using `.split(/(keyword)/i)` and mapping the segments to React elements. Finally, `isomorphic-dompurify` caused SSR `jsdom` ENOENT errors, so we had to use `xss` with a custom whitelist to preserve Tailwind classes.
**Prevention:**
1. Always sanitize HTML from CMS sources before rendering it via `dangerouslySetInnerHTML` using the new utility `src/utils/sanitize.ts`.
2. Avoid `dangerouslySetInnerHTML` for basic keyword highlighting by using `.split()` and React fragment mapping instead.
3. Keep the `xss` custom whitelist updated if new global HTML attributes are needed.
