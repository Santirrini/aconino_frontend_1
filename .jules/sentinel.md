## 2024-05-24 - [Avoid dangerouslySetInnerHTML]
**Vulnerability:** XSS vulnerability through usage of `dangerouslySetInnerHTML` in `src/components/impact/ImpactHeader.tsx` to safely replace a keyword.
**Learning:** React is not defined errors can happen during Next.js automatic JSX runtime if we try mapping to `<React.Fragment>`. To safely highlight specific keywords without relying on HTML sanitization, use `String.prototype.split(/(keyword)/i)` with a capturing group regex.
**Prevention:** Rather than string interpolation into HTML for dynamic strings or keywords, use capturing groups and map the results directly to HTML elements to securely display user input without evaluating it.
