import { FilterXSS, getDefaultWhiteList } from 'xss';

const customWhiteList = getDefaultWhiteList();

// Extend the default whitelist to allow 'class' and 'style' attributes for basic tags
for (const tag in customWhiteList) {
  customWhiteList[tag] = customWhiteList[tag]?.concat(['class', 'style']);
}
if (!customWhiteList.span) customWhiteList.span = ['class', 'style'];
if (!customWhiteList.div) customWhiteList.div = ['class', 'style'];

const xssFilter = new FilterXSS({
  whiteList: customWhiteList,
});

/**
 * Sanitizes HTML strings to prevent XSS vulnerabilities.
 * Preserves Tailwind CSS classes and styles.
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  return xssFilter.process(html);
}
