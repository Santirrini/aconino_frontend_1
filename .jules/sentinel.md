
## 2025-04-23 - Prevent XSS by removing dangerouslySetInnerHTML
**Vulnerability:** Use of `dangerouslySetInnerHTML` for rendering post excerpts and styling title keywords without proper sanitization (e.g. `isomorphic-dompurify`).
**Learning:** Found multiple instances where simple plain text extraction (`stripHtml`) or keyword styling was being achieved via HTML string insertion, which introduces a risk of XSS if the content isn't fully trusted or if standard sanitizers are difficult to use in a Next.js SSR environment.
**Prevention:** Centralized `stripHtml` in `src/lib/format.ts` for safe plain text excerpts. Used `String.prototype.split(/(keyword)/i)` with React array mapping to securely highlight keywords instead of string replacing with HTML tags. Avoid `<React.Fragment>` for split arrays under automatic JSX runtimes (use basic elements like `<span>`).
