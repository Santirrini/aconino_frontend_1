## 2025-04-03 - [Tailwind Styling Removed by HTML Sanitizers]
**Vulnerability:** XSS vulnerability from missing sanitization on HTML generated with `dangerouslySetInnerHTML`.
**Learning:** Adding the `xss` library as a default sanitization strips all class names, breaking Tailwind CSS layout and styles entirely.
**Prevention:** Always instantiate `FilterXSS` with a custom `whiteList` extending the default and allowing `class` attributes on tags that need styling like `span` when resolving XSS vulnerabilities in Next.js + Tailwind applications.
