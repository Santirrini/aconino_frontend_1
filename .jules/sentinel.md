## 2024-05-20 - [Safe Keyword Highlighting in Next.js]
**Vulnerability:** XSS risk from using `dangerouslySetInnerHTML` for keyword highlighting in `ImpactHeader.tsx`.
**Learning:** Using `dangerouslySetInnerHTML` for simple text styling is risky, especially when dynamic props are involved. Additionally, using `<React.Fragment>` when mapping parts array causes runtime crashes in Next.js when `React` is not explicitly imported (due to automatic JSX runtime).
**Prevention:** Use `String.prototype.split()` with a capturing group regex to chunk the string, then map over it returning regular HTML elements like `<span>` with `key` props to apply styles safely without `dangerouslySetInnerHTML` or explicit `<React.Fragment>` usage.
