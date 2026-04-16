## 2024-05-18 - Fix XSS in ImpactHeader
**Vulnerability:** XSS via `dangerouslySetInnerHTML` in `ImpactHeader.tsx` where user input could be injected if the `title` prop was sourced from CMS.
**Learning:** The previous implementation used `dangerouslySetInnerHTML` to perform string replacement with HTML (`title.replace("transforma", "<span...>transforma</span>")`), which opens the door for XSS if `title` is untrusted.
**Prevention:** Avoid `dangerouslySetInnerHTML` for simple string formatting. Instead, use string splitting `string.split(/(keyword)/i)` with a mapping function to render safe React elements.
